import { useState } from "react";
import axios from "axios";
import { FiSend, FiMessageCircle, FiX } from "react-icons/fi";
import "../styles/Chatbot.css";

type Message = {
  text: string;
  sender: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Replace Mistral API with your API Gateway URL
  const API_GATEWAY_URL =
    "https://hkpsidiek0.execute-api.ap-south-1.amazonaws.com/mindful-engineer-mistral-proxy";

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      // Keep only the last 5 messages (for short-term memory)
      const recentMessages = messages.slice(-5).map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      }));

      // Add system message only if it's the first message in a new chat
      if (messages.length === 0) {
        recentMessages.unshift({
          role: "system",
          content:
            "You are a chatbot that helps users with mindfulness and meditation. Also remember, that you are a representative of Divyansh while he is not here.",
        });
      }

      // ✅ Call API Gateway Instead of Mistral Directly
      const response = await axios.post(API_GATEWAY_URL, {
        model: "mistral-small",
        messages: [...recentMessages, { role: "user", content: input }],
      });

      const botMessage = response.data.response.choices[0].message.content || "⚠️ No response from AI.";
      setMessages([...newMessages, { text: botMessage, sender: "bot" }]);
    } catch (error) {
      console.error("Error calling API Gateway:", error);
      setMessages([...newMessages, { text: "⚠️ Error fetching response. Try again.", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-wrapper">
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <span>Mindful Chatbot</span>
            <FiX size={20} className="close-btn" onClick={() => setIsOpen(false)} />
          </div>

          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading}
            />
            <button onClick={sendMessage} disabled={loading}>
              {loading ? "..." : <FiSend size={18} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

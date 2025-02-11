import { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import "../styles/Home.css";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/api/message").then((response) => {
      setMessage(response.data.message);
    });
  }, []);

  return (
    <div className="container">
      <Header />
      <p className="message">{message}</p>
      <div></div>
    </div>
  );
};

export default Home;

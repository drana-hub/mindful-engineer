import { useLanguage } from "../context/LanguageContext";

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "hi" : "en")}
      style={{ margin: "10px", padding: "5px", cursor: "pointer" }}
    >
      {language === "en" ? "हिन्दी में बदलें" : "Switch to English"}
    </button>
  );
}

export default LanguageSwitcher;

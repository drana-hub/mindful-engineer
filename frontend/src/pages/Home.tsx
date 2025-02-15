import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "../styles/Home.css";
// import Chatbot from "../components/Chatbot";

function Home() {
  const { t } = useLanguage();

  return (
    <div className="home-container">
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      {/* Content */}
      <div className="content">
        
        <LanguageSwitcher />

        <h1 className="title">{t("welcome")}</h1>
        <p className="subtitle">{t("subtitle")}</p>

        <div className="button-container">
          <Link to="/meditations">
            <button className="primary-button">{t("meditationBtn")}</button>
          </Link>
          {/* <Link to="/gallery">
            <button className="secondary-button">{t("galleryBtn")}</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Home;

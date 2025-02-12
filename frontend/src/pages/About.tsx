import { useLanguage } from "../context/LanguageContext";
import '../styles/About.css';

function About() {
  const { t } = useLanguage();

  return (
    <div className="about-page" style={{ textAlign: "center", padding: "40px"}}>
      <h1>{t("aboutTitle")}</h1>
      <p>{t("aboutIntro")}</p>

      <h2>{t("journeyTitle")}</h2>
      <p>{t("journeyText")}</p>

      <h2>{t("missionTitle")}</h2>
      <p>{t("missionText")}</p>

      <h2>{t("whatToFindTitle")}</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>💡 Short, easy-to-follow **meditation techniques**</li>
        <li>📸 A **photo gallery** with my reflections on life</li>
        <li>🚀 Technical insights into **software development & DevOps**</li>
        <li>🌱 A platform to **explore self-awareness & focus**</li>
      </ul>

      <h2>{t("contactTitle")}</h2>
      <p>{t("contactText")}</p>
    </div>
  );
}

export default About;

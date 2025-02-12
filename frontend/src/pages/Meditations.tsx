import BreathingExercise from "../components/BreathingExercise";
import MeditationTimer from "../components/MeditationTimer";
import '../styles/Meditations.css'
// import { useLanguage } from "../context/LanguageContext";

function Meditations() {
  // const { t } = useLanguage();

  return (
    <div className="meditation-container">
      {/* <h1>{t("meditationTitle")}</h1>
      <p>{t("meditationSubtitle")}</p> */}

      <BreathingExercise />
      <MeditationTimer />

      {/* <h3>{t("reflectionQuestion")}</h3>
      <p>{t("reflectionDescription")}</p> */}
    </div>
  );
}

export default Meditations;

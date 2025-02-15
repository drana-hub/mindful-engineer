import { useReducer, useEffect, useState } from "react";
import "../styles/BreathingExercise.css";

const phases = [
  { phase: "Breathe In...", duration: 4000 },
  { phase: "Hold...", duration: 7000 },
  { phase: "Breathe Out...", duration: 8000 },
];

function reducer(
  state: { phase: string; count: number; score: number },
  action: { type: string }
) {
  switch (action.type) {
    case "NEXT_PHASE": {
      const nextCount = (state.count + 1) % phases.length;
      const nextScore = nextCount === 0 ? state.score + 1 : state.score;
      return {
        phase: phases[nextCount].phase,
        count: nextCount,
        score: nextScore,
      };
    }
    case "RESET":
      return { phase: phases[0].phase, count: 0, score: 0 };
    default:
      return state;
  }
}

function BreathingExercise() {
  const [state, dispatch] = useReducer(reducer, {
    phase: phases[0].phase,
    count: 0,
    score: 0,
  });
  const [isRunning, setIsRunning] = useState(false);
  const [countdown, setCoundown] = useState(phases[0].duration / 1000);

  useEffect(() => {
    if (!isRunning) return;

    // Set initial countdown
    setCoundown(phases[state.count].duration / 1000);

    const phaseInterval = setInterval(() => {
      dispatch({ type: "NEXT_PHASE" });
    }, phases[state.count].duration);

    const countdownInterval = setInterval(() => {
      setCoundown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(phaseInterval);
      clearInterval(countdownInterval);
    };
  }, [isRunning, state.count]);

  const startGame = () => {
    setIsRunning(true);
    dispatch({ type: "RESET" });
  };

  const stopGame = () => {
    setIsRunning(false);
    dispatch({ type: "RESET" });
    setCoundown(phases[0].duration / 1000);
  };

  return (
    <div className="breathing-ex">
      <div className="background-overlay"></div>
      <div className="content">
        <p>Follow the guided breathing pattern.</p>
        <h3>Score: {state.score}</h3>
        <h2>{state.phase}</h2>
        {isRunning && <h3>{countdown}</h3>}
        <button onClick={startGame} disabled={isRunning}>
          Start Game
        </button>
        <button onClick={stopGame} disabled={!isRunning}>
          Stop Game
        </button>
      </div>
    </div>
  );
}

export default BreathingExercise;

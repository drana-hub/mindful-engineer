import { useReducer, useEffect } from "react";
import '../styles/BreathingExercise.css'

const phases = ["Breathe In...", "Hold...", "Breathe Out..."];

function reducer(state: { phase: string; count: number }, action: { type: string }) {
  switch (action.type) {
    case "NEXT_PHASE":
      return { phase: phases[(state.count + 1) % phases.length], count: state.count + 1 };
    default:
      return state;
  }
}

function BreathingExercise() {
  const [state, dispatch] = useReducer(reducer, { phase: phases[0], count: 0 });

  useEffect(() => {
    const interval = setInterval(() => dispatch({ type: "NEXT_PHASE" }), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="breathing-ex" style={{ padding: "40px", textAlign: "center" }}>
      <h2>{state.phase}</h2>
      <p>Follow the guided breathing pattern.</p>
    </div>
  );
}

export default BreathingExercise;

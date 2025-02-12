import { useState, useEffect, useCallback } from "react";

function MeditationTimer() {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);

  const startTimer = useCallback(() => {
    setIsActive(true);
  }, []);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive, timeLeft]);

  return (
    <div style={{ textAlign: "center", padding: "20px", color: "purple" }}>
      <h2>Time Left: {timeLeft}s</h2>
      <button onClick={startTimer} disabled={isActive}>
        Start Focus
      </button>
    </div>
  );
}

export default MeditationTimer;

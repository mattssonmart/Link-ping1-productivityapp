import { useState, useEffect } from "react";

function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const stopTimer = () => {
    setIsRunning(false);
    setTotalSeconds(0);
  };

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <div>
      <h1>
        Timer: {minutes} min {seconds} sek
      </h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Paus</button>
      <button onClick={stopTimer}>Stopp</button>
    </div>
  );
}

export default Timer;

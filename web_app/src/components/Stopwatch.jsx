import { useState, useEffect } from "react";

function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [savedTimes, setSavedTimes] = useState(() => {
    const saved = localStorage.getItem("savedTimes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  // Spara tider i localStorage när listan ändras
  useEffect(() => {
    localStorage.setItem("savedTimes", JSON.stringify(savedTimes));
  }, [savedTimes]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);

  const stopTimer = () => {
    setIsRunning(false);
    setTotalSeconds(0);
  };

  const saveTime = () => {
    if (totalSeconds > 0) {
      setSavedTimes((prev) => [...prev, totalSeconds]);
    }
  };

  const clearSavedTimes = () => {
    setSavedTimes([]);
    localStorage.removeItem("savedTimes");
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
      <button onClick={saveTime}>Spara tid</button>
      <button onClick={clearSavedTimes}>Radera sparade tider</button>

      <h2>Sparade tider</h2>

      <ul>
        {savedTimes.map((time, index) => (
          <li key={index}>
            {Math.floor(time / 60)} min {time % 60} sek
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timer;

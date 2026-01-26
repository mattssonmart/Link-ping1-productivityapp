import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);
  const startedAtRef = useRef(0);

  useEffect(() => {
    if (!isRunning) return;

    // anchor the start time so we can compute elapsed accurately
    startedAtRef.current = Date.now() - elapsedMs;

    intervalRef.current = setInterval(() => {
      setElapsedMs(Date.now() - startedAtRef.current);
    }, 10);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, elapsedMs]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setElapsedMs(0);
  };

  const format = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const millis = ms % 1000;

    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");
    const mmm = String(millis).padStart(3, "0");

    return `${mm}:${ss}.${mmm}`;
  };

  return (
    <div className="page">
      <h1 className="title">01-Stopwatch</h1>

      <div className="timer" aria-label="Stopwatch time">
        {format(elapsedMs)}
      </div>

      <div className="buttons">
        {!isRunning ? (
          <button className="btn primary" onClick={start}>
            Start
          </button>
        ) : (
          <button className="btn primary" onClick={pause}>
            Pause
          </button>
        )}

        <button className="btn" onClick={reset} disabled={elapsedMs === 0}>
          Reset
        </button>
      </div>
    </div>
  );
}

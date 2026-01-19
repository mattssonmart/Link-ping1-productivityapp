import { useState } from "react";
import TimerName from "./components/TimerName";

function App() {
  const [entries, setEntries] = useState([]);

  const handleSave = (data) => {
    const entryWithTime = { ...data, time: new Date().toLocaleTimeString() };
    setEntries(prev => [...prev, entryWithTime]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Timer + Formulär</h1>
      <TimerName onSave={handleSave} />

      <h2>Sparade poster:</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>{entry.name}</strong> (Effektivitet: {entry.efficiency}, Energi: {entry.energy})<br />
            {entry.message}<br />
            {entry.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useState } from "react";
import TimerName from "./components/TimerName"; 

function App() {
  const [entries, setEntries] = useState([]);

  const handleSave = (data) => {
    const entryWithTime = { ...data, time: new Date().toLocaleTimeString() };
    setEntries(prev => [...prev, entryWithTime]);
  };

  return (
    <div>
      <h1>Timer + Formulär</h1>
      <TimerName onSave={handleSave} />

      <h2>Sparade poster:</h2>
      <ul>
        {entries.map((entry, i) => (
          <li key={i}>
            <strong>{entry.name}</strong>: {entry.message} ({entry.time})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useState } from "react";

function TimerName({ onSave }) {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        efficiency: 3,
        energy: 3
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData (prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulärdata', formData);
    
        if (onSave) {
            onSave(formData);
        }

        setFormData ({ name: '', message: '', efficiency: 3, energy: 3 });

    };

    return (
        <form onSubmit = {handleSubmit}>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Namnge block"
            required
            />
            <label>efficiency</label>
            <div>
            {[1, 2, 3, 4, 5].map(num => (
                <label key={num} style={{ marginRight: '10px'}}>
                <input
                    type="radio"
                    name="efficiency"
                    value={num}
                    checked={formData.efficiency === num}
                    onChange={() => setFormData(prev => ({ ...prev, efficiency: num }))}
                />
                {num}
                </label>
            ))}
            </div>
            <label>Energy</label>
            <div>
            {[1, 2, 3, 4, 5].map(num => (
                <label key={num} style={{ marginRight: '10px'}}>
                <input
                    type="radio"
                    name="energy"
                    value={num}
                    checked={formData.energy === num}
                    onChange={() => setFormData(prev => ({ ...prev, energy: num }))}
                />
                {num}
                </label>
            ))}
            </div>

            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="kommentar"
                required
            />
            <button type="submit">Spara</button>
            </form>
    );


};

export default TimerName;

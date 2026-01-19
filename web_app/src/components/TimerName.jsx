import { useState } from "react";

function TimerName({ onSave }) {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
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

        setFormData ({ name: '', message: '' });

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

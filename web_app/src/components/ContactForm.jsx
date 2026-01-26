import { useState } from 'react'

function ContactForm() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

    const handleChange = (event) => {
    const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
                [name]: value
    }));
};

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulärdata:', formData);
    };


return (
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Ditt namn"
    />

    <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Din e-post"
    
    />
    
    <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Ditt meddelande"
    />

    <button type="submit">Skicka</button>
    </form>
    );
    }

    export default ContactForm
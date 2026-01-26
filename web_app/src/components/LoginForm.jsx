import { useState } from "react";

const MOCK_USER = {
  email: "mattias@test.se",
  password: "123",
  name: "Mattias",
};

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
      setError("");
        setLoading(true);

   
    setTimeout(() => {
      if (
        email === MOCK_USER.email &&
        password === MOCK_USER.password
      ) {
        alert(`Välkommen ${MOCK_USER.name}!`);
      } else {
        setError("Fel e-post eller lösenord!");
      }

      setLoading(false);
    }, 800);
  };

  return (
    <div className="card-login">
      <h1>Logga in</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-postadress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Loggar in..." : "Logga in"}
        </button>
      </form>

      <a href="#" className="forgot-password">
        Glömt lösenord?
      </a>
    </div>
  );
}

export default LoginForm;
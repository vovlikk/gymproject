import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../BusinnesCss/Login.css';

import { useLockBodyScroll } from "../../Hooks/useLockBodyScroll";

function Login({ onClose }) {
  const [logemail, setLogEmail] = useState('');
  const [logUserName, setLogUserName] = useState('');
  const [logPassword, setLogPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useLockBodyScroll();

  async function HandlerLogin(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const userLogin = { Email: logemail, UserName: logUserName, Password: logPassword };

    try {
      const response = await fetch('https://414b7a5d1e97.ngrok-free.app/api/values/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },  
        body: JSON.stringify(userLogin),
      });

      if (!response.ok) {
        const resperror = await response.json().catch(() => null);
        throw new Error(resperror?.message || "Fail Login");
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);

      alert('Login Successful');

      navigate('/user');

    } catch (err) {
      setError(err.message || "Fail Login");
    } finally {
      setLoading(false);
      setLogPassword('');
      setLogUserName('');
      setLogEmail('');
    }
  }

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-form" onClick={e => e.stopPropagation()}>
        <div className="login-header">
          <button className="close-btn" onClick={onClose}>✖</button>
          <h1 className="login-title">Gym Center</h1>
        </div>

        <div className="login-body">
          <input
            className="input-email"
            onChange={e => setLogEmail(e.target.value)}
            value={logemail}
            type="email"
            placeholder="Enter Email"
          />
          <input
            className="input-username"
            onChange={e => setLogUserName(e.target.value)}
            value={logUserName}
            type="text"
            placeholder="Enter Username"
          />
          <input
            className="input-password"
            onChange={e => setLogPassword(e.target.value)}
            value={logPassword}
            type="password"
            placeholder="Enter Password"
          />
        </div>

        <div className="login-actions">
          <button
            type="submit"
            className="register-button-btn"
            onClick={HandlerLogin}
            disabled={loading}
          >
            Login
          </button>
        </div>

        <div className="login-feedback">
          {error && <div className="error-message">{error}</div>}
          {loading && <div className="loading-message">Loading...</div>}
        </div>

        <div className="login-privacy">
          <h2>
            By clicking “Login” you agree to our <br />
            terms and privacy policy.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;

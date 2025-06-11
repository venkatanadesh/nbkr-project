import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import logo from './NBKRIST_logo copy.png';

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Login attempt submitted!");
    navigate('/Login');
  };

  const handleSignup = () => {
    navigate('/signup');  // Redirect to Signup Page
  };

  return (
    <div className="login-container">
      <img src={logo} alt="NBKRIST Logo" className="logo" />
      <h2>Welcome to NBKRIST</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p onClick={handleSignup} className="signup-text">
          Signup
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
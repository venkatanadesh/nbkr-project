import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import logo from './NBKRIST_logo copy.png';

function SignupPage() {
  const [form, setForm] = useState({
    fullName: '',
    rollNumber: '',
    dob: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (form.fullName.length < 5) {
      newErrors.fullName = "Full Name must be at least 5 characters.";
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!form.role) {
      newErrors.role = "Please select a role.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      alert("Signup Successful!");
      console.log("Form submitted", form);
      navigate('/Register'); // Navigate only after success
    }
  };

  return (
    <div className="signup-container">
      <img src={logo} alt="NBKRIST Logo" className="logo" />
      <h2>Signup to NBKRIST</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        {errors.fullName && <small>{errors.fullName}</small>}

        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          value={form.rollNumber}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {errors.email && <small>{errors.email}</small>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && <small className="error-text">{errors.confirmPassword}</small>}

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          style={{
            width: '95%',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #aaa',
            marginBottom: '10px'
          }}
          required
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Faculty">Faculty</option>
          <option value="Admin">Admin</option>
        </select>
        {errors.role && <small>{errors.role}</small>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignupPage;
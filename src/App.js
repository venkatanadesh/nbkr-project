import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import FacultyDashboard from './FacultyDashboard';
import ProfileUpdate from './ProfileUpdate';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/Register" element={<LoginPage/>} />
        <Route path="/Login" element={<FacultyDashboard />} />
         <Route path="/ProfileUpdate" element={<ProfileUpdate/>} />
      </Routes>
    </Router>
  );
}
export default App;
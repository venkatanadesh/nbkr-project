import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import FacultyDashboard from './FacultyDashboard';
import ProfileUpdate from './ProfileUpdate';
import TimeTable from './TimeTable';
import Salary from './Salary';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/Register" element={<LoginPage/>} />
        <Route path="/Login" element={< FacultyDashboard />} />
        <Route path="/ProfileUpdate" element={<ProfileUpdate />} />
        <Route path="/TimeTable" element={<TimeTable />} />
        <Route path="/Salary" element={<Salary />} />
        <Route path="/FacultyDashboard" element={<FacultyDashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
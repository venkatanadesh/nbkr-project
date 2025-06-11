import React, { useState } from 'react';
import logo from './NBKRIST_logo copy.png';
import { useNavigate } from 'react-router-dom';
import './App.css';

function FacultyDashboard() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
   const handleProfileUpdate = () => {
    navigate('/ProfileUpdate'); };

  return (
    <div>
      {/* Header Block */}
      <div
        style={{
          background: '#f5f7fa',
          borderRadius: '12px',
          padding: '24px',
          margin: '24px auto 0 auto',
          maxWidth: '1100px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={logo} alt="NBKRIST Logo" className="logo" style={{ marginRight: '32px' }} />
          <div style={{ textAlign: 'left' }}>
            <h1 style={{ color: '#004aad', fontSize: '32px', margin: 0 }}>
              N.B.K.R. INSTITUTE OF SCIENCE & TECHNOLOGY
            </h1>
            <h4 style={{ color: '#004aad', fontSize: '20px', margin: '8px 0 0 0' }}>
              (AUTONOMOUS)
            </h4>
            <h4 style={{ color: '#004aad', fontSize: '13px', margin: '8px 0 0 0' }}>
              Affiliated to JNTUA, Ananthapuramu, NAAC Accreditation with 'A' Grade, Accredited by NBA, "A" Grade Engineering College Recognized by AP Govt
            </h4>
          </div>
        </div>
      </div>

      {/* Navigation Buttons Block - side by side */}
      <div
        style={{
          background: '#6da5f4',
          padding: '4px',
          margin: '24px auto 0 auto',
          maxWidth: '1200px',
          borderRadius: 0,
          textAlign: 'center',
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '-11px'
        }}
      >
        <button
          className="dashboard-btn"
          style={{ minWidth: 120 }}
          onClick={() => setShowMenu((prev) => !prev)}
        >
          Menu
        </button>
        <button className="dashboard-btn" style={{ minWidth: 120 }}>Home</button>
        <button  className="dashboard-btn" style={{ minWidth: 120 }}>Admissions</button>
        <button className="dashboard-btn" style={{ minWidth: 120 }}>About Institute</button>
        <button className="dashboard-btn" style={{ minWidth: 120 }}>Notice</button>
        <button className="dashboard-btn" style={{ minWidth: 120 }}>Contact US</button>
      </div>

      {/* Dashboard Buttons Block (optional, shown when Menu is clicked) */}
      {showMenu && (
        <div
          style={{
            background: '#f8f9fa',
            padding: '24px',
            margin: '16px 1168px 0 auto',
            maxWidth: '0px',
            borderRadius: 0,
            textAlign: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          }}
        >
          <nav>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              <li><button onClick={handleProfileUpdate} className="dashboard-btn">Profile Update</button></li>
              <li><button className="dashboard-btn">Time Table</button></li>
              <li><button className="dashboard-btn">Salary</button></li>
              <li><button className="dashboard-btn">Entry</button></li>
              <li><button className="dashboard-btn">Leaves</button></li>
              <li><button className="dashboard-btn">Post Events</button></li>
              <li><button className="dashboard-btn">Your Attendance</button></li>
              <li><button className="dashboard-btn">Invigilation Details</button></li>
              <li><button className="dashboard-btn">Students Details</button></li>
              <li><button className="dashboard-btn">College Holidays</button></li>
            </ul>
          </nav>
        </div>
      )}
      <div className='about-us-section'>
        <p>
          <h2>About Us</h2>
NBKR Institute of Science & Technology established in 1979 is an Autonomous Institute affiliated to JNTUA Anantapuramu. This Institute is reaccredited by NAAC (UGC) for the Third cycle with “A” grade. All B.Tech courses are accredited by National Board of Accreditation (NBA) under Tier 1. UGC awarded the status of “College with Potential for Excellence (CPE)” to our Institute.
The Institute offers B.Tech programmes in<br></br>

1.Computer Science & Engineering<br></br>
2.Artificial Intelligence & Data Science (AI&DS)<br></br>
3.Electronics & Communication Engineering<br></br>
4.Electrical & Electronics Engineering<br></br>
5.Mechanical Engineering<br></br>
6.Civil Engineering<br></br>
The Institute has an R&D Cell and recognised research centres of JNTUA Anantapuramu offering Ph.D programmes.
Training programs through Industry-Institute interactions are organized on latest trends & innovations in Technology by eminent Industry experts, Entrepreneurs, HR managers and Alumni by Training & Placement Cell.

The Institute is located on wide spread campus that is covered in beautiful greenery includes Academic Blocks, Boys and Girls Hostels, Open Air Auditorium, Sports Complex, Staff Quarters etc. The Institute focuses on skill and professional development of the graduates through student run clubs, technical associations. Professional chapters like IEEE, ISTE, IETE, and CSI exist in our Institute..

Department laboratories and Computer Centre has state-of-the-art equipment to fulfill the needs of the researchers, students and faculty. The central library is well-stocked with books, journals, magazines, newspapers thousands of e-journals and e-books. The e-resources can be accessed through the campus network..

There are adequate opportunities for co-curricular and extra-curricular activities helping students gain overall skills. Industrial visits and relevant field visits expose the students to hands-on learning experience..

Industry Institute Partnership Cell (IIP Cell) caters the needs of the Institute and Industry by way of internships, consultancy..<br></br>

The Institute has NCC- Army & Navy wings on the campus. The NCC Cadets of the Institute are enthusiastically participating in the State & National level parades on regular basis.
        </p>
      </div>
    </div>
  );
};

export default FacultyDashboard;
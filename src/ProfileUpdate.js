import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

function FacultyProfileForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    mobile: '',
    aadhar: '',
    address: '',
    department: '',
    designation: '',
    qualificationUG: '',
    qualificationPG: '',
    phdStatus: '',
    experienceYears: '',
    experienceInstitutes: '',
    specialization: '',
    joiningDate: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Profile updated successfully!");
    navigate('/FacultyDashboard'); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: '32px',
        maxWidth: '700px',
        margin: '32px auto',
        background: '#f5f7fa',
        borderRadius: '14px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }}
    >
      <h2 style={{ color: '#004aad', textAlign: 'center', marginBottom: 24 }}>Faculty Profile Form</h2>

      <h3 style={{ color: '#003366', marginTop: 24 }}>1. Personal Details</h3>
      <div className="form-row">
        <input className="profile-input" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
        <select className="profile-input" name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input className="profile-input" type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} />
        <input className="profile-input" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input className="profile-input" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
        <input className="profile-input" name="aadhar" placeholder="Aadhar Number" value={formData.aadhar} onChange={handleChange} />
        <textarea className="profile-input" name="address" placeholder="Residential Address" value={formData.address} onChange={handleChange}></textarea>
      </div>

      <h3 style={{ color: '#003366', marginTop: 24 }}>2. Educational Background</h3>
      <div className="form-row">
        <input className="profile-input" name="qualificationUG" placeholder="UG Qualification (e.g. B.Tech - CSE)" value={formData.qualificationUG} onChange={handleChange} />
        <input className="profile-input" name="qualificationPG" placeholder="PG Qualification (e.g. M.Tech - CSE)" value={formData.qualificationPG} onChange={handleChange} />
        <select className="profile-input" name="phdStatus" value={formData.phdStatus} onChange={handleChange}>
          <option value="">Ph.D. Status</option>
          <option>Completed</option>
          <option>Ongoing</option>
          <option>Not Pursued</option>
        </select>
        <input className="profile-input" name="specialization" placeholder="Area of Specialization" value={formData.specialization} onChange={handleChange} />
      </div>

      <h3 style={{ color: '#003366', marginTop: 24 }}>3. Experience</h3>
      <div className="form-row">
        <input className="profile-input" name="experienceYears" placeholder="Total Years of Experience" value={formData.experienceYears} onChange={handleChange} />
        <textarea className="profile-input" name="experienceInstitutes" placeholder="Previous Institutes (with years)" value={formData.experienceInstitutes} onChange={handleChange}></textarea>
        <input className="profile-input" type="date" name="joiningDate" placeholder="Joining Date at Current Institute" value={formData.joiningDate} onChange={handleChange} />
      </div>

      <h3 style={{ color: '#003366', marginTop: 24 }}>4. Official Details</h3>
      <div className="form-row">
        <input className="profile-input" name="department" placeholder="Department (e.g. ECE)" value={formData.department} onChange={handleChange} />
        <input className="profile-input" name="designation" placeholder="Designation (e.g. Assistant Professor)" value={formData.designation} onChange={handleChange} />
      </div>

      <h3 style={{ color: '#003366', marginTop: 24 }}>5. Upload Photo</h3>
      <div className="form-row">
        <input className="profile-input" type="file" name="photo" onChange={handleChange} />
      </div>

      <br />
      <button
        type="submit" onClick={handleSubmit}
        style={{
          background: '#004aad',
          color: '#fff',
          padding: '12px 32px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          cursor: 'pointer',
          marginTop: '16px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        Submit Profile
      </button>

      {/* Inline CSS for .profile-input and .form-row */}
      <style>
        {`
          .profile-input {
            width: 100%;
            padding: 10px;
            margin: 8px 0 16px 0;
            border: 1px solid #b0b0b0;
            border-radius: 6px;
            font-size: 16px;
            box-sizing: border-box;
            background: #fff;
            resize: vertical;
          }
          .profile-input:focus {
            outline: 2px solid #004aad;
            border-color: #004aad;
          }
          .form-row {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
        `}
      </style>
    </form>
  );
}

export default FacultyProfileForm;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Salary = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '10px', fontFamily: 'Arial' }}>
      <button onClick={() => navigate('/FacultyDashboard')} style={{ marginBottom: '10px', padding: '10px 20px', backgroundColor: '#004aad', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Back to Dashboard
      </button>
    <div
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        background: '#f5f7fa',
        borderRadius: '14px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        padding: '32px',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }}
    >
      <h2 style={{ color: '#004aad', textAlign: 'center', marginBottom: 32 }}>Salary Details</h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
      }}>
        <thead>
          <tr style={{ background: '#004aad', color: '#fff' }}>
            <th style={{ padding: '12px' }}>Month</th>
            <th style={{ padding: '12px' }}>Total Salary</th>
            <th style={{ padding: '12px' }}>PPF</th>
            <th style={{ padding: '12px' }}>Other Deductions</th>
            <th style={{ padding: '12px' }}>Credited Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', textAlign: 'center' }}>January</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>000</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', textAlign: 'center' }}>February</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>000</td>
          </tr>
            <tr>
            <td style={{ padding: '10px', textAlign: 'center' }}>March</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>000</td>
          </tr>
            <tr>
            <td style={{ padding: '10px', textAlign: 'center' }}>April</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>000</td>
          </tr>
            <tr>
            <td style={{ padding: '10px', textAlign: 'center' }}>May</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>000</td>
          </tr>  <tr>
            <td style={{ padding: '10px', textAlign: 'center' }}>June</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>000</td>
          </tr>  <tr>
            <td style={{ padding: '10px', textAlign: 'center' }}>July</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>000</td>
          </tr>  <tr>
            <td style={{ padding: '10px', textAlign: 'center' }}>August</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>000</td>
          </tr>  <tr>
            <td style={{ padding: '10px', textAlign: 'center' }}>September</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>000</td>
          </tr>
            <tr>
            <td style={{ padding: '10px', textAlign: 'center' }}>October</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>000</td>
          </tr>
            <tr>
            <td style={{ padding: '10px', textAlign: 'center' }}>November</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>000</td>
          </tr>
            <tr>
            <td style={{ padding: '10px', textAlign: 'center' }}>December</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>000</td>
            <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>000</td>
          </tr>
          {/* Add more months as needed */}
        </tbody>
      </table>
      <style>
        {`
          table th, table td {
            border-bottom: 1px solid #e0e0e0;
          }
          table tr:last-child td {
            border-bottom: none;
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default Salary;
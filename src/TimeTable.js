import React from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyTimetable = () => {
  const navigate = useNavigate();
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = [
    '9:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 1:00',
    '1:00 - 2:00',
    '2:00 - 3:00',
    '3:00 - 4:00',
  ];

  const timetable = {
    Mon: ['', '', '', 'LUNCH', ' ', '', ''],
    Tue: ['', '', '', 'LUNCH', '', '', ''],
    Wed: ['', '', '', 'LUNCH', ' ', '', ''],
    Thu: ['','','','LUNCH','','',''    ],
    Fri: ['','','','LUNCH','','',''    ],
    Sat: ['','','','LUNCH','','',''],
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', color: '#330066' }}>
        Teacher's Timetable
      </h2>
      <button onClick={() => navigate('/FacultyDashboard')} style={{ margin: '12px', width: '90px' }}>Back</button>

      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}
      >
        <thead>
          <tr style={{ backgroundColor: '#003366', color: 'white' }}>
            <th>Day / Hour</th>
            {hours.map((hr, idx) => (
              <th key={idx}>{hr}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => {
            const row = timetable[day];
            return (
              <tr key={day}>
                <td style={{ backgroundColor: '#f4cccc' }}>{day}</td>
                {row.map((entry, idx) => {
                  if (typeof entry === 'object' && entry !== null) {
                    const { text, colspan, bg, color } = entry;
                    return (
                      <td
                        key={`${day}-${idx}`}
                        colSpan={colspan}
                        style={{
                          backgroundColor: bg || 'transparent',
                          color: color || 'black',
                          fontWeight: 'bold',
                        }}
                      >
                        {text}
                      </td>
                    );
                  } else if (entry === 'LUNCH' || entry === 'BREAK') {
                    return (
                      <td
                        key={`${day}-${idx}`}
                        style={{
                          backgroundColor: '#d9d9d9',
                          fontWeight: 'bold',
                        }}
                      >
                        {entry}
                      </td>
                    );
                  } else {
                    return <td key={`${day}-${idx}`}>{entry}</td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyTimetable;
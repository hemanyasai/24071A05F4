import React from 'react';
import prof1 from '../assets/profile1.svg';
import prof2 from '../assets/profile2.svg';
import prof3 from '../assets/profile3.svg';
import prof4 from '../assets/profile4.svg';

function Faculty() {
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Asha Reddy',
      dept: 'Computer Science',
      imgUrl: prof1
    },
    {
      id: 2,
      name: 'Prof. Rajesh Kumar',
      dept: 'Electronics & Communication',
      imgUrl: prof2
    },
    {
      id: 3,
      name: 'Dr. Priya Sharma',
      dept: 'Mechanical Engineering',
      imgUrl: prof3
    },
    {
      id: 4,
      name: 'Prof. Suresh Iyer',
      dept: 'Mathematics',
      imgUrl: prof4
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Meet Our Faculty</h1>
        <p className="page-subtitle">Learn from experienced educators and industry experts.</p>
      </div>

      <div className="faculty-list">
        {facultyMembers.map(member => (
          <div key={member.id} className="faculty-card">
            <div>
              <h3 style={{ margin: 0, color: '#222', fontSize: '1.2rem' }}>{member.name}</h3>
              <p style={{ margin: '5px 0 0 0', color: '#666' }}>{member.dept}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;

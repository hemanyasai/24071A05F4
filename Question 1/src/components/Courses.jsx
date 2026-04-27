import React from 'react';

function Courses() {
  const courseList = [
    {
      id: 1,
      title: 'Computer Science & Engineering (CSE)',
      desc: 'Master software development, AI, data structures, and the latest programming languages.',
    },
    {
      id: 2,
      title: 'Electronics & Communication (ECE)',
      desc: 'Dive into VLSI, IoT, networking, and the hardware that powers the modern world.',
    },
    {
      id: 3,
      title: 'Mechanical Engineering',
      desc: 'Learn about robotics, thermodynamics, design, and manufacturing processes.',
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Our Programs</h1>
        <p className="page-subtitle">Choose from our industry-leading undergraduate courses.</p>
      </div>

      <div className="cards-grid">
        {courseList.map(course => (
          <div key={course.id} className="card">
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;

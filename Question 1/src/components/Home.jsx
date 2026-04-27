import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Welcome to VNRVJIET</h1>
        <p className="page-subtitle">Empowering the leaders of tomorrow through innovation and excellence.</p>
      </div>

      <div className="banner-img-container">
        <img 
          src="https://img.collegepravesh.com/2021/06/VNR-VJIET-Hyderabad.jpg"
          alt="College Campus Banner" 
          className="responsive-img"
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link to="/courses" className="btn">Explore Our Courses</Link>
      </div>
    </div>
  );
}

export default Home;

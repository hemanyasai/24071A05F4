import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">VNRVJIET</Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Courses</NavLink>
          </li>
          <li>
            <NavLink to="/faculty" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Faculty</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

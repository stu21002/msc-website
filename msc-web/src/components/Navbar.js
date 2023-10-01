// src/components/NavBar.js

import React, { useState } from 'react';
import { NavLink, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import './Navbar.css';

const Navbar = () => {
  const [isActivitiesMenuOpen, setActivitiesMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setActivitiesMenuOpen(!isActivitiesMenuOpen);
  };

  return (
    <Router>
      <nav className="navbar">
        <ul className="navbar-list">
          <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/About" activeClassName="active-link">About</NavLink></li>
          <li
            className={isActivitiesMenuOpen ? 'active-dropdown' : ''}
            onClick={toggleDropdown}
          >
            Activities
            {isActivitiesMenuOpen && (
              <ul className="dropdown">
                <li><NavLink to="/News">News Option 1</NavLink></li>
                <li><NavLink to="/News">News Option 2</NavLink></li>
                {/* Add more options as needed */}
              </ul>
            )}
          </li>
          <li><NavLink to="/News" activeClassName="active-link">News</NavLink></li>
          <li><NavLink to="/Contact" activeClassName="active-link">Contact</NavLink></li>
          <li><NavLink to="/FAQ" activeClassName="active-link">FAQ</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* Add routes for activities and other pages */}
      </Routes>
    </Router>
  );
}

export default Navbar;

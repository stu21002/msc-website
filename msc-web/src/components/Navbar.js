import React, { useState } from 'react';
import { NavLink, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import './Navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <Router>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <NavLink
              style={activeMenu === "home" ? { color: "blue" } : { color: "black" }}
              onClick={() => handleMenuClick("home")}
              to="/"
              className="bar-item"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={activeMenu === "about" ? { color: "blue" } : { color: "black" }}
              onClick={() => handleMenuClick("about")}
              to="/About"
              className="bar-item"
            >
              About
            </NavLink>
          </li>
          <li className={activeMenu === "activities" ? 'active-dropdown' : ''}>
            {/* <div onClick={() => handleMenuClick("activities")}> */}
              Activities
              {activeMenu === "activities" && (
                <ul className="dropdown">
                  <li>
                    <NavLink onClick={() => handleMenuClick("hiking")} to="/Hiking">
                      Hiking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => handleMenuClick("climbing")} to="/Climbing">
                      Climbing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={() => handleMenuClick("running")} to="/Running">
                      Running
                    </NavLink>
                  </li>
                </ul>
              )}
            {/* </div> */}
          </li>
          <li>
            <NavLink
              style={activeMenu === "news" ? { color: "blue" } : { color: "black" }}
              onClick={() => handleMenuClick("news")}
              to="/News"
              className="bar-item"
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              style={activeMenu === "contact" ? { color: "blue" } : { color: "black" }}
              onClick={() => handleMenuClick("contact")}
              to="/Contact"
              className="bar-item"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              style={activeMenu === "faq" ? { color: "blue" } : { color: "black" }}
              onClick={() => handleMenuClick("faq")}
              to="/FAQ"
              className="bar-item"
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* Add routes for activities and other pages */}
      </Routes>
    </Router>
  );
};

export default Navbar;

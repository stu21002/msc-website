import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import './Navbar.css';

const NavBar = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="navbar-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default NavBar;

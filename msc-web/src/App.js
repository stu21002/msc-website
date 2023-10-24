import React from 'react';
import './App.css';
import logo from './assets/logo_trans.png';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div>
        <div className='branding-region'>
          <img className="logo" src={logo} alt='Mountain and Ski Club Logo'/>
        </div>
        <Router>
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

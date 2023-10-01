import React from 'react';
import './App.css';
import logo from './assets/logo_trans.png';
// import background from './assets/hh-freshers - 47.jpg'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <div>
        <div className='branding-region'>
          <img className="logo" src={logo} alt='Mountain and Ski Club Logo'/>
        </div>
        <div>    
          <Navbar/>
        </div>
      </div>
    </div>
  );
}

export default App;

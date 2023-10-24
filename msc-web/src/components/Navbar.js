import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";

import './Navbar.css';

const Navbar = () => {
  return (
    
    <Nav>
        <Bars />
        <NavMenu>
            <NavLink to="/about" >
                About
            </NavLink>
            <NavLink to="/events" activeStyle>
                Events
            </NavLink>
            <NavLink to="/annual" activeStyle>
                Annual Report
            </NavLink>
            <NavLink to="/team" activeStyle>
                Teams
            </NavLink>
            <NavLink to="/blogs" activeStyle>
                Blogs
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
                Sign Up
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
    </Nav>
  
  );
};

export default Navbar;

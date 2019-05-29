import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/navbar/hexapixel_logo.jpg';

class MainNavbar extends Component {
  render() {
    return (
      <nav className="navBar shadow">
        <img alt="Hexapixel Media Logo" src={Logo} />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    );
  }
}

export default MainNavbar;

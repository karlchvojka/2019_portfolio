import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../assets/navbar/hexapixel_logo.jpg';

class MainNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="navBar">
        <Navbar.Brand href="#home" className="mr-auto">
          <img alt="Hexapixel Media Logo" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavbar;

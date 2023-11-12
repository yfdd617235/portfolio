import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = ({ onNavItemSelect }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">YOSEF DAVID GIRALDO SALAZAR</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => onNavItemSelect('aboutMe')}>About Me</Nav.Link> <br />
        <Nav.Link onClick={() => onNavItemSelect('experience')}>Experience</Nav.Link> <br />
        <Nav.Link onClick={() => onNavItemSelect('projects')}>Projects</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
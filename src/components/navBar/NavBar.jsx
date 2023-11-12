import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css'

const NavBar = ({ onNavItemSelect }) => {
  return (
    <Navbar>
      <h1>YOSEF DAVID GIRALDO SALAZAR</h1>
      {/* <Navbar.Brand href="#home">YOSEF DAVID GIRALDO SALAZAR</Navbar.Brand> */}
      <p>Engineer / Full Stack Developer / MBA</p>
      <div>
        <Nav.Link onClick={() => onNavItemSelect('aboutMe')} className='link'>| About Me |</Nav.Link>
        <Nav.Link onClick={() => onNavItemSelect('experience')} className='link'> Experience |</Nav.Link>
        <Nav.Link onClick={() => onNavItemSelect('projects')} className='link'> Projects |</Nav.Link>
      </div>
    </Navbar>
  );
};

export default NavBar;
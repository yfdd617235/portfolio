import React from 'react';
import { Nav } from 'react-bootstrap';
import { toast} from 'react-toastify';
import * as Icon from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import './navbar.css'

function mailInfo (){
  toast.success('Email: yosefdavid91@gmail.com', {
    position: 'top-center',
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
}
const NavBar = ({ onNavItemSelect }) => {
  return (
    <>
    <div className='nav-info'>
      <div>
        <h1>YOSEF DAVID GIRALDO SALAZAR</h1>
        {/* <Navbar.Brand href="#home">YOSEF DAVID GIRALDO SALAZAR</Navbar.Brand> */}
        <p>Engineer / Full Stack Developer / MBA</p>
      </div> <br />

      <div>
        <Nav.Link className='link' onClick={() => onNavItemSelect('aboutMe')} >About Me</Nav.Link>
        <Nav.Link className='link' onClick={() => onNavItemSelect('experience')} >Experience</Nav.Link>
        <Nav.Link className='link' onClick={() => onNavItemSelect('projects')} >Projects</Nav.Link>
      </div>

      <div className='contact-icons'>
        <a className='icon-link' href="https://api.whatsapp.com/send?phone=573104221653" target="_blank" rel="noreferrer"><Icon.FaWhatsapp /></a>
        <a className='icon-link' href="https://github.com/yfdd617235" target="_blank" rel="noreferrer"><Icon.FaGithub /></a>
        <Button className='icon-link' onClick={mailInfo} rel="noreferrer"><Icon.FaMailBulk /></Button>
      </div>
    </div>
    </>
  );
};

export default NavBar;
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo-lima.png';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from '../pages/Login';
import navIcon1 from '../assets/img/shopping-cart.png';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import './NavBar.css';

export const NavBar = (Login) => {
   const [activeLink, setActiveLink] = useState('home');
   const [scrolled, seScrolled] = useState(false);
   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) {
            seScrolled(true);
         } else {
            seScrolled(false);
         }
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   const onUpdateActiveLink = (value) => {
      setActiveLink(value);
   };

   return (
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
         <Container>
            <Navbar.Brand href="/">
               <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
               <span className="navbar-toggler-icon" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link
                     href="#home"
                     className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                     onClick={() => onUpdateActiveLink('home')}
                  >
                     Ensaladas
                  </Nav.Link>
                  <Nav.Link
                     href="#skills"
                     className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                     onClick={() => onUpdateActiveLink('skills')}
                  >
                     Nosotros
                  </Nav.Link>
                  <Nav.Link
                     href="../pages/Login.js"
                     className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                     onClick={() => onUpdateActiveLink('projects')}
                  >
                     Contacto
                  </Nav.Link>
               </Nav>
               <span className="navbar-text">
                  <Link to="/Login">
                     <button className="vvd">
                        <span>Iniciar Sesion</span>
                     </button>
                  </Link>
                  <div className="social-icon">
                     <a href="#">
                        <img src={navIcon1} alt="" />
                     </a>
                     <a href="#">
                        <img src={navIcon2} alt="" />
                     </a>
                     <a href="#">
                        <img src={navIcon3} alt="" />
                     </a>
                  </div>
               </span>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

import { useState, useEffect } from "react"
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/Diseño_sin_título__29_-removebg-preview.png'
export const NavBar = () => {

    return(
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Ensaladas</Nav.Link>
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
}
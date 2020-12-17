import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
const MyNavbar = () => {
    return (
        <>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Sruthy</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
       <Nav.Link href="#about">About Me</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">My Projects</Nav.Link>
     <Nav.Link href="#contact">Contact</Nav.Link>

      </Nav>
  </Navbar.Collapse>
</Navbar>  
        </>
    )
}

export default MyNavbar
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function MyNav() {
  const theme = "light";

  return (
    <Navbar bg={theme === "light" ? "light" : "dark"} variant={theme} expand="lg">
      <Navbar.Brand href="#">Epibooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;

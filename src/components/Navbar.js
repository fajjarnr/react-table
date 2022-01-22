import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavbarComponents() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React Table</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav.Link href="/admin">Admin</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

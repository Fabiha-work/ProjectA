import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/tourism">Tourism</Nav.Link>
            <Nav.Link href="/tech">Technology</Nav.Link>
            <Nav.Link href="/movie">Movie</Nav.Link>
            <Nav.Link href="/food">Food</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default Navbar1;
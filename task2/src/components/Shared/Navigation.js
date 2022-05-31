import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        collapseOnSelect
        expand="lg"
        sticky="top"
      >
        <Container style={{ marginBottom: "0px" }}>
          <Navbar.Brand>Turing</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link>Features</Nav.Link>
              <Nav.Link>Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Login</Nav.Link>
              <Nav.Link>Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Payment App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav.Link style={{ color: "white" }} href="/">
            Home
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="login">
            Login
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="makePayment">
            Make Payment
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/">
            View Feed
          </Nav.Link>
          <NavDropdown 
            className="me-auto"
            title="Account"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

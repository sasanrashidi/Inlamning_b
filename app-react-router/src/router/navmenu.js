import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

export function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>React-bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
    
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <LinkContainer to="/page1">
              <NavDropdown.Item>Page-1</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to="/musicalbums">
            <Nav.Link>Music-Albums</Nav.Link>
          </LinkContainer>

            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

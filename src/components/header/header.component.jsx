import React from "react";

import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className='navbar-brand' to="/">Bootstrap React Firebase</Link>
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/register">Register</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

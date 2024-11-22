import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarMarket() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Navbar.Brand>
        <Nav.Link as={NavLink} to="/" className={setActiveClass}>
          {" "}
          <img src="../Logo.jpeg" alt="Icono" />{" "}
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic_avbar_nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/registro" className={setActiveClass}>
            Register
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login" className={setActiveClass}>
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/carrito" className={setActiveClass}>
            🛒
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarMarket;

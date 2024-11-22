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
            <h3>Register</h3>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login" className={setActiveClass}>
            <h3>Login</h3>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/carrito" className={setActiveClass}>
            <h3>
              <i class="bi bi-cart4"></i>
            </h3>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarMarket;

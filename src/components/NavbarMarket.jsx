import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarMarket() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Navbar.Brand>
        {" "}
        <img className="Logo" src="" alt="" />{" "}
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarMarket;

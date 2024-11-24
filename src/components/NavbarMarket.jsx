import React, { useContext, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { UsuarioContext } from "../context/UsuarioContext";

const shouldHideAuthLinks = (pathname) => {
  // para que se oculte registro y login en estas vistas
  const hiddenRoutes = [
    "/perfil",
    "/crear-publicacion",
    "/mis-publicaciones",
    "/detalle-publicacion",
  ];
  return hiddenRoutes.some((route) => pathname.startsWith(route));
};

function NavbarMarket() {
  const location = useLocation();
  const { setActiveMenu } = useContext(UsuarioContext);

  const handleLogoClick = () => {
    setActiveMenu(""); //resetea el activeMenu al estado inicial
  };

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Nav.Link as={NavLink} to="/" onClick={handleLogoClick}>
            {" "}
            <img src="../Logo.jpeg" alt="Icono" />{" "}
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic_avbar_nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            {!shouldHideAuthLinks(location.pathname) && (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/registro"
                  className={setActiveClass}
                >
                  <h3>Register</h3>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login" className={setActiveClass}>
                  <h3>Login</h3>
                </Nav.Link>
              </>
            )}
            <Nav.Link as={NavLink} to="/carrito" className={setActiveClass}>
              <FaShoppingCart style={{ fontSize: "2rem" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMarket;

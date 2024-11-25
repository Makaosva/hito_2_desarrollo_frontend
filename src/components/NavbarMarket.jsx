import React, { useContext, useState } from "react";
import { Nav, Navbar, Container, Col } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { UsuarioContext } from "../context/UsuarioContext";
import MenuLateral from "../components/MenuLateral";

const shouldHideAuthLinks = (pathname) => {
  // para que se oculte registro y login en estas vistas
  const hiddenRoutes = [
    "/perfil",
    "/crear-publicacion",
    "/mis-publicaciones",
    "/detalle-publicacion",
    "/login",
    "/registro",
    "/tienda",
    "/carrito",
  ];
  return hiddenRoutes.some((route) => pathname.startsWith(route));
};

const shouldHideCartLinks = (pathname) => {
  // para que se oculte solo el carrito en estas vistas
  const hiddenRoutesForCart = [
    "/login",
    "/registro",
    "/carrito",
  ];
  return hiddenRoutesForCart.some((route) => pathname.startsWith(route));
};

const isDetallePublicacion = (pathname) => pathname === "/detalle-publicacion";

function NavbarMarket() {
  const location = useLocation();
  const { setActiveMenu, usuario } = useContext(UsuarioContext);

  const handleLogoClick = () => {
    setActiveMenu(""); //resetea el activeMenu al estado inicial
  };

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
   <div className="d-flex">
      {/* Columna lateral con el MenuLateral */}
      {isDetallePublicacion(location.pathname) && usuario && (
        <Col
          xs={12}
          md={3}
          className="menu-lateral-container"
          style={{
            position: "absolute", // Position the menu absolutely
            top: "50%", // Position it vertically at the center of the screen
            transform: "translateY(-50%)", // Adjust the position to be centered
            left: "0", // Align it to the left side of the screen
            zIndex: 999, // Ensure it's on top of other elements
          }}
        >
          <MenuLateral />
        </Col>
      )}

      {/* Contenido principal */}
      <div className="flex-grow-1">
        <Navbar bg="black" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Nav.Link as={NavLink} to="/" onClick={handleLogoClick}>
                <img src="../Logo.jpeg" alt="Icono" />
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic_avbar_nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="mr-auto">
                {/* Mostrar el menu en detalle-publicacion */}
                {isDetallePublicacion(location.pathname) ? (
                  // Mostrar Registro, Login y Carrito en /detalle-publicacion (siempre)
                  <>
                    <Nav.Link as={NavLink} to="/registro" className={setActiveClass}>
                      <h3>Register</h3>
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/login" className={setActiveClass}>
                      <h3>Login</h3>
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/carrito" className={setActiveClass}>
                      <FaShoppingCart style={{ fontSize: "2rem" }} />
                    </Nav.Link>
                  </>
                ) : (
                  // Para otras vistas
                  <>
                    {!shouldHideAuthLinks(location.pathname) && (
                      <>
                        <Nav.Link as={NavLink} to="/registro" className={setActiveClass}>
                          <h3>Register</h3>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/login" className={setActiveClass}>
                          <h3>Login</h3>
                        </Nav.Link>
                      </>
                    )}
                    {!shouldHideCartLinks(location.pathname) && (
                      <Nav.Link as={NavLink} to="/carrito" className={setActiveClass}>
                        <FaShoppingCart style={{ fontSize: "2rem" }} />
                      </Nav.Link>
                    )}
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarMarket;

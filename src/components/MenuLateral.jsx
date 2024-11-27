import React, { useContext, useEffect } from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

const MenuLateral = () => {
  const { activeMenu, setActiveMenu, setShowCerrarSesion } =
    useContext(UsuarioContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeMenu === "Home") {
      setShowCerrarSesion(false);
    }
  }, [activeMenu, setShowCerrarSesion]);

  const menuItems = [
    {
      name: "Crear Publicación",
      onClick: () => navigate("/crear-publicacion"),
    },
    {
      name: "Mis Publicaciones",
      onClick: () => navigate("/mis-publicaciones"),
    },

    {
      name: "Tienda",
      onClick: () => {
        setActiveMenu("Tienda");
        navigate("/tienda");
      },
    },

    {
      name: "Detalle Publicacion",
      onClick: () =>
       /*  setActiveMenu("DetallePublicacion"); */
        navigate("/detalle-publicacion"),
      },

    {
      name: "Mis Favoritos",
      onClick: () => navigate("/favoritos"),
    },
    { name: "Actualizar Perfil", href: "#" },
  ];

  return (
    <Row>
      <Col>
        <Nav
          className="flex-column bg-light p-3  rounded"
          style={{
            height: "81.5vh",
            borderWidth: "2px",
            borderColor: "#000",
            borderStyle: "solid",
          }}
        >
          {menuItems.map((item, index) => (
            <Nav.Link
              key={index}
              href="#"
              className={`mb-2 text-dark py-2 ${
                activeMenu === item.name
                  ? "fw-bold bg-secondary text-white"
                  : ""
              }`}
              style={{
                border: "2px solid #000",
                borderRadius: "5px",
              }}
              onClick={() => {
                setActiveMenu(item.name);
                item.onClick();
              }}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </Col>
    </Row>
  );
};

export default MenuLateral;

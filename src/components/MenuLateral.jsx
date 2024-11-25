import React, { useContext, useEffect } from "react";
import { Nav } from "react-bootstrap";
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
        /* setShowCerrarSesion(true); */
        navigate("/tienda");
      },
    },

    {
      name: "Detalle Publicación",
      onClick: () => navigate("/detalle-publicacion"),
    },

    {
      name: "Mis Favoritos",
      onClick: () => navigate("/favoritos"),
    },
    { name: "Actualizar Perfil", href: "#" },
  ];

  return (
    <Nav
      className="flex-column bg-light p-3 rounded"
      style={{
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
            activeMenu === item.name ? "fw-bold bg-secondary text-white" : ""
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
  );
};

export default MenuLateral;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { UsuarioContext } from "../context/UsuarioContext";

const CerrarSesionButton = () => {
  const navigate = useNavigate();
  const { logout, activeMenu } = useContext(UsuarioContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // para que se muestre cerrar sesion en peril con sus opciones
  if (
    activeMenu !== "Perfil" &&
    activeMenu !== "Crear Publicación" &&
    activeMenu !== "Mis Publicaciones" &&
    activeMenu !== "Tienda" &&
    activeMenu !== "Detalle Publicación"
  ) {
    return null;
  }

  return (
    <div
      className="p-5"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingBottom: "30px",
        paddingRight: "20px",
      }}
    >
      <Button variant="danger" onClick={handleLogout}>
        Cerrar Sesión
      </Button>
    </div>
  );
};

export default CerrarSesionButton;

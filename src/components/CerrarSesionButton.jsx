import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { UsuarioContext } from "../context/UsuarioContext";

const CerrarSesionButton = () => {
  const navigate = useNavigate();
  const { logout } = useContext(UsuarioContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItem: "flex-end",
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

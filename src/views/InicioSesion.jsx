/* const InicioSesion = () => {
  return <div>InicioSesion</div>;
};

export default InicioSesion; */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const InicioSesion = () => {
  const navigate = useNavigate();

  const handleGoToProfile = () => {
    navigate("/perfil");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Button variant="primary" onClick={handleGoToProfile}>
        Ir a Mi Perfil
      </Button>
    </Container>
  );
};

export default InicioSesion;

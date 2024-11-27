import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardPublicacion from "../components/CardPublicacion";
import { UsuarioContext } from "../context/UsuarioContext";
import MenuLateral from "../components/MenuLateral";
import CerrarSesionButton from "../components/CerrarSesionButton";

const MisFavoritos = () => {

  return (
    <Container className="mt-4">
      <Row>
        {/* Menú lateral */}
        <Col xs={12} md={3}>
          <MenuLateral />
        </Col>

        {/* Contenido de las publicaciones favoritas */}

      </Row>
      <CerrarSesionButton />
    </Container>
  );
};

export default MisFavoritos;
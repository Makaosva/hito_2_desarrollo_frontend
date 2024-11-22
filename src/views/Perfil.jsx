// para el perfil
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuLateral from "../components/MenuLateral";

const Perfil = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={12} md={3}>
          <MenuLateral />
        </Col>

        <Col xs={12} md={9}>
          <div className="text-center border p-4 rounded shadow-sm bg-white">
            <h1>Mi Perfil</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;

// para el perfil
import React, {useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuLateral from "../components/MenuLateral";
import { UsuarioContext } from "../context/UsuarioContext";
import CerrarSesionButton from "../components/CerrarSesionButton";

const Perfil = () => {
  const { setActiveMenu } = useContext(UsuarioContext);

  useEffect(() => {
    setActiveMenu(null);
  }, [setActiveMenu]);

  return (
    <Container
      fluid
      className="mt-5"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col xs={12} md={3}>
          <MenuLateral />
        </Col>

        <Col xs={12} md={9}>
          <div className="text-center border p-4 rounded shadow-sm bg-white">
            <h1 style={{ color: "black" }}>Mi Perfil</h1>
          </div>
          <p className="text-center p-4">Nombre de Usuario</p>
        </Col>
      </Row>
      <CerrarSesionButton />
    </Container>
  );
};

export default Perfil;

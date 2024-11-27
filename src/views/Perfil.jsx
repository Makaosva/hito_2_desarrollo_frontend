// para el perfil
import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MenuLateral from "../components/MenuLateral";
import { UsuarioContext } from "../context/UsuarioContext";
import CerrarSesionButton from "../components/CerrarSesionButton";

const Perfil = () => {
  const { setActiveMenu, usuario, logout } = useContext(UsuarioContext);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveMenu("Perfil");
  }, [setActiveMenu]);

  return (
    <Container style={{
      height: "calc(100vh - 140px)"
    }}>
      <Row>
        <Col xs={12} md={3}>
          <MenuLateral />
        </Col>

        <Col xs={12} md={9} className="p-4">
          <div className="text-center border rounded shadow-sm bg-white">
            <h2 style={{ color: "black" }}>Mi Perfil</h2>
          </div>
          {/* para que se muestre nombre de usuario */}
          <p className="text-center p-4">{usuario?.nombre}</p>
        </Col>
      </Row>
      <CerrarSesionButton />
    </Container>
  );
};

export default Perfil;

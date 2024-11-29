import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import MenuLateral from "../components/MenuLateral";
import { UsuarioContext } from "../context/UsuarioContext";
import { useNavigate } from "react-router-dom";

const DetallePublicacion = () => {
  const location = useLocation();

  const { imagen, email } = location.state || {};

  const navigate = useNavigate();

  const DetallesCard = ({ imagen, email }) => (
    <Container>
      <Card
        className="p-4 shadow-sm w-75"
        style={{
          border: "2px solid #000",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
          marginTop: "-520px",
          marginLeft: "350px",
        }}
      >
        <Card.Img
          src={imagen}
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "10px",
            border: "2px solid #000",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            textAlign: "center",
            width: "100%",
          }}
        >
          <p className="mb-2">Contacto del Publicador</p>
          <p className="fw-bold text-primary">{email}</p>
        </div>
      </Card>
    </Container>
  );

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container
      style={{
        height: "calc(100vh - 140px)",
      }}
    >
      <div>
        <Row>
          <Col xs={12} md={3} className="menu">
            <MenuLateral />
          </Col>
          <Col xs={12} md={9}>
            <Row>
              <Col xs={9}>
                <h3 className="text-center mb-2 mt-4">Detalle Publicación</h3>
              </Col>
            </Row>
          </Col>
        </Row>
        <Col xs={12} md={9} className="d-flex justify-content-end p-2">
          <DetallesCard imagen={imagen} email={email} />
        </Col>
      </div>
      <div style={{ marginTop: "-220px", marginLeft: "900px" }}>
        <Button
          variant="secondary"
          onClick={handleBack}
          style={{ background: "#00BFFF" }}
        >
          Volver
        </Button>
      </div>
    </Container>
  );
};

export default DetallePublicacion;

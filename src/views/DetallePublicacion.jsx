import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import MenuLateral from "../components/MenuLateral";
import CerrarSesionButton from "../components/CerrarSesionButton";

// despues de crear la publicacion en ver mas se muestra detalle de la publicacion
const DetallePublicacion = () => {
  const location = useLocation();
  const { imagen, email } = location.state || {};
  /* const contacto = "example@gmail.com"; */

  return (
    <Container className="mt-5" style={{ minHeight: "100vh" }}>
      <Row>
        <Col xs={12} md={3}>
          <MenuLateral />
        </Col>
        <Col xs={12} md={9}>
          <div className="text-center border p-4 rounded shadow-sm bg-white">
            <h1 className="mb-4" style={{ color: "black" }}>
              Detalle Publicación
            </h1>
            <Card
              className="p-4 shadow-sm"
              style={{
                border: "2px solid #000",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "row",
                alignItem: "center",
                gap: "1rem",
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
                  alignItem: "flex-end",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <p className="mb-2">Contacto del Publicador</p>
                <p className="fw-bold text-primary">{email}</p>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
      <CerrarSesionButton />
    </Container>
  );
};

export default DetallePublicacion;

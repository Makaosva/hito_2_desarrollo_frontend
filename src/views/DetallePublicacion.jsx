import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import MenuLateral from "../components/MenuLateral";
import CerrarSesionButton from "../components/CerrarSesionButton";
import { UsuarioContext } from "../context/UsuarioContext";

// despues de crear la publicacion en ver mas se muestra detalle de la publicacion
const DetallePublicacion = () => {
  const location = useLocation();
  const { imagen, email } = location.state || {};
  const { activeMenu, usuario } = useContext(UsuarioContext); // para vista privada

  const DetallesCard = ({ imagen, email }) => (
    <Container>
      <Col xs={12} md={9} className="d-flex justify-content-end p-4">
        <div className="text-center border p-5 rounded shadow-sm bg-white">
          <Card
            className="p-4 shadow-sm"
            style={{
              border: "2px solid #000",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
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
                alignItems: "flex-end",
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
    </Container>
  );

  return (
    <Container>
      {/* elementos visibles en vista privada de detalle de publicaciones  */}
      {usuario && activeMenu === "DetallePublicacion" ? (
        <div
          style={{
            height: "calc(100vh - 140px)",
          }}
        >
          <Row>
            <Col xs={12} md={3}>
              {<MenuLateral />}
            </Col>
            <Col xs={12} md={9}>
              <Row>
                <Col xs={12}>
                  <h3 className="text-center mb-2 mt-4">Detalle Publicación</h3>
                </Col>
                <Col xs={12}>
                  <p
                    className="text-center p-2 mb-2"
                    style={{ color: "black" }}
                  >
                    {usuario?.nombre}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Col xs={12} md={9} className="d-flex justify-content-end p-4">
            <DetallesCard imagen={imagen} email={email} />
          </Col>
          <CerrarSesionButton />
        </div>
      ) : (
        // vista publica
          <Container>
          <Row>
            <Col xs={12}></Col>
            <Col xs={12}>
              <h3 className="text-center mb-2 mt-4">Detalle Publicación</h3>
            </Col>
            <Col xs={12} md={9} className="d-flex justify-content-end p-4">
              <DetallesCard imagen={imagen} email={email} />
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default DetallePublicacion;

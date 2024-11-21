// para el perfil
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Perfil = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={12} md={3}>
          <Nav
            className="flex-column bg-light p-3 rounded"
            style={{
              borderWidth: "2px",
              borderColor: "#000",
              borderStyle: "solid",
            }}
          >
            <Nav.Link
              href="#"
              className="mb-2 text-dark py-2"
              style={{
                border: "2px solid #000",
                borderRadius: "5px",
              }}
            >
              Crear Publicación
            </Nav.Link>
            <Nav.Link
              href="#"
              className="mb-2 text-dark py-2"
              style={{
                border: "2px solid #000",
                borderRadius: "5px",
              }}
            >
              Mis Publicaciones
            </Nav.Link>
            <Nav.Link
              href="#"
              className="mb-2 text-dark py-2"
              style={{
                border: "2px solid #000",
                borderRadius: "5px",
              }}
            >
              Tienda
            </Nav.Link>
            <Nav.Link
              href="#"
              className="mb-2 text-dark py-2"
              style={{
                border: "2px solid #000",
                borderRadius: "5px",
              }}
            >
              Detalle Publicación
            </Nav.Link>
            <Nav.Link
              href="#"
              className="mb-2 text-dark py-2"
              style={{
                border: "2px solid #000",
                borderRadius: "5px",
              }}
            >
              Mis favoritos
            </Nav.Link>
            <Nav.Link href="#" className="mb-2 text-dark py-2"
            style={{
                border: "2px solid #000",
                borderRadius:"5px",
              }}
            >
              Actualizar Perfil
            </Nav.Link>
          </Nav>
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
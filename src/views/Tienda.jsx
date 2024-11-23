import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardPublicacion from "../components/CardPublicacion";

const Tienda = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    fetch("/publicaciones.json")
      .then((res) => res.json())
      .then((data) => setPublicaciones(data))
      .catch((err) => console.error("Error al cargar publicaciones", err));
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="text-center mb-4">Tienda</h3>
      <Row>
        {publicaciones.length > 0 ? (
          publicaciones.map((pub, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <CardPublicacion
                imagen={pub.imagen_url}
                titulo={pub.titulo}
                descripcion={pub.descripcion}
                precio={pub.precio}
                publicadoPor={`Usuario ID: ${pub.usuario_id}`}
                mostrarAgregar={true}
              />
            </Col>
          ))
        ) : (
          <p className="p-4">No hay publicaciones disponibles</p>
        )}
      </Row>
    </Container>
  );
};

export default Tienda;

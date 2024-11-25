import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardPublicacion from "../componnets/CardPublicacion";
import { UsuarioContext } from "../context/UsuarioContext";

const MisFavoritos = () => {
  const { favoritos } = useContext(UsuarioContext);

  return (
    <Container className="mt-4 p-4">
      <h3 className="text-center mb-4">Mis Favoritos</h3>
      <Row>
        {favoritos.length > 0 ? (
          favoritos.map((fav, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
            <CardPublicacion {...fav} mostrarAgregar={false} />
            </Col>
      ))
      ) : (
      <p className="p-4">no tiene publicaciones marcadas como favoritas</p>
        )}
      </Row>
    </Container>
  );
};

export default MisFavoritos;
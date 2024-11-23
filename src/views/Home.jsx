import { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OrdenarPor from "../components/OrdenarPor";
import Buscador from "../components/Buscador";
import CardPublicacion from "../components/CardPublicacion";
import { UsuarioContext } from "../context/UsuarioContext";
import Tienda from "./Tienda";
import Tienda from "./Tienda";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Home = () => {
  const { publicaciones } = useContext(UsuarioContext);

  return (
    <Container
      className="container d-flex flex-column"
      style={{ minHeight: "100vh" }}
    >
      <h2 className="text-center mb-4 p-4">
        Bienvenidos al MarketPlace de cursos en linea de programacion
      </h2>
      <Row>
        <Col sm="4">
          <OrdenarPor />
        </Col>
        <Col sm="4" className="text-center">
          <h5>Publicaciones</h5>
        </Col>
        <Col sm="4">
          <Buscador />
        </Col>
      </Row>
      <Row>
        {publicaciones.length > 0 ? (
          publicaciones.map((pub, index) => (
            <Col xs={12} md={6} key={index}>
              <CardPublicacion
                imagen={pub.imagen}
                titulo={pub.titulo}
                descripcion={pub.descripcion}
                precio={pub.precio}
                publicadoPor={pub.publicadoPor}
                mostrarAgregar={false} // para ocultar el boton agregar
              />
            </Col>
          ))
        ) : (
          <p>No hay publicaciones disponibles</p>
        )}
      </Row>
    </Container>
  );
};

export default Home;

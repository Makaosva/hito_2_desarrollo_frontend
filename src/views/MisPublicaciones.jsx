import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuLateral from "../components/MenuLateral";
import CardPublicacion from "../components/CardPublicacion";
import { UsuarioContext } from "../context/UsuarioContext";
import CerrarSesionButton from "../components/CerrarSesionButton";

const MisPublicaciones = () => {
  const { MisPublicaciones, setActiveMenu } = useContext(UsuarioContext);

  useEffect(() => {
    setActiveMenu("Mis Publicaciones");
  }, [setActiveMenu]);

  return (
    <Container
      style={{
        height: "calc(100vh - 140px)",
      }}
    >
      <Row>
        <Col xs={12} md={3}>
          <MenuLateral />
        </Col>

        <Col xs={12} md={9}>
          <div className="text-center p-2">
            <h4 className="border-bottom p-2">Mis Publicaciones</h4>
          </div>
          <p className="text-center">Usuario_actual</p>
          <Row>
            {MisPublicaciones.length > 0 ? (
              MisPublicaciones.map((pub, index) => (
                <Col xs={12} md={6} key={index}>
                  <CardPublicacion
                    imagen={pub.imagen_url}
                    titulo={pub.titulo}
                    descripcion={pub.descripcion}
                    precio={pub.precio}
                    publicadoPor="Usuario_actual"
                    mostrarAgregar={false}
                  />
                </Col>
              ))
            ) : (
              <p>No hay publicaciones disponibles</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MisPublicaciones;

import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardPublicacion from "../components/CardPublicacion";
import { UsuarioContext } from "../context/UsuarioContext";
import MenuLateral from "../components/MenuLateral";
import CerrarSesionButton from "../components/CerrarSesionButton";

const MisFavoritos = () => {
  const { MisFavoritos, setActiveMenu } = useContext(UsuarioContext);

  useEffect(() => {
    setActiveMenu("Mis Favoritos");
  }, [setActiveMenu]);

  return (
    <Container
      style={{
        height: "calc(100vh - 140px)",
      }}
    >
      <Row>
        {/* Menú lateral */}
        <Col xs={12} md={3}>
          <MenuLateral />
        </Col>

        <Col xs={12} md={9}>
          <div className="text-center p-2">
            <h4 className="border-bottom p-2">Mis Favoritos</h4>
          </div>
          <p className="text-center">Usuario_actual</p>
          <Row>
            {MisFavoritos.length > 0 ? (
              MisFavoritos.map((pub, index) => (
                <Col xs={12} md={6} key={index}>
                  <CardPublicacion
                    imagen={pub.imagen_url}
                    titulo={pub.titulo}
                    descripcion={pub.descripcion}
                    precio={pub.precio}
                    publicadoPor="Usuario_actual"
                    mostrarAgregar={false}
                    esFavorito={true}
                  />
                </Col>
              ))
            ) : (
              <p>No hay publicaciones favoritos disponibles</p>
            )}
          </Row>
        </Col>

        {/* Contenido de las publicaciones favoritas */}
      </Row>
      <CerrarSesionButton />
    </Container>
  );
};

export default MisFavoritos;

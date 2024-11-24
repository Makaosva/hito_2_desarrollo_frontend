import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuLateral from "../components/MenuLateral";
import CardPublicacion from "../components/CardPublicacion";
import { UsuarioContext } from "../context/UsuarioContext";
import CerrarSesionButton from "../components/CerrarSesionButton";


// La vista Mis Publicaciones se muestra las cards despues de Crear Publicaciones
const MisPublicaciones = () => {
  const { publicaciones, setActiveMenu, usuario } = useContext(UsuarioContext);

  useEffect(() => {
    setActiveMenu("Mis Publicaciones");
  }, [setActiveMenu, publicaciones]);

  return (
    <Container fluid className="mt-5" style={{ minHeight: "100vh" }}>
      <Row>
        <Col xs={12} md={3}>
          <MenuLateral />
        </Col>

        <Col xs={12} md={9}>
          <div className="text-center mb-4">
            <h1 className="border-bottom pb-2">Mis Publicaciones</h1>
          </div>
          <p className="text-center p-4">{usuario?.nombre}</p>
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
        </Col>
      </Row>
      <CerrarSesionButton />
    </Container>
  );
};

export default MisPublicaciones;

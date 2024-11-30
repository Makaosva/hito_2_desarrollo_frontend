import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardPublicacion from "../components/CardPublicacion";
import { UsuarioContext } from "../context/UsuarioContext";
import MenuLateral from "./MenuLateral";
import OrdenarPor from "../components/OrdenarPor";
import Buscador from "../components/Buscador";

const Tienda = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const { activeMenu, usuario } = useContext(UsuarioContext);

  useEffect(() => {
    fetch("/publicaciones.json")
      .then((res) => res.json())
      .then((data) => setPublicaciones(data))
      .catch((err) => console.error("Error al cargar publicaciones", err));

    fetch("/usuario.json")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error("Error al cargar usuarios", err));
  }, []);

  const publicacionesConNombre = publicaciones.map((pub) => {
    const usuario = usuarios.find((user) => user.id === pub.usuario_id);
    return {
      ...pub,
      nombreUsuario: usuario ? usuario.nombre : "Desconocido",
      emailUsuario: usuario ? usuario.email : null,
    };
  });

  return (
    <Container>
      {/* elementos visibles en vista privada de la tienda desde perfil */}
      {usuario && activeMenu === "Tienda" ? (
        <div
          style={{
            height: "calc(100vh - 140px)",
          }}
        >
          <Row>
            <Col xs={12} md={3}>
              <MenuLateral />
            </Col>
            <Col xs={12} md={9}>
              <Row>
                <Col xs={12}>
                  <h3 className="text-center mb-2 mt-2">Tienda de Cursos</h3>
                </Col>
                <Col xs={12}>
                  <p className="text-center p-2 mb-2">{usuario?.nombre}</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row
            className="justify-content-end align-item-start mb-4"
            style={{ marginTop: "-520px" }}
          >
            <Col sm="4" className="p-2">
              <OrdenarPor />
            </Col>
            <Col sm="4" className="p-2">
              <Buscador />
            </Col>
          </Row>
          <Container
            style={{
              maxHeight: "calc(100vh - 450px)",
              overflowY: "auto",
              overflowX: "hidden",
              padding: "15px",
            }}
          >
            <Row
              className="justify-content-start align-item-start"
              style={{
                marginTop: "20px",
                marginLeft: "400px",
                width: "75%",
                height: "75%",
              }}
            >
              {publicacionesConNombre.length > 0 ? (
                publicacionesConNombre.map((pub, index) => (
                  <Col xs={12} md={6} lg={6} key={index}>
                    <CardPublicacion
                      imagen={pub.imagen_url}
                      titulo={pub.titulo}
                      descripcion={pub.descripcion}
                      precio={pub.precio}
                      publicadoPor={`${pub.nombreUsuario}`}
                      emailUsuario={pub.emailUsuario}
                      mostrarAgregar={true}
                    />
                  </Col>
                ))
              ) : (
                <p className="p-4">No hay publicaciones disponibles</p>
              )}
            </Row>
          </Container>
        </div>
      ) : (
        // para elementos vista publica desde home
        <Row>
          <Col xs={12}>
            <h3 className="text-center mb-2 mt-2 mb-4">Tienda de Cursos</h3>
          </Col>
          {publicacionesConNombre.length > 0 ? (
            publicacionesConNombre.map((pub, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <CardPublicacion
                  imagen={pub.imagen_url}
                  titulo={pub.titulo}
                  descripcion={pub.descripcion}
                  precio={pub.precio}
                  publicadoPor={`${pub.nombreUsuario}`}
                  emailUsuario={pub.emailUsuario}
                  mostrarAgregar={true}
                />
              </Col>
            ))
          ) : (
            <p className="p-4">No hay publicaciones disponibles</p>
          )}
        </Row>
      )}
    </Container>
  );
};

export default Tienda;

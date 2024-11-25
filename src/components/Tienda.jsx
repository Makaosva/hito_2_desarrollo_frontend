import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardPublicacion from "../components/CardPublicacion";
import CerrarSesionButton from "../components/CerrarSesionButton";
import { UsuarioContext } from "../context/UsuarioContext";
import MenuLateral from "./MenuLateral";
import OrdenarPor from "../components/OrdenarPor";
import Buscador from "../components/Buscador";

const Tienda = (showCerrarSesion) => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const { activeMenu, usuario } = useContext(UsuarioContext); // para vista privada
  const { filteredPublicaciones, cargarPublicaciones } =
    useContext(UsuarioContext);

  useEffect(() => {
    // cargar publicaciones
    fetch("/publicaciones.json")
      .then((res) => res.json())
      .then((data) => setPublicaciones(data))
      .catch((err) => console.error("Error al cargar publicaciones", err));

    // cargar usuarios
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
    <Container className="mt-3 p-2">
      <Buscador />
      <h3 className="text-center mb-4">Tienda</h3>
      <Row>
        {/* elementos visibles en vista privada de la tienda */}
        {usuario && activeMenu === "Tienda" && (
          <>
            <Col xs={12} md={3}>
              <MenuLateral />
            </Col>
            <Col xs={12} md={3}>
              <p className="text-center p-2">{usuario?.nombre}</p>
            </Col>
            <Row>
              <Col sm="6" className="p-3">
                <OrdenarPor />
              </Col>
              <Col sm="6" className="p-3">
                <Buscador />
              </Col>
            </Row>
          </>
        )}
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
      {showCerrarSesion && <CerrarSesionButton />}
    </Container>
  );
};

export default Tienda;

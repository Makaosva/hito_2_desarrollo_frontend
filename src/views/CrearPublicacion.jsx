import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MenuLateral from "../components/MenuLateral";
import { UsuarioContext } from "../context/UsuarioContext";
import CerrarSesionButton from "../components/CerrarSesionButton";

const CrearPublicacion = () => {
  const { setActiveMenu, setPublicaciones } = useContext(UsuarioContext);
  const [formData, setFormData] = useState({
    imagen: "",
    titulo: "",
    descripcion: "",
    precio: "",
  });

  useEffect(() => {
    setActiveMenu("Crear Publicación");
  }, [setActiveMenu]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaPublicacion = {
      ...formData,
      publicadoPor: "Usuario actual",
    };

    setPublicaciones((prev) => {
      const updatedPublicaciones = [...prev, nuevaPublicacion];
      return updatedPublicaciones;
    });

    setFormData({
      imagen: "",
      titulo: "",
      descripcion: "",
      precio: "",
    });

    alert("Publicación creada");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container fluid className="mt-5">
      <Row className="p-4">
        <Col xs={12} md={3}>
          <MenuLateral />
        </Col>

        <Col xs={12} md={9}>
          <div className="text-center border p-4 rounded shadow-sm bg-white">
            <h1 className="mb-4" style={{ color: "black" }}>
              Crear Publicación
            </h1>
            <p className="text-center p-4" style={{ color: "black" }}>
              Nombre de Usuario
            </p>

            {/* Formulario */}
            <Form
              onSubmit={handleSubmit}
              className="p-4 bg-light rounded shadow-sm"
            >
              <Form.Group controlId="formImagen" className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "black" }}>
                  Imagen publicación
                </Form.Label>
                <Form.Control
                  type="url"
                  name="imagen"
                  value={formData.imagen}
                  onChange={handleInputChange}
                  placeholder="Ingresa la URL de la imagen"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formTitulo" className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "black" }}>
                  Título publicación
                </Form.Label>
                <Form.Control
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleInputChange}
                  placeholder="Ingresa el título"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formDescripcion" className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "black" }}>
                  Descripción publicación
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  placeholder="Escribe la descripción"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPrecio" className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "black" }}>
                  Precio
                </Form.Label>
                <Form.Control
                  type="number"
                  name="precio"
                  value={formData.precio}
                  onChange={handleInputChange}
                  placeholder="Ingresa el precio"
                  required
                />
              </Form.Group>

              <Button variant="dark" type="submit" clasName="w-100">
                Publicar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <CerrarSesionButton />
    </Container>
  );
};

export default CrearPublicacion;

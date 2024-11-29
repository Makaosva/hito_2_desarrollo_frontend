import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MenuLateral from "../components/MenuLateral";
import { UsuarioContext } from "../context/UsuarioContext";

const CrearPublicacion = () => {
  const { setActiveMenu } = useContext(UsuarioContext);
  const [formData, setFormData] = useState({
    imagen: "",
    titulo: "",
    descripcion: "",
    precio: "",
  });

  useEffect(() => {
    setActiveMenu("Crear Publicacion");
  }, [setActiveMenu]);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Publicación creada");

    setFormData({
      imagen: "",
      titulo: "",
      descripcion: "",
      precio: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

        <Col xs={12} md={9} className="d-flex justify-content-center p-4">
          <div className="text-center shadow-sm w-50">
            <h4 className="mb-2" style={{ color: "white" }}>
              Crear Publicación
            </h4>
            <p className="text-center" style={{ color: "white" }}>
              Usuario_actual
            </p>

            {/* Formulario */}
            <Form
              onSubmit={handleSubmit}
              className="bg-light rounded shadow-sm p-4"
              style={{
                maxWidth: "300px",
                margin: "auto",
                background: "linear-gradient(to right, #cce7ff, #a0c4ff)",
              }}
            >
              <Form.Group controlId="formImagen" className="mb-2">
                <Form.Label className="fw-bold" style={{ color: "#4a4a4a" }}>
                  Imagen publicación
                </Form.Label>
                <Form.Control
                  type="url"
                  name="imagen"
                  value={formData.imagen}
                  onChange={handleInputChange}
                  placeholder="Ingresa la URL de la imagen"
                  required
                  style={{
                    borderColor: "#6c757d",
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formTitulo" className="mb-2">
                <Form.Label className="fw-bold" style={{ color: "#4a4a4a" }}>
                  Título publicación
                </Form.Label>
                <Form.Control
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleInputChange}
                  placeholder="Ingresa el título"
                  required
                  style={{
                    borderColor: "#6c757d",
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formDescripcion" className="mb-2">
                <Form.Label className="fw-bold" style={{ color: "#4a4a4a" }}>
                  Descripción publicación
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  placeholder="Escribe la descripción"
                  required
                  style={{
                    borderColor: "#6c757d",
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formPrecio" className="mb-2">
                <Form.Label className="fw-bold" style={{ color: "#4a4a4a" }}>
                  Precio
                </Form.Label>
                <Form.Control
                  type="number"
                  name="precio"
                  value={formData.precio}
                  onChange={handleInputChange}
                  placeholder="Ingresa el precio"
                  required
                  style={{
                    borderColor: "#6c757d",
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-50"
                style={{
                  backgroundColor: "#000080",
                  borderColor: "#0056b3",
                  transition: "background-color 0.3s ease",
                }}
              >
                Publicar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end"></Row>
    </Container>
  );
};

export default CrearPublicacion;

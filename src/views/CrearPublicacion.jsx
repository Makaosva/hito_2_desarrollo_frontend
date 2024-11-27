import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MenuLateral from "../components/MenuLateral";
import { UsuarioContext } from "../context/UsuarioContext";
import CerrarSesionButton from "../components/CerrarSesionButton";

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

  const nuevaPublicacion = {
    ...formData,
    publicadoPor: "Usuario actual",
  };

  /* setPublicaciones((prev) => {
    const updatedPublicaciones = [...prev, nuevaPublicacion];
    return updatedPublicaciones;
  });
  const { MisPublicaciones, setMisPublicaciones } = useContext(UsuarioContext)
  setPublicaciones((prev) => [...prev, nuevaPublicacion]); */


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
          <div className="text-center border rounded shadow-sm bg-white w-50">
            <h4 className="mb-2" style={{ color: "black" }}>
              Crear Publicación
            </h4>
            <p className="text-center" style={{ color: "black" }}>
              Usuario_actual
            </p>

            {/* Formulario */}
            <Form
              onSubmit={handleSubmit}
              className="bg-light rounded shadow-sm p-4"
              style={{ maxWidth: "300px", margin: "auto" }}
            >
              <Form.Group controlId="formImagen" className="mb-2">
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

              <Form.Group controlId="formTitulo" className="mb-2">
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

              <Form.Group controlId="formDescripcion" className="mb-2">
                <Form.Label className="fw-bold" style={{ color: "black" }}>
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
                />
              </Form.Group>

              <Form.Group controlId="formPrecio" className="mb-2">
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

              <Button variant="dark" type="submit" className="w-50">
                Publicar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end">
        <CerrarSesionButton />
      </Row>
    </Container>
  );
};

export default CrearPublicacion;

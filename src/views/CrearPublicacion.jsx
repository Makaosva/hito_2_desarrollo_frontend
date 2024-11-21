import React, { useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MenuLateral from "../components/MenuLateral";
import { UsuarioContext } from "../context/UsuarioContext";

const CrearPublicacion = () => {
  const { setActiveMenu } = useContext(UsuarioContext);

  useEffect(() => {
    setActiveMenu("Crear Publicación");
  }, [setActiveMenu]);

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={12} md={3}>
          <MenuLateral />
        </Col>

        <Col xs={12} md={9}>
          <div className="text-center border p-4 rounded shadow-sm bg-white">
            <h1 className="mb-4">Crear Publicación</h1>

            {/* Formulario */}
            <Form className="p-4 bg-light rounded shadow-sm">
              <Form.Group controlId="formImagen" className="mb-3">
                <Form.Label className="fw-bold">Imagen publicación</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Ingresa la URL de la imagen"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formTitulo" className="mb-3">
                <Form.Label className="fw-bold">Título publicación</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa el título"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formDescripcion" className="mb-3">
                <Form.Label className="fw-bold">
                  Descripción publicación
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Escribe la descripción"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPrecio" className="mb-3">
                <Form.Label className="fw-bold">Precio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresa el precio"
                  required
                />
              </Form.Group>

              <Button variant="dark" clasName="w-100">
                Publicar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CrearPublicacion;

import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MenuLateral from "../components/MenuLateral";
import CerrarSesionButton from "../components/CerrarSesionButton";
import { UsuarioContext } from "../context/UsuarioContext";
import { useNavigate } from "react-router-dom";

const ActualizarPerfil = () => {
  const navigate = useNavigate();
  const { setActiveMenu } = useContext(UsuarioContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nuevoPassword, setNuevoPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");

  //para que se active el menu color gris oscuro
  useEffect(() => {
    setActiveMenu("Actualizar Perfil");
  }, [setActiveMenu]);

  //para cambios en los inputs
  const handleChange = (setter) => (event) => setter(event.target.value);

  // validar datos
  const validarDatos = (e) => {
    e.preventDefault();

    if (!nombre || !email || !nuevoPassword || !confirmar) {
      alert("Completa todos los campos");
      return;
    }

    if (nuevoPassword !==  confirmar ) {
      alert("Los password no coinciden");
      return;
    }
    alert("Perfil actualizado con éxito");

    setNombre("");
    setEmail("");
    setPassword("");
    setNuevoPassword("");
    setConfirmar("");
  };
    const handleGoToProfile = () => {
      alert("Redirigiendo al Perfil ...");
    }

  const handleGoBack = () => {
    navigate("/perfil");
  };

  return (
      <Container style={{ height: "calc(100vh - 140px)" }}>
      <Row>
        <Col xs={12} md={3}>
          <MenuLateral />
        </Col>
        <Col xs={12} md={9} className="d-flex justify-content-center align-items-center">
          <Container
            className="d-flex justify-content-center align-items-center"
            style={{ paddingTop: "10px" }}
          >
            <div className="w-100 d-flex justify-content-center align-items-center" style={{ maxWidth: "300px" }}>
              <Form onSubmit={validarDatos}>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextName">
                  <Form.Label column sm="12" className="text-start">
                    Nombre
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control
                      type="text"
                      placeholder="Francisca"
                      onChange={handleChange(setNombre)}
                      value={nombre}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
                  <Form.Label column sm="12" className="text-start">
                    Email
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      onChange={handleChange(setEmail)}
                      value={email}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextPassword">
                  <Form.Label column sm="12" className="text-start">
                    Password Actual
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control
                      type="password"
                      placeholder="*******"
                      onChange={handleChange(setPassword)}
                      value={password}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextNewPassword">
                  <Form.Label column sm="12" className="text-start">
                    Nuevo Password
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control
                      type="password"
                      placeholder="*******"
                      onChange={handleChange(setNuevoPassword)}
                      value={nuevoPassword}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-2" controlId="formPlaintextConfirmPassword">
                  <Form.Label column sm="12" className="text-start">
                    Confirmar Password
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control
                      type="password"
                      placeholder="*******"
                      onChange={handleChange(setConfirmar)}
                      value={confirmar}
                    />
                  </Col>
                </Form.Group>
                <div className="d-flex justify-content-center gap-4 pt-2">
                  <Button type="submit" className="btn btn-primary btn-lg">
                    Actualizar
                  </Button>
                  <Button type="button" className="btn btn-secondary btn-lg" onClick={handleGoBack}>
                    Volver
                  </Button>
                </div>
              </Form>
            </div>
          </Container>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end">
        <CerrarSesionButton />
      </Row>
  </Container>
    );
  };

export default ActualizarPerfil;

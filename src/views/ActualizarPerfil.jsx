import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MenuLateral from "../components/MenuLateral";
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

    if (nuevoPassword !== confirmar) {
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

  const handleGoBack = () => {
    navigate("/perfil");
  };

  return (
    <Container style={{ height: "calc(100vh - 140px)" }}>
      <Row>
        <Col xs={12} md={3}>
          <MenuLateral />
        </Col>
        <Col
          xs={12}
          md={9}
          className="d-flex justify-content-center align-items-center"
        >
          <Container
            className="d-flex justify-content-center align-items-center"
            style={{ paddingTop: "20px" }}
          >
            <div
              className="w-100 d-flex justify-content-center align-items-center"
              style={{ maxWidth: "370px" }}
            >
              <Form
                onSubmit={validarDatos}
                style={{
                  maxWidth: "500px",
                  margin: "auto",
                  background: "linear-gradient(to right, #cce7ff, #a0c4ff)",
                  padding: "15px",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Form.Group
                  as={Row}
                  className="mb-2"
                  controlId="formPlaintextName"
                >
                  <Form.Label
                    column
                    sm="12"
                    className="text-start"
                    style={{ fontWeight: "600", color: "#4a4a4a" }}
                  >
                    Nombre
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      onChange={handleChange(setNombre)}
                      value={nombre}
                      style={{
                        borderColor: "#b0c4de",
                        borderRadius: "8px",
                        padding: "10px",
                        boxShadow: "none",
                      }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label
                    column
                    sm="12"
                    className="text-start"
                    style={{ fontWeight: "600", color: "#4a4a4a" }}
                  >
                    Email
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      onChange={handleChange(setEmail)}
                      value={email}
                      style={{
                        borderColor: "#b0c4de",
                        borderRadius: "8px",
                        padding: "10px",
                        boxShadow: "none",
                      }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label
                    column
                    sm="12"
                    className="text-start"
                    style={{ fontWeight: "600", color: "#4a4a4a" }}
                  >
                    Password Actual
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control
                      type="password"
                      placeholder="*******"
                      onChange={handleChange(setPassword)}
                      value={password}
                      style={{
                        borderColor: "#b0c4de",
                        borderRadius: "8px",
                        padding: "10px",
                        boxShadow: "none",
                      }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextNewPassword">
                  <Form.Label
                    column
                    sm="12"
                    className="text-start"
                    style={{ fontWeight: "600", color: "#4a4a4a" }}
                  >
                    Nuevo Password
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control
                      type="password"
                      placeholder="*******"
                      onChange={handleChange(setNuevoPassword)}
                      value={nuevoPassword}
                      style={{
                        borderColor: "#b0c4de",
                        borderRadius: "8px",
                        padding: "10px",
                        boxShadow: "none",
                      }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextConfirmPassword">
                  <Form.Label
                    column
                    sm="12"
                    className="text-start"
                    style={{ fontWeight: "600", color: "#4a4a4a" }}
                  >
                    Confirmar nueva Password
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control
                      type="password"
                      placeholder="*******"
                      onChange={handleChange(setConfirmar)}
                      value={confirmar}
                      style={{
                        borderColor: "#b0c4de",
                        borderRadius: "8px",
                        padding: "10px",
                        boxShadow: "none",
                      }}
                    />
                  </Col>
                </Form.Group>
                <div className="d-flex justify-content-center gap-4 pt-2">
                  <Button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ background: "#4682B4" }}
                  >
                    Actualizar
                  </Button>
                  <Button
                    type="button"
                    className="btn btn-secondary btn-lg"
                    onClick={handleGoBack}
                    style={{ background: "#00BFFF" }}
                  >
                    Volver
                  </Button>
                </div>
              </Form>
            </div>
          </Container>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end"></Row>
    </Container>
  );
};

export default ActualizarPerfil;

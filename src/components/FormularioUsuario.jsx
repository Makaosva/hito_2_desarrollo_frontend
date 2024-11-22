import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FormularioUsuario = ({ setMensaje, setTipo }) => {
  const navigate = useNavigate();
  // Estados del Formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [errorConfirmar, setErrorConfirmar] = useState("");

  const handleGoToProfile = () => {
    navigate("/perfil");
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
    setMensaje(""); // Limpiar el mensaje al cambiar algún campo
    setErrorConfirmar(""); // Limpiar el mensaje de error de confirmación
  };

  const validarDatos = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (nombre === "" || email === "" || password === "" || confirmar === "") {
      setMensaje("Completa todos los campos");
      setTipo("danger");
      return;
    }

    // Validación de coincidencia de contraseñas
    if (password !== confirmar) {
      setErrorConfirmar("Las contraseñas no coinciden");
      return;
    }

    // Si no hay errores, se muestra un mensaje de éxito
    setMensaje("¡Información enviada con éxito!");
    setTipo("success");

    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmar("");
  };

  return (
    <Form onSubmit={validarDatos}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="4">
          Nombre
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="text"
            placeholder="Nombre"
            onChange={handleChange(setNombre)}
            value={nombre}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          Email
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={handleChange(setEmail)}
            value={email}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          Password
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange(setPassword)}
            value={password}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="4">
          Confirmar Password
        </Form.Label>
        <Col sm="8">
          <Form.Control
            type="password"
            placeholder="Confirmar password"
            onChange={handleChange(setConfirmar)}
            value={confirmar}
          />
        </Col>
      </Form.Group>
      <Button
        type="submit"
        className="btn btn-primary btn-lg boton"
        onClick={handleGoToProfile}
      >
        Enviar
      </Button>
    </Form>
  );
};

export default FormularioUsuario;

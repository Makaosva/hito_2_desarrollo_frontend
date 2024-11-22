import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";

const InicioSesion = () => {
  const navigate = useNavigate();
  const { loginWithEmailAndPassword } = useContext(UsuarioContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoToProfile = () => {
    navigate("/perfil");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginWithEmailAndPassword(email, password);
    alert(response?.message || "Something went wrong");
  };

  return (
    <Container fluid className="text-center">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicCorreo">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleGoToProfile}>
          Ir a Mi Perfil
        </Button>
      </Form>
    </Container>
  );
};

export default InicioSesion;

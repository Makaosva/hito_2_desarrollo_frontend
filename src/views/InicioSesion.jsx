import { useContext, useState, useEffect } from "react";
import { UsuarioContext } from "../context/UsuarioContext.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";

const InicioSesion = () => {
  const { setUsuario } = useContext(UsuarioContext);
  const { usuario } = useContext(UsuarioContext);
  const navigate = useNavigate();
  const { loginWithEmailAndPassword } = useContext(UsuarioContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (usuario) {
      navigate("/perfil");
    }
  }, [usuario, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isLoggedIn = await loginWithEmailAndPassword(email, password);

    if (isLoggedIn) {
      alert("Inicio de sesión exitoso");
      navigate("/perfil");
    } else {
      alert("Credenciales inválidas");
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container
      className="registroUsuario"
      style={{ height: "calc(100vh - 140px)" }}
    >
      <h1 className="p-2">Iniciar Sesión</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
          />
        </Form.Group>
        <Button
          type="submit"
          className="btn btn-primary btn-lg boton m-3"
          /*  onClick={handleGoToProfile} */
        >
          Iniciar Sesión
        </Button>
        <Button
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={handleGoBack}
        >
          Volver
        </Button>
      </Form>
    </Container>
  );
};

export default InicioSesion;

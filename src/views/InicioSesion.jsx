import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";

const InicioSesion = () => {
  const { setUsuario } = useContext(UsuarioContext);
  const navigate = useNavigate();
  const { loginWithEmailAndPassword } = useContext(UsuarioContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* const handleGoToProfile = () => {
    navigate("/perfil");
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();

   /*  const response = await loginWithEmailAndPassword(email, password);
    alert(response?.message || "Something went wrong"); */
    try {
      const response = await fetch("/usuario.json");

      if (!response.ok) {
        throw new Error("No se pudo obtener los usuarios")
      }

      const usuarios = await response.json();

      const usuarioValido = usuarios.find(
        (usuario) => usuario.email === email && usuario.password === password
      );

      if (usuarioValido) {
        alert("Inicio de Sesión exitoso");
        localStorage.setItem("usuario", JSON.stringify(usuarioValido));
        setUsuario(usuarioValido);
        loginWithEmailAndPassword(usuarioValido.email, usuarioValido.password);
        navigate("/perfil");
      } else {
        alert("Credenciales inválidas");
      }
    } catch (error) {
      console.error("Error al validar usuario", error);
      alert("Ocurrió un error en el inicio de sesión")
    }
};

const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container fluid className="registroUsuario">
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

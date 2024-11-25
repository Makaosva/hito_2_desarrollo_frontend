import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import Login from "../components/Login.jsx";

const InicioSesion = () => {
  const navigate = useNavigate();
  const { loginWithEmailAndPassword } = useContext(UsuarioContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoToProfile = () => {
    navigate("/perfil");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("en HandleSubmit");
    const response = await loginWithEmailAndPassword(email, password);
    alert(response?.message || "Something went wrong");
  };

  return (
    <Container fluid className="registroUsuario">
      <h1 className="p-2">Iniciar Sesión</h1>
      <Login />
    </Container>
  );
};

export default InicioSesion;

/* import { useContext, useState } from "react";
import { UsuariosContext } from "../context/UsuarioContext.jsx";

const InicioSesion = () => {
  const { loginWithEmailAndPassword } = useContext(UsuariosContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginWithEmailAndPassword(email, password);
    alert(response?.message || "Something went wrong");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default InicioSesion; */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const InicioSesion = () => {
  const navigate = useNavigate();

  const handleGoToProfile = () => {
    navigate("/perfil");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Button variant="primary" onClick={handleGoToProfile}>
        Ir a Mi Perfil
      </Button>
    </Container>
  );
};

export default InicioSesion;

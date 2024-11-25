import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alerta from "./Alerta";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({ error: false, msg: "", color: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validarDatos = (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (!email || !password) {
      setError({
        error: true,
        msg: "Completa todos los campos",
        color: "warning",
      });
    } else {
        const found = getUsuario.find()
      if (email === "user@example.com" && password === "user123") {
        setError({
          error: false,
          msg: "Inicio de sesión como usuario exitoso!",
          color: "success",
        });
        navigate("/perfil");
      } else {
        setError({
          error: true,
          msg: "Credenciales inválidas",
          color: "danger",
        });
      }
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Alerta error={error} />
      <Form onSubmit={validarDatos}>
        <Form.Group controlId="formBasicCorreo">
          <Form.Label>Email</Form.Label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={handleChange}
            value={data.email}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="form-control"
            placeholder="Contraseña"
            onChange={handleChange}
            value={data.password}
          />
        </Form.Group>
        <Form.Group className="checkbox mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            reverse
            label="Mostrar contraseña"
            onChange={() => setShowPassword(!showPassword)}
          />
        </Form.Group>
        <Button
          type="submit"
          className="btn btn-primary btn-lg boton m-3"
          //onClick={handleGoToProfile}
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
    </>
  );
};

export default Login;

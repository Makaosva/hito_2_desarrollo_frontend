import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { UsuarioContext } from "../context/UsuarioContext";

const Buscador = () => {
  const { publicaciones, setPublicaciones } = useContext(UsuarioContext)
  return (
    <Form.Control
      type="text"
      value={publicaciones}
      onChange={(e) => setPublicaciones(e.target.value)}
      placeholder="Buscar"
    />
  );
};

export default Buscador;

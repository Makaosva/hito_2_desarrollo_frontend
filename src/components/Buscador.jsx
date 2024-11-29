import React, { useContext } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { UsuarioContext } from "../context/UsuarioContext";
import { FaSearch } from "react-icons/fa";

const Buscador = () => {
  const { publicaciones, setPublicaciones } = useContext(UsuarioContext);
  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        value={publicaciones}
        onChange={(e) => setPublicaciones(e.target.value)}
        placeholder="Busca tu curso"
      />
      <InputGroup.Text>
        <FaSearch />
      </InputGroup.Text>
    </InputGroup>
  );
};

export default Buscador;

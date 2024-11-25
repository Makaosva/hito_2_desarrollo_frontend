import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

// ruta privada para verificar si el usuario está autenticado, si no vuelve al login
const RutaPrivada = ({ children }) => {
  const { usuario } = useContext(UsuarioContext);

  return usuario ? children : <Navigate to="/login" />;
};

export default RutaPrivada;

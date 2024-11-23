import React from "react";
import FormularioUsuario from "../components/FormularioUsuario";

const RegistroUsuario = () => {
  return (
    <main className="registroUsuario">
      <h1>Registrarse</h1>
      <section className="formulario">
        <FormularioUsuario />
      </section>
    </main>
  );
};

export default RegistroUsuario;

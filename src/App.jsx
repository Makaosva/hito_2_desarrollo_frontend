import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import InicioSesion from "./views/InicioSesion";
import Perfil from "./views/Perfil";
import NavbarMarket from "./components/NavbarMarket";
import Registro from "./views/Registro";
import CrearPublicacion from "./views/CrearPublicacion";
import MisPublicaciones from "./views/MisPublicaciones";
import UsuariosProvider from "./context/UsuarioContext";
import Carrito from "./views/Carrito";
import Home from "./views/Home";

function App() {
  return (
    <UsuariosProvider>
      <NavbarMarket />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<InicioSesion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/crear-publicacion" element={<CrearPublicacion />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/mis-publicaciones" element={<MisPublicaciones />} />
        </Routes>
      </div>
    </UsuariosProvider>
  );
}

export default App;

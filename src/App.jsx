import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import InicioSesion from "./views/InicioSesion";
import NavbarMarket from "./components/NavBarMarket";
import Registro from "./views/Registro";
import Carrito from "./views/Carrito";
import Home from "./views/Home";

function App() {
  return (
    <div>
      <NavbarMarket />
      <div>
        Productos
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<InicioSesion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

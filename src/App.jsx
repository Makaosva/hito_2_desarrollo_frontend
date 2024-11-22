import "./App.css";
import { Route, Routes } from "react-router-dom";
import InicioSesion from "./views/InicioSesion";
import Perfil from "./views/Perfil";
import NavbarMarket from "./components/NavbarMarket";
import RegistroUsuario from "./views/RegistroUsuario";
import CrearPublicacion from "./views/CrearPublicacion";
import MisPublicaciones from "./views/MisPublicaciones";
import DetallePublicacion from "./views/DetallePublicacion";
import UsuariosProvider from "./context/UsuarioContext";
import Carrito from "./views/Carrito";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Tienda from "./views/Tienda";

function App() {
  return (
    <UsuariosProvider>
      <NavbarMarket />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<InicioSesion />} />
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/crear-publicacion" element={<CrearPublicacion />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/mis-publicaciones" element={<MisPublicaciones />} />
          <Route path="/detalle-publicacion" element={<DetallePublicacion />} />
          <Route path="/tienda" element={<Tienda />} />
        </Routes>
      </div>
      <Footer />
    </UsuariosProvider>
  );
}

export default App;

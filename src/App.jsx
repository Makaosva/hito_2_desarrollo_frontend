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
import ActualizarPerfil from "./views/ActualizarPerfil";
import Footer from "./components/Footer";
import Tienda from "./components/Tienda";
import RutaPrivada from "./components/RutaPrivada";
import MisFavoritos from "./views/MisFavoritos";

// PROFESOR:EN README SE ESCRIBIÓ RESPUESTA RESPECTO A HITO 1

function App() {
  return (
    <UsuariosProvider>
      <NavbarMarket />
      <div>
        <Routes>
          {/* Ruta pública para todos */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<InicioSesion />} />
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/detalle-publicacion" element={<DetallePublicacion />} />
          <Route path="/tienda" element={<Tienda />} />
          {/* Ruta privada solo para usuarios autenticados */}
          <Route
            path="/perfil"
            element={
              <RutaPrivada>
                <Perfil />
              </RutaPrivada>
            }
          />
          <Route
            path="/crear-publicacion"
            element={
              <RutaPrivada>
                <CrearPublicacion />
              </RutaPrivada>
            }
          />
          <Route
            path="/mis-publicaciones"
            element={
              <RutaPrivada>
                <MisPublicaciones />
              </RutaPrivada>
            }
          />
          <Route
            path="/mis-favoritos"
            element={
              <RutaPrivada>
                <MisFavoritos />
              </RutaPrivada>
            }
          />
          <Route
            path="/actualizar-perfil"
            element={
              <RutaPrivada>
                <ActualizarPerfil />
              </RutaPrivada>
            }
          />
        </Routes>
      </div>
      <Footer />
    </UsuariosProvider>
  );
}

export default App;

import { createContext, useEffect, useState, useContext } from "react";

export const UsuarioContext = createContext();

const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialUsuario = JSON.parse(localStorage.getItem("usuario")) || null;

const UsuariosProvider = ({ children }) => {
  const initialStateToken = localStorage.getItem("token") || "";
  const [token, setToken] = useState(initialStateToken);
  const [activeMenu, setActiveMenu] = useState(""); // se agrega para el menu lateral
  const [sortOption, setSortOption] = useState(""); // estado para el sort
  const [showCerrarSesion, setShowCerrarSesion] = useState(false);
  const [usuario, setUsuario] = useState(initialUsuario);
  //se agrega a MisPublicaciones.jsx
  const [MisPublicaciones, setMisPublicaciones] = useState([
    {
      id: 7,
      titulo: "Programacion Php",
      descripcion: "Curso de programacion en Php",
      imagen_url:
        "https://th.bing.com/th/id/OIP.DNfxVyVqi5vjaISEE9ewAAHaEK?rs=1&pid=ImgDetMain",
      precio: 600000,
      usuario_id: 3,
    },
    {
      id: 8,
      titulo: "Programacion TypeScript",
      descripcion: "Curso de programacion en TypeScript",
      imagen_url:
        "https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png",
      precio: 650000,
      usuario_id: 4,
    },
  ]);

  const [MisFavoritos, setMisFavoritos] = useState([
    {
      id: 7,
      titulo: "Programacion Php",
      descripcion: "Curso de programacion en Php",
      imagen_url:
        "https://th.bing.com/th/id/OIP.DNfxVyVqi5vjaISEE9ewAAHaEK?rs=1&pid=ImgDetMain",
      precio: 600000,
      usuario_id: 3,
    },
  ]);

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  const handleMenuChange = (menuName) => {
    setActiveMenu(menuName);
    if (menuName === "Tienda") {
      setShowCerrarSesion(true);
    } else {
      setShowCerrarSesion(false);
    }
  };

  const handleMenuCambio = (menuName) => {
    setActiveMenu(menuName);
    if (menuName === "DetallePublicacion") {
      setShowCerrarSesion(true);
    } else {
      setShowCerrarSesion(false);
    }
  };


  useEffect(() => {
    let sortedPublicaciones = [...MisPublicaciones];
    if (sortOption === "name-asc") {
      sortedPublicaciones.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (sortOption === "name-desc") {
      sortedPublicaciones.sort((a, b) => b.titulo.localeCompare(a.titulo));
    }
    setMisPublicaciones(sortedPublicaciones);
  }, [sortOption]);

  const loginWithEmailAndPassword = async (email, password) => {
    try {
      const response = await fetch("/usuario.json");
      if (!response.ok) {
        throw new Error("No se pudo obtener los usuarios");
      }

      const usuarios = await response.json();
      const usuarioValido = usuarios.find(
        (usuario) => usuario.email === email && usuario.password === password
      );

      if (usuarioValido) {
        setUsuario(usuarioValido);
        localStorage.setItem("usuario", JSON.stringify(usuarioValido));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error al validar usuario", error);
      return false;
    }
  };

  const registerWithEmailAndPassword = async (email, password) => {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        setUsuario,
        loginWithEmailAndPassword,
        registerWithEmailAndPassword,
        token,
        setToken,
        activeMenu,
        setActiveMenu: handleMenuChange,
        setActiveMenu: handleMenuCambio,
        showCerrarSesion,
        setShowCerrarSesion,
        MisPublicaciones,
        setMisPublicaciones,
        MisFavoritos,
        setMisFavoritos,
        logout,
        setSortOption,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuariosProvider;

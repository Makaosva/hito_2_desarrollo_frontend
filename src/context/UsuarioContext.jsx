import { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext();

const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialUsuario = JSON.parse(localStorage.getItem("usuario")) || null;

/* const initialStateToken = localStorage.getItem("token") || null; */

const UsuariosProvider = ({ children }) => {
  const initialStateToken = localStorage.getItem("token") || "";
  const [token, setToken] = useState(initialStateToken);
  const [activeMenu, setActiveMenu] = useState(""); // se agrega para el menu lateral
  const [publicaciones, setPublicaciones] = useState([]); // estado para las publicaciones
  const [sortOption, setSortOption] = useState(""); // estado para el sort
  const [showCerrarSesion, setShowCerrarSesion] = useState(false);
  const [usuario, setUsuario] = useState(initialUsuario);
  /* const [favoritos, setFavoritos] = useState([]); */

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  /* const toggleFavorito = (publicacion) => {
    setFavoritos((prev) => {
      const yaEsFavorito = prev.find((fav) => fav.id === publicacion.id);
      if (yaEsFavorito) {
        return prev.filter((fav) => fav.id !== publicacion.id)
      } else {
        return [...prev, publicacion];
      }
    });
  }; */

  const handleMenuChange = (menuName) => {
    setActiveMenu(menuName);
    if (menuName === "Tienda") {
      setShowCerrarSesion(true);
    } else {
      setShowCerrarSesion(false);
    }
  };

  useEffect(() => {
    let sortedPublicaciones = [...publicaciones];
    if (sortOption === "name-asc") {
      sortedPublicaciones.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (sortOption === "name-desc") {
      sortedPublicaciones.sort((a, b) => b.titulo.localeCompare(a.titulo));
    }
    setPublicaciones(sortedPublicaciones);
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
        /*  favoritos,
        toggleFavorito, */
        loginWithEmailAndPassword,
        registerWithEmailAndPassword,
        token,
        setToken,
        activeMenu,
        setActiveMenu: handleMenuChange,
        showCerrarSesion,
        setShowCerrarSesion,
        publicaciones,
        setPublicaciones,
        logout,
        setSortOption,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuariosProvider;

import { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext();

const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialStateToken = localStorage.getItem("token") || null;

const UsuariosProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  const [activeMenu, setActiveMenu] = useState(""); // se agrega para el menu lateral
  const [publicaciones, setPublicaciones] = useState([]); // estado para las publicaciones
  const [sortOption, setSortOption] = useState(""); // estado para el sort
  const [showCerrarSesion, setShowCerrarSesion] = useState(false);

  const handleMenuChange = (menuName) => {
    setActiveMenu(menuName);
    if (menuName === "Tienda") {
      setShowCerrarSesion(true);
    } else {
      setShowCerrarSesion(false);
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

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
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    console.log("response-->", response);

    const data = await response.json();
    setToken(data.token || null);

    return data;
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

  const logout = () => {
    setToken(null);
  };

  return (
    <UsuarioContext.Provider
      value={{
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

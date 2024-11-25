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
  const [usuarios, setUsuarios] = useState([]);

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

  const getUsuario = async () => {
    const res = await fetch("/usuario.json");
    const data = res.json();
    setUsuarios(data);
  };

  console.log("usuarios en Context-->", usuarios);

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
        getUsuario,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuariosProvider;

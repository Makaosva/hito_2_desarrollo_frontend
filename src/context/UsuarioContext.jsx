import { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext();

const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialStateToken = localStorage.getItem("token") || null;

const UsuariosProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  const [activeMenu, setActiveMenu] = useState(""); // se agrega para el menu lateral

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const loginWithEmailAndPassword = async (email, password) => {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

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
        setActiveMenu,
        logout,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuariosProvider;

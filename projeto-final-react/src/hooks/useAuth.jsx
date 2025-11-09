import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerNewUser, updateUser } from "../services/Api.jsx";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);


  const login = async (email, senha) => {
    const user = await loginUser(email, senha);
    if (!user) throw new Error("Email ou senha incorretos");
    setUsuario(user);
    localStorage.setItem("usuario", JSON.stringify(user));
  };


  const register = async (userData) => {
    const newUser = await registerNewUser(userData);
    setUsuario(newUser);
    localStorage.setItem("usuario", JSON.stringify(newUser));
  };

  
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };


const editar = async (novosDados) => {
  if (!usuario) return;
  const updatedUser = await updateUser(usuario.id, novosDados); 
  setUsuario(updatedUser);
  localStorage.setItem("user", JSON.stringify(updatedUser));
  window.location.reload();
};


  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) setUsuario(JSON.parse(storedUser));
  }, []);

  return (
    <AuthContext.Provider value={{ usuario, login, logout, register, editar }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
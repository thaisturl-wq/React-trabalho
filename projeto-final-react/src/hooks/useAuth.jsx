import { createContext, useState, useEffect, useContext} from "react";
import { loginUser, registerNewUser, updateUser } from "../services/Api.jsx";
import fotoDefault from '../assets/images/images.png';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const login = async (email, senha) => {
    const user = await loginUser(email, senha);
    if (!user) throw new Error("Email ou senha incorretos");

    if (!user.avatar) {
      user.avatar = fotoDefault;
    }

    setUsuario(user);
    localStorage.setItem("usuario", JSON.stringify(user));
  };

  const register = async (userData) => {

    if(!userData.avatar) {
      userData.avatar = fotoDefault;
    }

    const newUser = await registerNewUser(userData);

    if (!newUser.avatar) {
      newUser.avatar = fotoDefault;
    }

    setUsuario(newUser);
    localStorage.setItem("usuario", JSON.stringify(newUser));
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  const editar = async (novosDados) => {
    if (!usuario) return;
    try {
      const updatedUser = await updateUser(usuario.id, novosDados);

      if (!updatedUser.avatar) {
        updatedUser.avatar = fotoDefault;
      }

      setUsuario(updatedUser);
      localStorage.setItem("usuario", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      
      if (!user.avatar) {
        user.avatar = fotoDefault;
      }
      setUsuario(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ usuario, login, logout, register, editar }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
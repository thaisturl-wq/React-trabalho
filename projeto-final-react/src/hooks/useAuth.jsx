
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);


  const login = async (email, senha) => {
    try {
      const response = await fetch( //fetch faz uma requisição HTTP para sua MockAPI buscando o usuário pelo email.
        `https://68dda415d7b591b4b78cfdb5.mockapi.io/askme?email=${encodeURIComponent(email)}` //encodeURIComponent(email) garante que caracteres especiais no email não quebrem a URL.
      );
      if (!response.ok) throw new Error("Erro ao buscar usuário"); //Se a resposta do servidor não for OK - status 200, lança um erro.

      const data = await response.json(); //verifica o status http
      //Se o array retornado estiver vazio, significa que o email não existe na api.

      if (data.length === 0) throw new Error("Usuário não encontrado");

      //Pega o primeiro usuário do array retornado da api.
      const user = data[0];

      if (user.senha !== senha) throw new Error("Senha incorreta");

      setUsuario(user);
      localStorage.setItem("usuario", JSON.stringify(user)); //atualiza e joga no localSrorage
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    }
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ usuario, setUsuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


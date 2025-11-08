import { Route, Routes, BrowserRouter } from "react-router";
import { Perfil } from "../pages/Perfil/index.jsx";
import { Login } from "../pages/Login";
import { AuthProvider } from "../hooks/useAuth.jsx";
import { Ranking } from "../pages/Ranking";
import { Home } from "../pages/Home";
import { Categoria } from "../pages/Categoria";
import { Quiz } from "../pages/Quiz"

export const Routers = () => {
  const PageError = () => {
    return (
      <div>
        <h1>Página não encontrada!</h1>
      </div>
    );
  };
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categoria" element={<Categoria />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

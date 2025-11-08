import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Login } from "../pages/Login";
import { AuthProvider } from "../hooks/useAuth.jsx";
import { Ranking } from "../pages/Ranking";
import { Home } from "../pages/Home";

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
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

import { Route, Routes, BrowserRouter } from 'react-router'
import { Home } from '../pages/Home/home.jsx';
import { Login } from '../pages/Login';
import { AuthProvider } from '../hooks/useAuth.jsx';

export const Routers = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login1' element={<Login />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

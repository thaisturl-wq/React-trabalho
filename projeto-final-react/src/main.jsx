import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routers } from './routes'
import './global.css'
import { AuthProvider} from './hooks/useAuth'

// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>
    <Routers />
    </AuthProvider>
  </StrictMode>,
)

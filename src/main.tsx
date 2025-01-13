import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CivicAuthProvider } from "@civic/auth/react"
import App from './App.tsx'

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CivicAuthProvider clientId={CLIENT_ID}>
      <App />
    </CivicAuthProvider>
  </StrictMode>,
)

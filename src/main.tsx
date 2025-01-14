import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CivicContext from './context/civicContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CivicContext>
      <App />
    </CivicContext>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './estilos.css'
import CinematecaBoliviana from './principal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CinematecaBoliviana></CinematecaBoliviana>
  </StrictMode>,
)

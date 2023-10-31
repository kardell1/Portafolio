import React from 'react'
import ReactDOM from 'react-dom/client'
import RutasPage from './Routes.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./assets/styles/Styles.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RutasPage />
    </BrowserRouter>
  </React.StrictMode>,
)

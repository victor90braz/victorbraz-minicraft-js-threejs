import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'

const elementRoot = document.getElementById('root')
createRoot(elementRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

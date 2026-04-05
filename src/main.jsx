import React from 'react'
import { Toaster } from "react-hot-toast";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
  position="top-center"
  containerStyle={{
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  }}
/>
  </React.StrictMode>,
)

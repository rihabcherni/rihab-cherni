import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'devicon/devicon.min.css';
import ReactGA from "react-ga4";

ReactGA.initialize("G-8L8QX5MLTQ"); 

ReactGA.send("pageview");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

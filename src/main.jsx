import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactGA from "react-ga4";
import appCssUrl from './App.css?url';

ReactGA.initialize("G-8L8QX5MLTQ"); 

ReactGA.send("pageview");

const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = appCssUrl;
cssLink.media = 'print';
cssLink.onload = () => {
  cssLink.media = 'all';
};
document.head.appendChild(cssLink);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

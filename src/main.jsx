import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';
import './index.css';
import App from './App.jsx'

const initAnalytics = () => {
  import("react-ga4").then(({ default: ReactGA }) => {
    ReactGA.initialize("G-8L8QX5MLTQ");
    ReactGA.send("pageview");
  });
};

if ('requestIdleCallback' in window) {
  window.requestIdleCallback(initAnalytics, { timeout: 3000 });
} else {
  window.setTimeout(initAnalytics, 1500);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

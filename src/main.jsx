import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import appCssUrl from './App.css?url';

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

// src/Analytics.js
import { useEffect } from "react";
import ReactGA from "react-ga4";

const GA_ID = "G-8L8QX5MLTQ"; // ton ID GA

ReactGA.initialize(GA_ID);

const Analytics = ({ activeSection }) => {
  useEffect(() => {
    if (activeSection) {
      ReactGA.send({
        hitType: "pageview",
        page: `/${activeSection}`, 
      });
    }
  }, [activeSection]);

  return null;
};

export default Analytics;

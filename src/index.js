import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import router
import { BrowserRouter as Router } from "react-router-dom";

//import services context proviter
import ServicesContextProvider from "./modules/core/components/molecules/ServicesContext/ServicesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ServicesContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ServicesContextProvider>
);

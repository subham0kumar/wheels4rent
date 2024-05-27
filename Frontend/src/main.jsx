import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import VehicleContext from "./Context/VehicleContext.jsx";
import TeamContext from "./Context/TeamContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <VehicleContext>
        <TeamContext>
          <App />
        </TeamContext>
      </VehicleContext>
    </BrowserRouter>
  </React.StrictMode>
);

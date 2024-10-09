import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import VehicleContext from "./Context/VehicleContext.jsx";
import TeamContext from "./Context/TeamContext.jsx";
import AuthContext from "./Context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <VehicleContext>
          <TeamContext>
            <App />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition:Zoom
            />
          </TeamContext>
        </VehicleContext>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);

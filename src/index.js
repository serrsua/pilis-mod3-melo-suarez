import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CardContextProvider } from "./contexts/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CardContextProvider>
        <App />
      </CardContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Configure application to run underneath a specific basename in the URL by using basename="/magic-8-ball" in BrowserRouter

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

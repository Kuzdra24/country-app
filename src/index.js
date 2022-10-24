import React from "react";
import ReactDOM from "react-dom/client";
import APIContextProvider from "./context/context";
import App from "./view/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </React.StrictMode>
);

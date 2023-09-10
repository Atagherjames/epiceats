import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { DataStore } from "./components/dataStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataStore>
      <App />
    </DataStore>
  </React.StrictMode>
);

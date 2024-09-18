import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./FirstApp";
import { AnotherApp } from "./app.component";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <AnotherApp />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
// import { AnotherApp } from "./app.component";
import './styles/index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp title="Hola, soy Goku!" subtitle={123} />
    {/* <AnotherApp /> */}
  </React.StrictMode>
);

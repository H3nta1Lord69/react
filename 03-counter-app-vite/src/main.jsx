import React from "react";
import ReactDOM from "react-dom/client";
// import { FirstApp } from "./FirstApp";
// import { AnotherApp } from "./app.component";
import './styles/index.css'
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp title="Hola, soy Goku!" subTitle={123456} /> */}
    {/* <AnotherApp /> */}
    <CounterApp value={123}/>
  </React.StrictMode>
);

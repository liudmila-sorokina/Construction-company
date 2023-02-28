import React from "react";
import ReactDOM from "react-dom";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import App from "./components/App";
import "./scss/style.scss";

const el = document.getElementById("app");

ReactDOM.render(<App />, el)

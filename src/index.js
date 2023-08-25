import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import "@formspree/react"

import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

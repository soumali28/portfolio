import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import "../node_modules/normalize.css";
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

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "./context";

ReactDOM.render(
  <HashRouter>
    <Provider>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);

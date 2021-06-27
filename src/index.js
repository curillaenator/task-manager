import React from "react";
import ReactDOM from "react-dom";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import { App } from "./App/App";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";

import App from "@src/App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter  } from "react-router-dom";

import store from "./App/store/slices";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <HashRouter >
      <App />
    </HashRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

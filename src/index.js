import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getToken } from "./AuthService";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

axios.interceptors.request.use(
  function (config) {
    console.log(getToken());
    config.headers["Authorization"] = getToken();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
root.render(
  <>
    <App />
  </>
);

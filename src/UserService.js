import { getToken } from "./AuthService";

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.headers["Authorization"] = getToken();
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
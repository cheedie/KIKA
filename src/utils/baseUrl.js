import axios from "axios";
import { url } from "./constant";
import createToken from "./createToken";
export const baseUrl = axios.create({
  baseURL: url,

  headers: {
    Authorization: `Bearer ${createToken()}`,
  },
});

baseUrl.interceptors.request.use(function (config) {
  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${createToken()}`;
  }
  return config;
});

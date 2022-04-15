import axios from "axios";
import { url } from "./constant";
import createToken from "./createToken";
export const baseUrl = axios.create({
  baseURL: url,

  headers: {
    Authorization: `Bearer ${createToken()}`,
  },
});

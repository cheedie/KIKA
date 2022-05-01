import axios from "axios";
import { url } from "./constant";
import createToken from "./createToken";

const token = createToken().token
export const baseUrl = axios.create({
  baseURL: url,

  headers: {
    Authorization: `Bearer ${token}`,
  },
});

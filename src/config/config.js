import axios from "axios";

let server = import.meta.env.VITE_API;
const username = import.meta.env.VITE_USERNAME;
const password = import.meta.env.VITE_PASSWORD;

export const api = axios.create({
  baseURL: `${server}`,
  timeout: 30 * 60 * 1000,
  auth: {
    auth: {
      username: username,
      password: password,
    },
  },
});

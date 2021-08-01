import axios from "axios";

export const $axios = axios.create({
  // Base URL
  baseURL: "http://127.0.0.1:8000/api/",
  // baseURL: "https://premio-backend.herokuapp.com/",

  // Custom Headers
  headers: {
    "Content-Type": "application/json",
  },
});

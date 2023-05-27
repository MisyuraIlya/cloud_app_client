import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "http://localhost:4000";

axios.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = Cookies.get('token')

    config.headers.Authorization = "Bearer " + token;
  }

  return config;
});

export default axios;
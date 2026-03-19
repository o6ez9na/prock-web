import axios from "axios";
import { toaster } from "../components/ui/toaster";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_HOST || "http://localhost:8081",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/sign-in") &&
      !originalRequest.url.includes("/auth/sign-up") &&
      !originalRequest.url.includes("/auth/me/")
    ) {
      originalRequest._retry = true;

      try {
        const response = await API.post("/auth/refresh/", {
          refresh_token: localStorage.getItem("refreshToken"),
        });
        localStorage.setItem("authToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);

        originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
        return API(originalRequest);
      } catch (err) {
        console.error("Ошибка обновления токена:", err);
        localStorage.removeItem("authToken");

        window.location.href = "/auth";

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

class APIService {
  async auth(config = { username, password }) {
    try {
      const response = await API.post("/auth/sign-in", {
        email: config.username,
        password: config.password,
      });

      if (response.status == 200) {
        toaster.create({
          title: "Успешный вход!",
          description: "Вы успешно вошли в свой аккаунт.",
          type: "success",
          closable: true,
        });
      }
      return response;
    } catch (error) {
      if (error.status == 401) {
        toaster.create({
          title: "Ошибка входа!",
          description: "Неверное имя пользователя или пароль.",
          type: "error",
          closable: true,
        });
      }
    }
  }

  setAuthToken(token) {
    API.defaults.headers.Authorization = `Bearer ${token}`;
  }

  async getStats() {
    return await API.get("/system/stats");
  }

  async getNetwork() {
    return await API.get("/system/network");
  }

  async getMe() {
    return await API.get("/auth/me/");
  }
}

export default APIService = new APIService();

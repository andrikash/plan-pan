// src/api/custom-instance.ts
import axios, { AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = axios.create({
  baseURL: process.env.BASE_URL,
});

// Add token to headers for each request
AXIOS_INSTANCE.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// A wrapper for Orval's mutator to use the custom Axios instance
export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const mergedConfig = {
    ...config,
    ...options,
  };

  return AXIOS_INSTANCE(mergedConfig).then((response) => response.data);
};

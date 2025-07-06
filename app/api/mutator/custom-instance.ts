import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const AXIOS_INSTANCE = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Add token to headers for each request
AXIOS_INSTANCE.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Return the whole AxiosResponse<T>
export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const mergedConfig = {
    ...config,
    ...options,
  };

  return AXIOS_INSTANCE(mergedConfig);
};

// Error & body helpers
export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;

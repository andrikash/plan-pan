import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getCurrentLanguage, isTokenExpired } from "./helper";
import { protectedRoutes } from "~/const/protected-routes";

export const AXIOS_INSTANCE = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Add token to headers for each request
AXIOS_INSTANCE.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      if (isTokenExpired(token)) {
        localStorage.removeItem("token"); // Remove token from local storage
        const currentLang = getCurrentLanguage();

        window.location.href = `/${currentLang}/auth/login`; // Redirect to login page
        return Promise.reject(new Error("Token expired")); // Reject the promise to stop the request
      }

      config.headers.Authorization = `Bearer ${token}`; // If token is not expired, add it to the headers
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AXIOS_INSTANCE.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      const currentLang = getCurrentLanguage();

      const isProtected = protectedRoutes.some((route) =>
        window.location.pathname.includes(route)
      );

      // remove token and redirect to login page if not on login page and on protected route,
      // because unprotected routes should be accessible always without token
      if (!window.location.pathname.includes("/auth/") && isProtected) {
        localStorage.removeItem("token");
        window.location.href = `/${currentLang}/auth/login`;
      }
    }

    return Promise.reject(error);
  }
);

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

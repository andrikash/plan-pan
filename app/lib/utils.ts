import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Locales } from "~/const/constants";
import { AuthResponseUser } from "~/types/api/authResponseUser";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLanguageSegmentFromUrl(url: URL): Locales {
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const langageSegment = pathSegments[0] as Locales;

  return langageSegment;
}

export function getIsAdmin(user: AuthResponseUser) {
  return user.role === "admin";
}

export function isUser(user: AuthResponseUser) {
  return user.role === "user";
}

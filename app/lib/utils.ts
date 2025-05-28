import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Locales } from "~/const/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLanguageSegmentFromUrl(url: URL): Locales {
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const langageSegment = pathSegments[0] as Locales;

  return langageSegment;
}

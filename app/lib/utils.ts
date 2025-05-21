import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLanguageSegmentFromUrl(url: URL) {
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const langageSegment = pathSegments[0];

  return langageSegment;
}

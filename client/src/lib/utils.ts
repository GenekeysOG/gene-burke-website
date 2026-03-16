import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Public asset URL (works with GitHub Pages base path, e.g. /repo-name/). */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const p = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${p}`;
}

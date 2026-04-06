import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ImageMetadata } from "astro";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageSrc(img: string | ImageMetadata | null | undefined): string {
  if (!img) return "";
  if (typeof img === "string") return img;
  return img.src;
}

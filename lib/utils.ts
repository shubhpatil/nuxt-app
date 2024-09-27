import { clsx, type ClassValue } from "clsx";
import { twMerge as twMerger } from "tailwind-merge";

export function twMerge(...inputs: ClassValue[]) {
  return twMerger(clsx(inputs));
}

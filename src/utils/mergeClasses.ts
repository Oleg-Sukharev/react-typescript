import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const mc = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(...inputs));
};

export default mc;

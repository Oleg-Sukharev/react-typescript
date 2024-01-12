import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const mc = (...inputs) => {
  return twMerge(clsx(inputs));
};

export default mc;

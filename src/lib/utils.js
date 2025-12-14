import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function formatFollowers(count) {
  if (typeof count !== "number") return String(count ?? "");
  if (count >= 1_000_000)
    return `${(count / 1_000_000).toFixed(1).replace(/\\.0$/, "")}M`;
  if (count >= 1_000)
    return `${(count / 1_000).toFixed(1).replace(/\\.0$/, "")}K`;
  return String(count);
}

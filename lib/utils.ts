import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import slugify from "slugify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugified(term: string) {
  return slugify(term, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: true,
    locale: "en",
    trim: true,
  });
}

export function unslugified(slug: string) {
  const unslugged = slug.replace(/[-_]/g, " ");
  return unslugged.charAt(0).toUpperCase() + unslugged.substring(1);
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const formatPrice = (price: number) => {
  // const hasDecimals = price % 1 !== 0;

  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencySign: "standard",
  }).format(price);
};

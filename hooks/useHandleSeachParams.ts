"use client";

import { slugified } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useHandleSearchParams() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const createSearchParamsURL = (term: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(slugified(term), slugified(value));
    return `${pathname}?${params.toString()}`;
  };

  const changeSearchParamsURL = (term: string, value: string) => {
    push(createSearchParamsURL(term, value));
  };

  const getSearchParamsValue = (term: string) => {
    return searchParams.get(slugified(term));
  };

  return {
    changeSearchParamsURL,
    getSearchParamsValue,
  };
}

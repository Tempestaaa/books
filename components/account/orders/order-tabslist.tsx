"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHandleSearchParams } from "@/hooks/useHandleSeachParams";

type Props = {
  tabValues: {
    label: string;
    value: string;
  }[];
  value: string;
};

export default function OrderTabslist({ tabValues, value }: Props) {
  const { changeSearchParamsURL } = useHandleSearchParams();

  return (
    <TabsList className="w-full">
      {tabValues.map((item) => (
        <TabsTrigger
          key={item.value}
          value={item.value}
          onClick={() => changeSearchParamsURL("tab", item.value)}
        >
          {item.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}

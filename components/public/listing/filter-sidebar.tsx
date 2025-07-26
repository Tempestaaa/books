"use client";

import AvailabilityFilter from "@/components/public/listing/availability-filter";
import Collections from "@/components/public/listing/collections";
import FilterHeader from "@/components/public/listing/filter-header";
import FormatFilter from "@/components/public/listing/format-filter";
import GenreFilter from "@/components/public/listing/genre-filter";
import PriceFilter from "@/components/public/listing/price-filter";
import { Accordion } from "@/components/ui/accordion";
import { useState } from "react";

export default function FilterSidebar() {
  const [isMinimize, setIsMinimize] = useState(false);

  return (
    <aside
      className={`min-h-[calc(100dvh-5rem)] transition-all duration-300 hidden md:block ${
        isMinimize ? "w-12" : "w-xs "
      }`}
    >
      <FilterHeader isMinimize={isMinimize} setIsMinimize={setIsMinimize} />
      {!isMinimize && (
        <Accordion type="multiple">
          <Collections />
          <GenreFilter />
          <PriceFilter />
          <FormatFilter />
          <AvailabilityFilter />
        </Accordion>
      )}
    </aside>
  );
}

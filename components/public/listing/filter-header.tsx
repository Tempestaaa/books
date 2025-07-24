"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftFromLineIcon } from "lucide-react";

type Props = {
  isMinimize: boolean;
  setIsMinimize: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FilterHeader({ isMinimize, setIsMinimize }: Props) {
  return (
    <section className="flex-center gap-4 justify-between pr-2 py-2 border-b-2 border-muted">
      <header hidden={isMinimize} className="text-subheading">
        Filters
      </header>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMinimize(!isMinimize)}
        className="text-muted-foreground hover:text-foreground duration-300"
      >
        <ArrowLeftFromLineIcon
          className={`${isMinimize && "rotate-180"} duration-300`}
        />
      </Button>
    </section>
  );
}

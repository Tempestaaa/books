import BookListing from "@/components/public/listing/book-listing";
import LayoutButtons from "@/components/public/listing/layout-buttons";
import { DynamicBreadcrumb } from "@/components/ui/dynamic-breadcrumb";
import { Input } from "@/components/ui/input";
import Pagination from "@/components/ui/pagination";
import { unslugified } from "@/lib/utils";
import { iBreadcrumb } from "@/types/common.type";
import { SearchIcon } from "lucide-react";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const breadcrumbs: iBreadcrumb[] = [
    { label: "Home", href: "/" },
    { label: "Search" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <DynamicBreadcrumb items={breadcrumbs} />

      <section className="flex-center gap-4 justify-between">
        <header className="text-3xl font-bold">
          {q ? unslugified(q) : "Search"}
        </header>

        <div className="flex-center gap-4">
          <div className="flex-center flex-row-reverse gap-2 border-b-2 border-muted has-[:focus]:border-foreground duration-300">
            <Input
              placeholder="Search for book..."
              className="no-border-input w-60 focus:w-xs transition-[width] duration-300"
            />
            <SearchIcon className="size-3.5" />
          </div>

          <LayoutButtons />
        </div>
      </section>

      <section className="space-y-8 mt-4">
        <BookListing />
        <Pagination />
      </section>
    </div>
  );
}

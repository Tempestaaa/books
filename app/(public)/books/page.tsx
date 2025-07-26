import BookListing from "@/components/public/listing/book-listing";
import FilterSidebar from "@/components/public/listing/filter-sidebar";
import ListingHeader from "@/components/public/listing/listing-header";
import { DynamicBreadcrumb } from "@/components/ui/dynamic-breadcrumb";
import Pagination from "@/components/ui/pagination";
import { iBreadcrumb } from "@/types/common.type";

export default function BookListingPage() {
  const breadcrumbs: iBreadcrumb[] = [
    { label: "Home", href: "/" },
    { label: "Browsing books" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 divide-x-2 !py-0">
      <FilterSidebar />

      <div className="flex-1 py-4 space-y-4">
        <DynamicBreadcrumb items={breadcrumbs} />
        <div className="flex flex-col gap-8">
          <ListingHeader />
          <BookListing />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

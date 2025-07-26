import BookDetails from "@/components/public/detail/book-details";
import { DynamicBreadcrumb } from "@/components/ui/dynamic-breadcrumb";
import { iBreadcrumb } from "@/types/common.type";

export default function RightSection() {
  const breadcrumbs: iBreadcrumb[] = [
    { label: "Home", href: "/" },
    { label: "Browsing books", href: "/books" },
    { label: "Book title" },
  ];

  return (
    <section className="flex-1 min-h-[calc(100dvh-5rem)] md:p-4 space-y-4">
      <div className="hidden md:block">
        <DynamicBreadcrumb items={breadcrumbs} />
      </div>
      <BookDetails />
    </section>
  );
}

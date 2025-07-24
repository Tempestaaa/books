import GenreCard from "@/components/public/genres/genre-card";
import { DynamicBreadcrumb } from "@/components/ui/dynamic-breadcrumb";
import genres from "@/data/genres";
import { iBreadcrumb } from "@/types/common.type";

export default function GenresPage() {
  const breadcrumbs: iBreadcrumb[] = [
    { label: "Home", href: "/" },
    { label: "Genre list" },
  ];

  return (
    <article className="space-y-4">
      <DynamicBreadcrumb items={breadcrumbs} />

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4">
        {genres.map((item) => (
          <GenreCard key={item.name} genre={item} />
        ))}
      </ul>
    </article>
  );
}

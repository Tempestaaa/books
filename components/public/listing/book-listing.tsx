import BookCard from "@/components/public/shared/book-card";

export default function BookListing() {
  return (
    <ul className="flex-1 grid grid-cols-[repeat(auto-fill,minmax(14.5rem,1fr))] gap-8">
      {[...Array(12)].map((_, id) => (
        <BookCard key={id} />
      ))}
    </ul>
  );
}

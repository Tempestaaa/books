import LeftSection from "@/components/public/detail/left-section";
import RelatedBooks from "@/components/public/detail/related-books";
import RightSection from "@/components/public/detail/right-section";

export default function BookDetailPage() {
  return (
    <div className="!py-0">
      <div className="flex flex-col md:flex-row *:py-4 border-b-2 border-muted">
        <LeftSection />
        <RightSection />
      </div>

      <RelatedBooks />
    </div>
  );
}

import WishlistItem from "@/components/account/wishlist/wishlist-item";
import Pagination from "@/components/ui/pagination";

export default function WishlistList() {
  return (
    <div className="space-y-4">
      <ul className="grid grid-cols-2 gap-4">
        {Array.from({ length: 12 }).map((_, id) => (
          <WishlistItem key={id} />
        ))}
      </ul>

      <Pagination />
    </div>
  );
}

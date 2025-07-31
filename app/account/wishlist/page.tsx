import WishlistList from "@/components/account/wishlist/wishlist-list";
import WishlistToolbar from "@/components/account/wishlist/wishlist-toolbar";

export default function WishlistPage() {
  return (
    <div className="flex flex-col gap-4">
      <WishlistToolbar />
      <WishlistList />
    </div>
  );
}

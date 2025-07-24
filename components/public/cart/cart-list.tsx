import CartItem from "@/components/public/cart/cart-item";

export default function xCartList() {
  return (
    <ul className="flex-1 rounded-2xl border-2 border-muted px-4 divide-y-2">
      {[...Array(2)].map((_, id) => (
        <CartItem key={id} />
      ))}
    </ul>
  );
}

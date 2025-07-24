import CartList from "@/components/public/cart/cart-list";
import CartTotal from "@/components/public/cart/cart-total";
import RelatedBooks from "@/components/public/detail/related-books";
import { DynamicBreadcrumb } from "@/components/ui/dynamic-breadcrumb";
import { iBreadcrumb } from "@/types/common.type";

export default function CartPage() {
  const breadcrumbs: iBreadcrumb[] = [
    { label: "Home", href: "/" },
    { label: "My cart" },
  ];

  return (
    <div className="flex flex-col gap-4 min-h-[calc(100dvh-5rem)]">
      <DynamicBreadcrumb items={breadcrumbs} />
      <header className="text-3xl font-bold">Shopping Cart</header>

      <section className="flex gap-8 mt-4">
        <CartList />
        <CartTotal />
      </section>

      <RelatedBooks />
    </div>
  );
}

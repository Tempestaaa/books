import CheckoutForm from "@/components/public/checkout/checkout-form";
import ReviewCart from "@/components/public/checkout/review-cart";
import { DynamicBreadcrumb } from "@/components/ui/dynamic-breadcrumb";
import { iBreadcrumb } from "@/types/common.type";

export default function CheckoutPage() {
  const breadcrumbs: iBreadcrumb[] = [
    { label: "Home", href: "/" },
    { label: "My cart", href: "/cart" },
    { label: "Checkout" },
  ];

  return (
    <div className="flex flex-col gap-4 min-h-[calc(100dvh-5rem)]">
      <DynamicBreadcrumb items={breadcrumbs} />
      <header className="text-3xl font-bold">Checkout</header>

      <section className="mt-4 flex flex-col-reverse lg:flex-row gap-16">
        <CheckoutForm />
        <ReviewCart />
      </section>
    </div>
  );
}

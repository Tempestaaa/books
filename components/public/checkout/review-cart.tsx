import TotalItem from "@/components/public/cart/total-item";
import CheckoutReviewItem from "@/components/public/checkout/checkout-review-item";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function ReviewCart() {
  return (
    <aside className="w-full lg:w-xs flex flex-col gap-6">
      <header className="text-xl font-bold">Review your cart</header>
      <ScrollArea className="h-56">
        <ul className="flex flex-col gap-4">
          {[...Array(4)].map((_, id) => (
            <CheckoutReviewItem key={id} />
          ))}
        </ul>

        <ScrollBar />
      </ScrollArea>

      <section className="mt-4 flex flex-col gap-2">
        <TotalItem label="Subtotal" price={10} />
        <TotalItem label="Discount (20%)" price={-2} />
        <TotalItem label="Delivery Fee" price={3} />
        <Separator className="my-2" />
        <TotalItem label="Total" price={11} size="lg" />
      </section>
    </aside>
  );
}

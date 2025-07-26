import Coupon from "@/components/public/cart/coupon";
import TotalItem from "@/components/public/cart/total-item";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function CartTotal() {
  return (
    <aside className="md:w-xs rounded-2xl border-2 border-muted p-4 h-fit">
      <header className="text-xl font-bold">Order Summary</header>
      <section className="mt-4 flex flex-col gap-2">
        <TotalItem label="Subtotal" price={10} />
        <TotalItem label="Discount (20%)" price={-2} />
        <TotalItem label="Delivery Fee" price={3} />
        <Separator className="my-2" />
        <TotalItem label="Total" price={11} size="lg" />

        <Coupon />
        <Button className="rounded-full" asChild>
          <Link href="/cart/checkout">
            <span>Checkout</span>
            <ArrowRightIcon />
          </Link>
        </Button>
      </section>
    </aside>
  );
}

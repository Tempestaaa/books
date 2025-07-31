import { Badge } from "@/components/ui/badge";
import { formatDate, formatPrice } from "@/lib/utils";

export default function OrderItem() {
  return (
    <li className="outline-1 outline-transparent hover:outline-muted-foreground duration-300 rounded-md p-4 space-y-2">
      <section className="flex gap-4">
        <div className="h-20 w-16 bg-muted rounded-md" />
        <div className="flex flex-col flex-1">
          <p className="font-bold">Book&apos;s title</p>
          <p className="text-muted-foreground">by Author name</p>
          <div className="mt-auto flex-center justify-between">
            <p className="text-muted-foreground font-normal">x1</p>
            <div className="flex-center gap-4">
              <s className="text-muted-foreground text-xs">{formatPrice(15)}</s>
              <span className="font-medium">{formatPrice(10)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-center gap-4 justify-between">
        <p className="text-muted-foreground text-xs">
          Purchased at {formatDate(new Date())}
          <span className="ml-2">
            <Badge>Completed</Badge>
          </span>
        </p>
        <div className="flex-center gap-4 text-xl font-bold">
          <span className="text-muted-foreground text-sm font-normal">
            Total:
          </span>{" "}
          {formatPrice(10)}
        </div>
      </section>
    </li>
  );
}

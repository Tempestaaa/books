import OrderItem from "@/components/account/orders/order-item";
import Pagination from "@/components/ui/pagination";

export default function OrderList() {
  return (
    <div className="space-y-4">
      <ul className="flex flex-col gap-4 my-4">
        {[...Array(4)].map((_, id) => (
          <OrderItem key={id} />
        ))}
      </ul>

      <Pagination />
    </div>
  );
}

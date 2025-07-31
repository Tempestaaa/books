import OrderTabs from "@/components/account/orders/order-tabs";

type Props = {
  searchParams: Promise<{ tab?: string }>;
};

export default async function OrdersPage({ searchParams }: Props) {
  const { tab } = await searchParams;

  return (
    <div>
      <OrderTabs tab={tab ? tab : "0"} />
    </div>
  );
}

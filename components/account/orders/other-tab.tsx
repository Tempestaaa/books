import OrderList from "@/components/account/orders/order-list";
import { TabsContent } from "@/components/ui/tabs";

type Props = {
  tabValues: {
    label: string;
    value: string;
  }[];
  value: string;
};

export default function OtherTab({ tabValues, value }: Props) {
  const activeTab = tabValues.find((item) => item.value === value);

  if (!activeTab) return <div className="grid-center">Error</div>;

  return (
    <TabsContent value={activeTab.value}>
      <OrderList />
    </TabsContent>
  );
}

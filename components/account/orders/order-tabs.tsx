import AllTab from "@/components/account/orders/all-tab";
import OrderTabslist from "@/components/account/orders/order-tabslist";
import OtherTab from "@/components/account/orders/other-tab";
import { Tabs } from "@/components/ui/tabs";

type Props = {
  tab: string;
};

export default function OrderTabs({ tab }: Props) {
  const tabValues = [
    { label: "All", value: "0" },
    { label: "To pay", value: "1" },
    { label: "To deliver", value: "2" },
    { label: "To receive", value: "3" },
    { label: "Completed", value: "4" },
    { label: "Cancelled", value: "5" },
    { label: "Refund", value: "6" },
  ];

  return (
    <Tabs defaultValue={tab}>
      <OrderTabslist tabValues={tabValues} value={tab} />
      <AllTab />
      {Number(tab) !== 0 && <OtherTab tabValues={tabValues} value={tab} />}
    </Tabs>
  );
}

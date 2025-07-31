import OrderList from "@/components/account/orders/order-list";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { SearchIcon } from "lucide-react";

export default function AllTab() {
  return (
    <TabsContent value="0">
      <div className="flex-center gap-4 border-b-2 has-[:focus]:border-muted-foreground duration-300">
        <SearchIcon className="size-4" />
        <Input
          placeholder="Search for order ID, book's title"
          className="no-border-input"
        />
      </div>

      <OrderList />
    </TabsContent>
  );
}

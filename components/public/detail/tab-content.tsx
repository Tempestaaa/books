import InformationRow from "@/components/public/detail/information-row";
import { TabsContent } from "@/components/ui/tabs";

export default function TabContent() {
  return (
    <TabsContent value="details">
      <InformationRow label="Original title" content="Book original title" />
      <InformationRow label="Format" content="200 pages, Hardcover" />
      <InformationRow
        label="Published"
        content="June 9, 1998 by VIZ Media LLC"
      />
      <InformationRow label="ISBN" content="9781591167532" />
      <InformationRow label="Language" content="English" />
    </TabsContent>
  );
}

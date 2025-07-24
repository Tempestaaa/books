import LayoutButtons from "@/components/public/listing/layout-buttons";

export default function ListingHeader() {
  return (
    <header className="flex-center gap-4 justify-between">
      <div className="text-muted-foreground text-xl font-medium">
        Showing <span className="text-foreground">&quot;120 results&quot;</span>{" "}
        from total <span className="text-foreground">200</span>
      </div>

      <LayoutButtons />
    </header>
  );
}

export default function CheckoutReviewItem() {
  return (
    <div className="flex gap-4">
      <section className="h-24 w-16 bg-muted rounded-md" />

      <section className="flex-1 flex flex-col">
        <div className="flex flex-col">
          <p className="text-base font-bold">Book title</p>
          <p className="text-muted-foreground text-xs">by Author name</p>
        </div>

        <div className="flex-center gap-2 mt-auto">
          <div className="font-bold text-base">$10.00</div>
          <p className="text-muted-foreground text-xs">x1</p>
        </div>
      </section>
    </div>
  );
}

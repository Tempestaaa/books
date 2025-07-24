import { formatPrice } from "@/lib/utils";

type Props = {
  label: string;
  price: number;
  size?: "default" | "lg";
};

export default function TotalItem({ label, price, size }: Props) {
  return (
    <div className="flex-center gap-4 justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={`font-bold ${size === "lg" && "text-xl"}`}>
        {formatPrice(price)}
      </span>
    </div>
  );
}

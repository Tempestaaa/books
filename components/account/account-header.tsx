import { Separator } from "@/components/ui/separator";

type Props = {
  label: string;
  desc: string;
};

export default function AccountHeader({ label, desc }: Props) {
  return (
    <>
      <header className="flex flex-col gap-2">
        <p className="text-3xl font-bold">{label}</p>
        <p className="text-muted-foreground">{desc}</p>
      </header>

      <Separator className="my-4" />
    </>
  );
}

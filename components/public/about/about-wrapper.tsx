import { cn } from "@/lib/utils";

type Props = {
  header: string;
  children: React.ReactNode;
  className?: string;
};

export default function AboutWrapper({ header, children, className }: Props) {
  return (
    <article className={cn("flex flex-col gap-4 rounded-2xl py-12", className)}>
      <header className="text-3xl font-bold text-center">{header}</header>
      <>{children}</>
    </article>
  );
}

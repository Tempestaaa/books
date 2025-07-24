import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  value: string;
  children: React.ReactNode;
};

export default function AccordionWrapper({ value, children }: Props) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="pr-4 capitalize">{value}</AccordionTrigger>

      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
}

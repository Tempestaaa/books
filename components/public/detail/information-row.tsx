type Props = {
  label: string;
  content: string;
};

export default function InformationRow({ label, content }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-[10rem_1fr] gap-8 py-1.5 px-2 hover:bg-muted duration-300 rounded-md ">
      <span className="font-bold">{label}</span>
      <span className="text-muted-foreground">{content}</span>
    </div>
  );
}

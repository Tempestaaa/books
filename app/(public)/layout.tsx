export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-20 container mx-auto *:py-4">{children}</div>;
}

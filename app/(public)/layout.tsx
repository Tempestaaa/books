import Footer from "@/components/public/shared/footer";
import Navbar from "@/components/public/shared/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />
      <main className="pt-20 container mx-auto *:py-4">{children}</main>
      <Footer />
    </div>
  );
}

import AccountSidebar from "@/components/account/account-sidebar";
import Footer from "@/components/public/shared/footer";
import Navbar from "@/components/public/shared/navbar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />
      <main className="pt-20 container mx-auto divide-x-2 flex *:py-4">
        <AccountSidebar />
        <div className="px-4 flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

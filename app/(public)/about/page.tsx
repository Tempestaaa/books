import AboutUsSection from "@/components/public/about/about-us-section";
import OurMissionSection from "@/components/public/about/our-mission-section";
import ThankYouSection from "@/components/public/about/thank-you-section";
import ValuesSection from "@/components/public/about/values-section";
import { DynamicBreadcrumb } from "@/components/ui/dynamic-breadcrumb";
import { Separator } from "@/components/ui/separator";
import { iBreadcrumb } from "@/types/common.type";

export default function AboutPage() {
  const breadcrumbs: iBreadcrumb[] = [
    { label: "Home", href: "/" },
    { label: "About us" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <DynamicBreadcrumb items={breadcrumbs} />

      <section className="flex flex-col">
        <div className="bg-[url('/images/about-us.jpg')] bg-center bg-no-repeat bg-cover h-80 rounded-2xl shadow-xs shadow-foreground" />
        <AboutUsSection />
        <Separator className="md:!w-xs mx-auto" />
        <OurMissionSection />
        <Separator className="md:!w-xs mx-auto" />
        <ValuesSection />
        <Separator className="md:!w-xs mx-auto" />
        <ThankYouSection />
      </section>
    </div>
  );
}

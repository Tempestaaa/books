import HeroCarousel from "@/components/public/home/hero-carousel";
import DetailSection from "@/components/public/home/detail-section";

export default function Hero() {
  // Todo: Later use
  // const [backgroundImage, setBackgroundImage] = useState(
  //   "/images/about-us.jpg"
  // );

  return (
    <section
      className="h-140 rounded-2xl flex flex-col lg:flex-row gap-8 hero-radial"
      // style={{
      //   "--background-image-url": `url('${backgroundImage}')`,
      // }}
    >
      <DetailSection />
      <HeroCarousel />
    </section>
  );
}

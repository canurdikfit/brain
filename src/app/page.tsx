import About from "@/components/About";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main>
      <Banner />
      <Carousel />
      <About />
      <Faq />
    </main>
  );
}

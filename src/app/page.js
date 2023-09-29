import MassageImg from "../../public/imgs/preview/massage.webp";

import About from "@/components/home/about/about";
import HomeHeader from "@/components/home/header";
import Navbar from "@/components/navbar";
import SeparatorImage from "@/components/home/Separator Image";
import Services from "@/components/home/services";
import Reservation from "@/components/home/reservation";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <HomeHeader>
        <Navbar />
      </HomeHeader>
      <About />
      <SeparatorImage img={MassageImg} />
      <Services />
      <Reservation />
      <Contact />
    </main>
  );
}

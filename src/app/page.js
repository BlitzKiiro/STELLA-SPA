import MassageImg from "../../public/imgs/preview/massage.webp";

import About from "@/components/home/about/about";
import HomeHeader from "@/components/home/header";
import Navbar from "@/components/navbar";
import SeparatorImage from "@/components/home/Separator Image";

export default function Home() {
  return (
    <main>
      <HomeHeader>
        <Navbar />
      </HomeHeader>
      <About />
      <SeparatorImage img={MassageImg} />
    </main>
  );
}

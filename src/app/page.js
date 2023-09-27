import About from "@/components/home/about/about";
import HomeHeader from "@/components/home/header";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <HomeHeader>
        <Navbar />
      </HomeHeader>
      <About />
    </main>
  );
}

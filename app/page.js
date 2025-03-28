import Image from "next/image";
import BentoGrid from "@/components/gridSection";
import HomeSection from "@/components/homeSection";
import Header from "@/components/header";
import AboutUs from "@/components/aboutSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
        <Header />     
        <HomeSection />
        <BentoGrid />
        <AboutUs />
        <Footer />
    </main>
  );
}

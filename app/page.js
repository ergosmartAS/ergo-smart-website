import Image from "next/image";
import BentoGrid from "@/components/gridSection";
import HomeSection from "@/components/homeSection";
import Header from "@/components/header";
import AboutUs from "@/components/aboutSection";
import OurProducts from '@/components/ourProducts';
import Footer from "@/components/footer";
import ProductShowcase from "@/components/productShowcase";

export default function Home() {
  return (
    <main>
        <Header />     
        <HomeSection />
        <BentoGrid />
        <ProductShowcase />
        <AboutUs />
        <OurProducts />
        <Footer />
    </main>
  );
}

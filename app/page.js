import Image from "next/image";
import BentoGrid from "@/components/gridSection";
import HomeSection from "@/components/homeSection";
import Header from "@/components/header";
import AboutUs from "@/components/aboutSection";
import OurProducts from '@/components/ourProducts';
import Footer from "@/components/footer";
import ProductShowcase from "@/components/productShowcase";
import HealthSection from "@/components/healthcareSection";

export default function Home() {
  return (
    <main>
        <Header />     
        <HomeSection />
        <BentoGrid />
          <HealthSection />
        <ProductShowcase />
        <AboutUs />
        <div className="bg-[#e8f6cd]">

          <div className="pt-40 " style={{ maxWidth: '1240px', overflow: 'hidden', margin: 'auto' }}>
            <h2 className="text-center text-6xl mb-20 font-bold">Brosjyre</h2>
            <iframe
              src="https://gamma.app/embed/ckjt4kg5brv4u80"
              style={{ width: 'calc(100% + 17px)', height: '1000px', border: 'none' }}
              title="Embedded Content"
              ></iframe>
          </div>
        </div>
        <OurProducts />
        <Footer />
    </main>
  );
}

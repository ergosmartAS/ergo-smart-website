import Image from "next/image";
import BentoGrid from "@/components/gridSection";

export default function Home() {
  return (
    <div>
      <main className=" max-w-sm mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl ">
        <BentoGrid />
      </main>
      
    </div>
  );
}

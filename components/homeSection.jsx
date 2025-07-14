"use client"; // ← mark as client component

import Image from "next/image";
import Link from "next/link";

// Swiper core + React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// (No CSS import here—handled in app/layout.js)

export default function HomeSection() {
  const carouselSlides = [
    {
      src: "/images/large-image-1.png",
      alt: "Stor bilde 1",
      width: 519,
      height: 384,
    },
    {
      src: "/images/large-image-2.png",
      alt: "Stor bilde 2",
      width: 519,
      height: 384,
    },
    {
      src: "/images/large-image-3.png",
      alt: "Stor bilde 3",
      width: 519,
      height: 384,
    },
    // add more as needed
  ];

  return (
    <>
      <div className="h-[92vh] min-h-[800px] flex justify-center items-center mx-3 md:mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl -mt-32 lg:-mt-20">
        <div>
          <h1 className="transition transform hover:scale-110 lg:mt-12">
            En <span className="italic">enklere</span> hverdag.
          </h1>
          <div className="flex justify-center md:gap-8 gap-3 pt-16 md:pt-10 lg:mb-24">
            <div className="pt-20 md:pt-36">
              <div className="-mt-16 sm:-mt-40 ml-4 md:ml-14">
                <Image
                  src={"/images/small-image-top-left.png"}
                  width={189}
                  height={200}
                  quality={100}
                  priority={true}
                  alt={"A small image"}
                  className="transition transform hover:scale-110"
                />
              </div>
              <div className="sm:pt-8 pt-2">
                <Image
                  src={"/images/small-image-left.png"}
                  width={250}
                  height={200}
                  quality={100}
                  priority={true}
                  alt={"A large image"}
                  className="transition transform hover:scale-110"
                />
              </div>
            </div>

            {/* ─── Carousel goes here ─── */}
            <div className="lg:w-[519px] lg:h-[384px] w-[50vw] relative">
              <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      navigation={false}
      pagination={false}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="!h-full !w-full"
    >
      {carouselSlides.map((slide, idx) => (
        <SwiperSlide key={idx} className="!flex !justify-center !items-center">
          <Image
            src={slide.src}
            alt={slide.alt}
            width={slide.width}
            height={slide.height}
            className="transition transform object-cover"
            priority={idx === 0}
          />
        </SwiperSlide>
      ))}
    </Swiper>
            </div>
            {/* ──────────────────────────── */}

            <div className="pt-7 sm:pt-12">
              <div>
                <Image
                  src={"/images/small-image-right.png"}
                  width={189}
                  height={200}
                  alt={"A small image"}
                  quality={100}
                  priority={true}
                  className="transition transform hover:scale-110"
                />
              </div>
              <div className="pt-2 sm:pt-8">
                <Image
                  src={"/images/small-image-bottom-right.png"}
                  width={152}
                  height={212}
                  alt={"A large image"}
                  quality={100}
                  priority={true}
                  className="transition transform hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-40 lg:-mt-56 text-center pb-10 lg:pb-6 md:pt-24 lg:max-w-3xl px-8 text-lg mx-auto max-w-sm text-gray-700">
        <h3>
          Våre ergonomiske kluter er utviklet for å gjøre daglige oppgaver
          enklere. Gjennom innovativ utforming skaper vi en enklere, mer
          effektiv hverdag.
        </h3>
      </div>
      <div className="justify-center flex pb-10">
        <Link href="/kontakt">
          <p className="bg-[#84C318] px-5 py-2.5 rounded-xl mb-10 text-white shadow-xl transition transform hover:scale-105">
            Kontakt oss
          </p>
        </Link>
      </div>
    </>
  );
}

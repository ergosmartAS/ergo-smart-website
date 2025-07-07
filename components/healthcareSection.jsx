import Image from 'next/image'

export default function HealthSection() {
  const imgs = [
    {
      src: '/images/assistedHelpFront.jpg',    // tall portrait
      alt: 'Assistert pleie, forfra',
    },
    {
      src: '/images/assistedHelpRight.jpg',    // horizontal
      alt: 'Assistert pleie, høyre side',
    },
    {
      src: '/images/assistedHelpLeft.jpg',     // horizontal
      alt: 'Assistert pleie, venstre side',
    },
  ]

  return (
    <section className="bg-[#f6ffe5] py-48 px-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 text-center md:text-left gap-8 items-start">
        {/* — TEXT COLUMN — */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enklere pleie og stell for helsepersonell
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Flere av våre ergonomiske, hygieniske kluter er utstyrt med lange håndtak (35 cm på hver side), spesielt utviklet for assistert pleie. Den innovative designløsningen gjør det mulig for helsepersonell å utføre kroppsvask uten å måtte benytte ensidige og gjentagende bevegelser av hånd, noe som reduserer risikoen for belastningsskader i nakke, skuldre, albuer og håndledd.
          </p>
        </div>

        {/* — IMAGE GRID COLUMN — */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
          {/* Tall image spans both rows on sm+ */}
          <div className="sm:row-span-2 overflow-hidden rounded-lg shadow-md">
            <Image
              src={imgs[0].src}
              alt={imgs[0].alt}
              width={600}
              height={900}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Top-right image */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={imgs[1].src}
              alt={imgs[1].alt}
              width={600}
              height={400}
              className="object-cover w-full h-48 sm:h-full"
            />
          </div>

          {/* Bottom-right image */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={imgs[2].src}
              alt={imgs[2].alt}
              width={600}
              height={400}
              className="object-cover w-full h-48 sm:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

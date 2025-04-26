import Image from "next/image"
export default function ProductShowcase () {
    return (
    <div className="min-h-screen bg-[#F6FFE5] pb-12 pt-24">
      <div className="max-w-6xl mx-auto px-4">
        

        {/* Product Description */}
        <div className="mb-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-6">Slik bruker du produktet</h2>
        </div>

        {/* Product Showcase */}
        <div className="md:flex md:flex-row grid grid-cols-2 gap-2 md:gap-8 items-center py-4 md:py-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/IMG_1210.jpg"
                alt="Ryggvask-håndkle bakfra"
                width={200}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/IMG_1228.jpg"
                alt="Ryggvask-håndkle sett fra siden"
                width={200}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          <div className="">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/IMG_1229.jpg"
                alt="Demonstrasjon av ryggvask-håndkle"
                width={200}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/IMG_1230.jpg"
                alt="Ryggvask-håndkle i bruk med assistanse"
                width={200}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mt-12 max-w-2xl mx-auto">
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-[#a4d65e] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                1
              </div>
              <p>
                Plasser håndkleet bak ryggen med den lengste delen over skulderen, slik at du kan holde i begge endene.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#a4d65e] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                2
              </div>
              <p>
                Beveg håndkleet opp og ned langs ryggen med en lett skrubbende bevegelse for å rengjøre hele ryggen
                effektivt.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#a4d65e] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                3
              </div>
              <p>
                For vanskelig tilgjengelige områder, kan du holde i begge endene og bevege håndkleet fra side til side.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#a4d65e] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                4
              </div>
              <p>
                Produktet kan også brukes med assistanse fra en hjelper for personer med svært begrenset bevegelighet.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-12 max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-semibold text-center mb-6">Fordeler</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
              <div className="text-[#a4d65e] flex-shrink-0">✓</div>
              <p>Ergonomisk design som gjør det enkelt å nå hele ryggen</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
              <div className="text-[#a4d65e] flex-shrink-0">✓</div>
              <p>Mykt, absorberende materiale som er skånsomt mot huden</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
              <div className="text-[#a4d65e] flex-shrink-0">✓</div>
              <p>Perfekt for personer med begrenset bevegelighet</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
              <div className="text-[#a4d65e] flex-shrink-0">✓</div>
              <p>Holdbart materiale som tåler hyppig bruk og vask</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}
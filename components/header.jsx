import Image from "next/image"
import Link from "next/link"
export default function Header () {
    return(
        <header className="sticky xl:top-16 md:ml-20 ml-6 mr-6 top-8 md:mr-20 z-30 flex justify-between">
            <Link href={'/'}>
            <div  className="flex gap-2">
                <div className="mt-1 md:mt-2">

                <Image
                src={'/images/colorsCloth.png'}
                width={34}
                height={20}
                
                alt={'A logo'}
                />
                </div>
                <h2 className=" text-4xl font-bold mt-1 sm:mt-2 transform transition hover:scale-105">Ergo Smart</h2>
            </div>
            </Link>
            <Link href={'/kontakt'}>
            <div className="transition transform hover:scale-110 bg-[#84C318] sm:w-14 sm:h-14 h-12 w-12 p-2 rounded-full justify-center flex items-center">
                <Image 
                src={'/images/contact-us.svg'}
                width={26}
                height={26}
                alt={'A contact us image'}
                quality={100}/>
            </div>
            </Link>
        </header>
    )
}
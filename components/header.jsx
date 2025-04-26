import Image from "next/image"
import Link from "next/link"
export default function Header () {
    return(
        <header className="sticky xl:top-16 md:ml-20 ml-6 mr-6 top-8 md:mr-20 z-30 flex justify-between">
            <Link href={'/'}>
                <h2 className=" text-4xl font-bold mt-1 sm:mt-2 transform transition hover:scale-105">Ergo Smart</h2>
            </Link>
            <Link href={'/kontakt'}>
            <div className="transition transform hover:scale-110 bg-[#84C318] w-14 h-14 rounded-full justify-center flex items-center">
                <Image 
                src={'/images/contact-us.svg'}
                width={32}
                height={32}
                alt={'A contact us image'}
                quality={100}/>
            </div>
            </Link>
        </header>
    )
}
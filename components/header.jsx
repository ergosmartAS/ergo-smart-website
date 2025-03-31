import Image from "next/image"

export default function Header () {
    return(
        <header className="sticky xl:top-16 md:ml-20 ml-6 mr-6 top-8 md:mr-20 z-30 flex justify-between">
            <h2 className=" text-4xl font-bold mt-1 sm:mt-2">Ergo Smart</h2>
            <div className="">
                <Image 
                src={'/images/contact-us.svg'}
                width={50}
                height={50}
                alt={'A contact us image'}
                quality={100}/>
            </div>
        </header>
    )
}
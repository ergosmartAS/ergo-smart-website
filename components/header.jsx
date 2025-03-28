import Image from "next/image"

export default function Header () {
    return(
        <header className="sticky top-14 ml-20 mr-20 flex justify-between">
            <h2 className=" text-4xl font-bold">Ergo Smart</h2>
            <div className="">
                <Image 
                src={'/images/contact-us.svg'}
                width={60}
                height={60}
                alt={'A contact us image'}
                quality={100}/>
            </div>
        </header>
    )
}
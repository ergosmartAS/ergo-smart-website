import Image from "next/image"

export default function HomeSection () {
    return (
        <>
        <div className=" h-dvh flex justify-center items-center mx-3 md:mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl ">
            <div>
                <h1 className="transition transform hover:scale-110">En <span className=" italic" >enklere</span> hverdag.</h1>
                <div className="flex justify-center md:gap-8 gap-2 pt-20 md:pt-28 mb-24">
                    <div className=" pt-20 md:pt-36">
                        <div className="-mt-28 sm:-mt-40 ml-14">
                            <Image 
                            src={'/images/small-image-top-left.png'}
                            width={189}
                            height={200}
                            quality={100}
                            priority={true}
                            alt={'A small image'}
                            className="transition transform hover:scale-110"/>
                        </div>
                        <div className="sm:pt-8 pt-2">
                        <Image
                        src={'/images/small-image-left.png'}
                        width={250}
                        height={200}
                        quality={100}
                        priority={true}
                        alt={'A large image'}
                        className="transition transform hover:scale-110"/>
                        </div>
                    </div>
                    <div className="">
                        <Image
                        src={'/images/large-image.png'}
                        width={519}
                        height={384}
                        alt={'A large image'}
                        quality={100}
                        priority={true}
                        className="transition transform hover:scale-110"/>
                    </div>
                    <div className="pt-6 sm:pt-12">
                        <div>
                            <Image
                            src={'/images/small-image-right.png'}
                            width={189}
                            height={200}
                            alt={'A small image'}
                            quality={100}
                            priority={true}
                            className="transition transform hover:scale-110"/>
                        </div>
                        <div className="pt-2 sm:pt-8 ">
                            <Image
                            src={'/images/small-image-bottom-right.png'}
                            width={152}
                            height={212}
                            alt={'A large image'}
                            quality={100}
                            priority={true}
                            className="transition transform hover:scale-110"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className=" text-center pb-48 pt-24 lg:max-w-3xl mx-auto max-w-sm text-large md:text-2xl lg:text-xl text-large text-gray-700">
                <h3>Våre ergonomiske håndklær er utviklet for å gjøre daglige oppgaver enklere. Gjennom innovativ utforming skaper vi en enklere, mer effektiv hverdag.</h3>
            </div>
        </>
    )
}
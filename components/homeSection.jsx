import Image from "next/image"

export default function HomeSection () {
    return (
        <div className=" h-dvh flex justify-center items-center mx-3 md:mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl ">
            <div>
                <h1 className="transition transform hover:scale-110">En <span className=" italic" >enklere</span> hverdag.</h1>
                <div className="flex justify-center md:gap-8 gap-2 pt-20 md:pt-28 mb-24">
                    <div className=" pt-20 md:pt-36">
                        <Image
                        src={'/images/small-image-left.png'}
                        width={250}
                        height={200}
                        alt={'A large image'}
                        className="transition transform hover:scale-110"/>
                    </div>
                    <div className="">
                        <Image
                        src={'/images/large-image.png'}
                        width={519}
                        height={384}
                        alt={'A large image'}
                        className="transition transform hover:scale-110"/>
                    </div>
                    <div className="pt-12">
                        <Image
                        src={'/images/small-image-right.png'}
                        width={223}
                        height={144}
                        alt={'A large image'}
                        className="transition transform hover:scale-110"/>
                    </div>
                </div>
            </div>

        </div>
    )
}
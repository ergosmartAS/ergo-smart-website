import Image from "next/image"

export default function HomeSection () {
    return (
        <div className=" h-dvh flex justify-center items-center max-w-sm mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl ">
            <div>
                <h1>En <span className=" italic" >enklere</span> hverdag.</h1>
                <div className="flex justify-center gap-8 pt-28 mb-24">
                    <div className="pt-36">
                        <Image
                        src={'/images/small-image-left.png'}
                        width={250}
                        height={200}
                        alt={'A large image'}/>
                    </div>
                    <div>
                        <Image
                        src={'/images/large-image.png'}
                        width={519}
                        height={384}
                        alt={'A large image'}/>
                    </div>
                    <div className="pt-12">
                        <Image
                        src={'/images/small-image-right.png'}
                        width={223}
                        height={144}
                        alt={'A large image'}/>
                    </div>
                </div>
            </div>

        </div>
    )
}
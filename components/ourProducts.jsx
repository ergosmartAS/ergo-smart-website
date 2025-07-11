import Image from "next/image"

export default function OurProducts () {
    return (
        <>
            <div className="h-[100vh] flex justify-center items-center mt-20 md:-mt-20">
                <div>
                    <h3 className="text-5xl font-bold text-center">Våre produkter</h3>
                    <div className=" grid grid-cols-2 sm:grid-cols-5 :grid-rows-2 gap-5 mx-4 pt-12">
                        <div>
                            <Image
                             className="rounded-3xl transition transform hover:scale-110" 
                            src={'/images/ErgoSmart3500.jpg'}
                            width={200}
                            height={140}
                            alt={'a picture of our product'}
                            />
                        </div>
                        <div>
                            <Image
                             className="rounded-3xl transition transform hover:scale-110" 
                            src={'/images/ErgoSmart3505.jpg'}
                            width={200}
                            height={140}
                            alt={'a picture of our product'}
                            />
                        </div>
                        <div>
                            <Image
                             className="rounded-3xl transition transform hover:scale-110" 
                            src={'/images/ErgoSmart3507.jpg'}
                            width={200}
                            height={140}
                            alt={'a picture of our product'}
                            />
                        </div>
                        <div>
                            <Image
                             className="rounded-3xl transition transform hover:scale-110" 
                            src={'/images/ErgoSmart3509.jpg'}
                            width={200}
                            height={140}
                            alt={'a picture of our product'}
                            />
                        </div>
                        <div>
                            <Image
                             className="rounded-3xl transition transform hover:scale-110" 
                            src={'/images/ErgoSmart3511.jpg'}
                            width={200}
                            height={140}
                            alt={'a picture of our product'}
                            />
                        </div>
                        <div>
                            <Image
                             className="rounded-3xl transition transform hover:scale-110" 
                            src={'/images/ErgoSmart3534.jpg'}
                            width={200}
                            height={140}
                            alt={'a picture of our product'}
                            />
                        </div>
                        <div>
                            <Image
                             className="rounded-3xl transition transform hover:scale-110" 
                            src={'/images/ErgoSmart3531.jpg'}
                            width={200}
                            height={140}
                            alt={'a picture of our product'}
                            />
                        </div>
                        <div>
                            <Image
                             className="rounded-3xl transition transform hover:scale-110" 
                            src={'/images/ErgoSmart3528.jpg'}
                            width={200}
                            height={140}
                            alt={'a picture of our product'}
                            />
                        </div>
                        <div>
                            <Image
                             className="rounded-3xl transition transform hover:scale-110" 
                            src={'/images/ErgoSmart3536.jpg'}
                            width={200}
                            height={140}
                            alt={'a picture of our product'}
                            />
                        </div>
                        <div>
                            <Image
                             className="rounded-3xl transition transform hover:scale-110" 
                            src={'/images/ErgoSmart3538.jpg'}
                            width={200}
                            height={140}
                            alt={'a picture of our product'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
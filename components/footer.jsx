import Link from "next/link"

export default function Footer () {
    return (
        <footer className="bg-gray-100 text-gray-600 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-center sm:text-left">Ergo Smart</h3>
                        <p className="text-sm">Making your everyday life smarter.</p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="#omOss">
                            <p className="hover:text-gray-800">Om oss</p>
                        </Link>
                        <Link href="/kontakt">
                            <p className="hover:text-gray-800">Kontakt oss</p>
                        </Link>
                        {/* <Link href="/privacy">
                            <p className="hover:text-gray-800">Privacy</p>
                        </Link> */}
                    </div>
                </div>
                <div className="mt-4 text-center text-xs">
                    © {new Date().getFullYear()} Ergo Smart. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
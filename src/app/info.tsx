import Image from "next/image"

export interface InfoProps {
    imagePath: string
    alt: string
}

export default function Info({ imagePath, alt }: InfoProps) {
    return (
        <div className="bg-black text-white">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white">
                            Hi. I&apos;m{" "}
                            <span className="text-5xl sm:text-6xl text-black bg-white inline-block px-2 py-1 transform -skew-x-12">
                                Mohit
                            </span>
                        </h1>
                        <p className="text-xl ">
                            Welcome to my website. Here I share my projects, ideas and stuff I know.
                        </p>
                        <div className="pt-4">
                            <a href="/contact" className="inline-block bg-gradient-to-r from-blue-900 via-purple-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                                Get in touch
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <Image src={imagePath} alt={alt} layout="fill" objectFit="cover" className="rounded-2xl shadow-xl transition-transform hover:scale-105" priority/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image"

export interface InfoProps {
    imagePath: string
    alt: string
}

const Info: React.FC<InfoProps> = ({ imagePath, alt }) => {
    return (
        <div className="bg-black text-white">
            <div className="container px-4 py-8">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <div className="w-full space-y-6">
                        <h1 className="text-4xl sm:text-3xl font-bold text-white">
                            Hi. I&apos;m{" "}
                            <span className="text-5xl sm:text-6xl text-black bg-notmain inline-block px-2 py-1 transform -skew-x-12 transition-transform hover:scale-105">
                                Mohit
                            </span>
                        </h1>
                        <p className="text-xl ">
                            Welcome to my website. Here I share my projects, ideas and stuff I know.
                        </p>
                        <div className="pt-4">
                            <a href="/contact" className="inline-block text-xl bg-notmain text-black font-semibold py-3 px-6 rounded-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                                Get in touch
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <Image src={imagePath} alt={alt} fill={true} objectFit="cover" className="rounded-2xl shadow-xl transition-transform hover:scale-105" priority/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
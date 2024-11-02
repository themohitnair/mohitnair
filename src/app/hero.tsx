import Image from "next/image"

export interface HeroProps {
    imagePath: string
    points: string[]
    alt: string
    height: number
    width: number
}

const Hero: React.FC<HeroProps> = ({ imagePath, points = [], alt, width, height }) => {
    return (
        <div className="flex flex-col md:flex-row items-start justify-normal m-auto mt-10 gap-10">
            <div className="w-full md:w-1/2">
                {imagePath && (
                    <Image src={imagePath} alt={alt} width={width} height={height} className="rounded-md w-full h-auto transition-transform hover:scale-105"/>
                )}
            </div>
            <div className="w-full md:w-1/2">
                {points && points.length > 0 && (
                    <div className="space-y-6">
                        {points.map((point, index) => (
                            <div key={index} className="flex items-start space-x-4 bg-black rounded-lg p-4 shadow-md transition-all duration-300">
                                <div>
                                    <p className="text-xl text-white">{point}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Hero
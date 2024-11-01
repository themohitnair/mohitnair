import Image from "next/image"

export interface HeroProps {
    imagePath: string
    text: string
    alt: string
    height: number
    width: number
}

const Hero: React.FC<HeroProps> = ({ imagePath, text, alt, width, height }) => {
    return (
        <div className="md:flex items-start justify-normal m-auto mt-10 gap-x-10">
            <Image src={imagePath} alt={alt} width={width} height={height}
            onContextMenu={(e) => e.preventDefault()} className="rounded-md"/>
            <div className="text-xl">
                {text}
            </div>
        </div>
    )
}

export default Hero
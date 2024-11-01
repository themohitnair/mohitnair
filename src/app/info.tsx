import Image from "next/image"

export interface InfoProps {
    imagePath: string
    alt: string
    width: number
    height: number
}

const Info: React.FC<InfoProps> = ({imagePath, alt, width, height}) => {
    return (
        <div className="text-2xl mt-10 flex justify-between">
            <div>
                <p className="text-3xl font-bold mb-4">Hi.</p>
                <p className="text-3xl font-bold">
                    I&apos;m                    
                </p>
                <p className="text-5xl font-bold text-blue-600">
                        Mohit
                    </p>
                <p className="mt-10 text-xl text-gray-500">
                    Welcome to my website. Here I share my projects, ideas and stuff I know.
                </p>
            </div>
            <Image src={imagePath} alt={alt} width={width} height={height} className="rounded-md"/>        
        </div>
    )
}

export default Info
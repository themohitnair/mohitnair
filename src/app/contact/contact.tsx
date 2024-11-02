import Link from "next/link"
import { IconType } from "react-icons"

export interface ContactProps {
    platform: string
    icon: IconType
    link: string
}

const Contact: React.FC<ContactProps> = ({ platform, icon: Icon, link }) => {
    return (
        <Link href={link}>
            <div className="flex justify-between items-center p-4 rounded-lg shadow-md bg-notmain transition-transform duration-300 hover:scale-105">
                <Icon className="w-8 h-8 text-black" />
                <p className="font-bold text-black text-lg sm:text-xl">{platform}</p>
            </div>
        </Link>            
    )
}

export default Contact
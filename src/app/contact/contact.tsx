import { LucideIcon } from "lucide-react"
import Link from "next/link"

export interface ContactProps {
    platform: string
    icon: LucideIcon
    link: string
}

const Contact: React.FC<ContactProps> = ({ platform, icon: Icon, link }) => {
    return (
        <Link href={link}>
            <div className="flex justify-between items-center p-4 rounded-lg shadow-md bg-gradient-to-r from-blue-900 via-purple-500 to-indigo-500 transition-transform duration-300 hover:scale-105">
                <Icon className="w-8 h-8 text-black" />
                <p className="font-bold text-black text-xl">{platform}</p>
            </div>
        </Link>            
    )
}

export default Contact
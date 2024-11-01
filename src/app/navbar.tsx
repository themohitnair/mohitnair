import Link from "next/link"

export interface NavlinkProps {
    text: string
    link: string
}

interface NavbarProps {
    links: NavlinkProps[]
}

const Navlink: React.FC<NavlinkProps> = ({ text, link }) => {
    return (
        <Link href={link} className="hover:text-gray-500">
            {text}
        </Link>
    )
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    return (
        <header className="top-0 sticky flex justify-between items-center px-10 py-5 bg-black bg-opacity-75">
            <div className="text-2xl hover:text-blue-600">
                <Link href="/">
                    Mohit Nair
                </Link>
                    
            </div>
            <div className="flex gap-x-10">
                {links.map((item, key) => (
                    <Navlink text={item.text} link={item.link} key={key} />
                ))}
            </div>
        </header>
    )
}

export default Navbar
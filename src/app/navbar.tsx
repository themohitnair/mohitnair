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
        <Link href={link} className="hover:text-white">
            {text}
        </Link>
    )
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    return (
        <header className="top-0 sticky flex justify-between items-center px-5 py-5">
            <div className="text-2xl">
                Mohit Nair
            </div>
            <div>
                {links.map((item, key) => (
                    <Navlink text={item.text} link={item.link} key={key} />
                ))}
            </div>
        </header>
    )
}

export default Navbar
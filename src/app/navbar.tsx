"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export interface NavlinkProps {
    text: string
    link: string
}

interface NavbarProps {
    links: NavlinkProps[]
}

const Navlink: React.FC<NavlinkProps> = ({ text, link }) => {
    return (
        <Link href={link} className="text-black font-bold hover:scale-105 transition-transform duration-200">
            {text}
        </Link>
    )
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [ isMenuOpen, setMenuOpen ] = useState(false)
    return (
        <header className="top-0 sticky flex justify-between items-center px-7 py-5 bg-sunset-lake z-50">
            <div className="text-xl sm:text-2xl md:text-3xl text-black font-extrabold hover:scale-105 transition-transform duration-200">
                <Link href="/">
                    Mohit Nair
                </Link>
            </div>
            <nav className="hidden md:flex gap-x-10">
                {links.map((item, key) => (
                    <Navlink text={item.text} link={item.link} key={key} />
                ))}
            </nav>
            <button className="md:hidden text-black focus:outline-none rounded-md p-2" onClick={() => setMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-label="Toggle menu">
                { isMenuOpen ? <X width={24} /> : <Menu height={24} /> }
            </button>
            {isMenuOpen && (
                <div className="flex flex-col md:hidden items-end absolute top-full left-0 right-0 bg-ocean-gradient py-3 px-7 space-y-3 z-50 text-3xl sm:text-2xl">
                    {links.map((item, key) => (
                        <Navlink text={item.text} link={item.link} key={key} />
                    ))}
                </div>
            )}
        </header>
    )
}

export default Navbar
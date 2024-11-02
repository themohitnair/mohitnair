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
        <Link href={link} className="hover:text-gray-500 transition-colors duration-200">
            {text}
        </Link>
    )
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [ isMenuOpen, setMenuOpen ] = useState(false)
    return (
        <header className="top-0 sticky flex justify-between items-center px-7 py-5 bg-black bg-opacity-75 z-50">
            <div className="text-2xl hover:text-blue-600 transition-colors duration-200">
                <Link href="/">
                    Mohit Nair
                </Link>
            </div>
            <nav className="hidden md:flex gap-x-10">
                {links.map((item, key) => (
                    <Navlink text={item.text} link={item.link} key={key} />
                ))}
            </nav>
            <button 
                className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded-md p-2" 
                onClick={() => setMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
            >
                { isMenuOpen ? <X width={24} /> : <Menu height={24} /> }
            </button>
            {isMenuOpen && (
                <div className="flex flex-col md:hidden items-end absolute top-full left-0 right-0 bg-black bg-opacity-75 py-3 px-7 space-y-3 z-50">
                    {links.map((item, key) => (
                        <Navlink text={item.text} link={item.link} key={key} />
                    ))}
                </div>
            )}
        </header>
    )
}

export default Navbar
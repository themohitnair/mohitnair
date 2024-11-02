import type { Metadata } from "next";
import "./globals.css";
import Navbar, { NavlinkProps } from "./navbar";

export const metadata: Metadata = {
    title: "Mohit Nair",
    description: "Mohit Nair's Portfolio Website",
}

const links: NavlinkProps[] = [
    { text: "Resume", link: "/resume" },
    { text: "Blog", link: "/blog" },
    { text: "Projects", link: "/projects" },
    { text: "Contact", link: "/contact" },     
    { text: "Source Code", link: "https://github.com/themohitnair/mohitnair" },          
]

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon/mohitnair.svg" type="image/svg+xml" />
            </head>
            <body className="font-fra text-white">
                <Navbar links={links}/>
                {children}
            </body>
        </html>
    )
}

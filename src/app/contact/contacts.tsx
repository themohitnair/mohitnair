import { MailIcon } from "lucide-react"
import Contact, { ContactProps } from "./contact"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { SiChessdotcom, SiProtonmail } from "react-icons/si"

const Contacts = () => {
    const socials: ContactProps[] = [
        {
            platform: "Github",
            link: "https://github.com/themohitnair",
            icon: FaGithub
        },
        {
            platform: "LinkedIn",
            link: "https://linkedin.com/in/themohitnair",
            icon: FaLinkedin
        },
        {
            platform: "chess.com",
            link: "https://www.chess.com/member/skywalkeraboard",
            icon: SiChessdotcom
        },
        {
            platform: "Mail",
            link: "mailto:themohitnair@protonmail.com",
            icon: SiProtonmail
        }
    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            {socials.map((item, key) => (
                <Contact platform={item.platform} key={key} link={item.link} icon={item.icon}/>
            ))}
        </div>
    )
}

export default Contacts
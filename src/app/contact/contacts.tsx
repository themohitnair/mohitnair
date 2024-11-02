import { GithubIcon, Linkedin, Zap } from "lucide-react"
import Contact, { ContactProps } from "./contact"

const Contacts = () => {
    const socials: ContactProps[] = [
        {
            platform: "Github",
            link: "https://github.com/themohitnair",
            icon: GithubIcon
        },
        {
            platform: "LinkedIn",
            link: "https://linkedin.com/in/themohitnair",
            icon: Linkedin
        },
        {
            platform: "chess.com",
            link: "https://www.chess.com/member/skywalkeraboard",
            icon: Zap
        }
    ]
    return (
        <div className="grid grid-cols-2 gap-5 mt-10">
            {socials.map((item, key) => (
                <Contact platform={item.platform} key={key} link={item.link} icon={item.icon}/>
            ))}
        </div>
    )
}

export default Contacts
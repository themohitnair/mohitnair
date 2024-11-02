import { SiArchlinux, SiC, SiCplusplus, SiFastapi, SiHono, SiJavascript, SiMysql, SiNumpy, SiPandas, SiSelenium, SiSqlite, SiTailwindcss, SiTypescript, SiWebdriverio } from "react-icons/si";
import Hero from "./hero";
import Info, { InfoProps } from "./info";
import QuoteSection from "./quote";
import Stack, { SkillProp } from "./stack";
import { FaPython, FaReact } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { DiJava, DiLinux, DiMongodb, DiNodejs } from "react-icons/di";

export default function Home() {
    const info: InfoProps = {
        imagePath: "/images/lake.jpeg",
        alt: "Mohit in another amazing backdrop",
    }

    const skills: SkillProp[] = [
        {
            icon: DiLinux,
            name: "Linux"
        },
        {
            icon: SiArchlinux,
            name: "Arch Linux"
        },
        {
            icon: FaPython,
            name: "Python",
        },
        {
            icon: SiJavascript,
            name: "JavaScript"
        },
        {
            icon: SiC,
            name: "C"
        },
        {
            icon: SiCplusplus,
            name: "C++"
        },
        {
            icon: SiTypescript,
            name: "TypeScript"
        },
        {
            icon: SiHono,
            name: "HonoJS"
        },
        {
            icon: DiNodejs,
            name: "NodeJS"
        },
        {
            icon: SiFastapi,
            name: "FastAPI",
        },
        {
            icon: FaReact,
            name: "React",
        },
        {
            icon: RiNextjsLine,
            name: "NextJS",
        },
        {
            icon: DiMongodb,
            name: "MongoDB",
        },
        {
            icon: DiJava,
            name: "Java",
        },
        {
            icon: SiPandas,
            name: "Pandas"
        },
        {
            icon: SiNumpy,
            name: "Numpy"
        },
        {
            icon: SiTailwindcss,
            name: "TailwindCSS"
        },
        {
            icon: SiSqlite,
            name: "SQLite"
        },
        {
            icon: SiMysql,
            name: "MySQL"
        },
        {
            icon: SiWebdriverio,
            name: "WebDriverIO"
        },
        {
            icon: SiSelenium,
            name: "Selenium"
        },        
    ]

    return (
        <div className="mx-auto pb-10 w-full px-4 sm:w-3/4 lg:w-4/5">
            <Info imagePath={info.imagePath} alt={info.alt} />

            <QuoteSection />

            <Stack skills={skills} />

            <Hero />
        </div>
    );
}
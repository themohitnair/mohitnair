import Hero from "./hero";
import Info, { InfoProps } from "./info";
import QuoteSection from "./quote";
import Stack, { SkillProp } from "./stack";
import Education from "./education";
import { ArchlinuxOriginal, CloudflareworkersOriginal, COriginal, CplusplusOriginal, FastapiOriginal, GitOriginal, JavaOriginal, JavascriptOriginal, LinuxOriginal, MatlabOriginal, MatplotlibOriginal, MongodbOriginal, MysqlOriginal, NextjsOriginal, NodejsOriginal, NumpyOriginal, PandasOriginal, PostgresqlOriginal, PythonOriginal, ReactOriginal, SeleniumOriginal, SqlalchemyOriginal, SqliteOriginal, TailwindcssOriginal, TypescriptOriginal } from "devicons-react";


export default function Home() {
    const info: InfoProps = {
        imagePath: "/images/lake.jpeg",
        alt: "Mohit in another amazing backdrop",
    }

    const skills: SkillProp[] = [
        {
            icon: LinuxOriginal,
            name: "Linux"
        },
        {
            icon: ArchlinuxOriginal,
            name: "Arch Linux"
        },
        {
            icon: PythonOriginal,
            name: "Python",
        },
        {
            icon: JavascriptOriginal,
            name: "JavaScript"
        },
        {
            icon: COriginal,
            name: "C"
        },
        {
            icon: CplusplusOriginal,
            name: "C++"
        },
        {
            icon: TypescriptOriginal,
            name: "TypeScript"
        },
        {
            icon: NodejsOriginal,
            name: "NodeJS"
        },
        {
            icon: FastapiOriginal,
            name: "FastAPI",
        },
        {
            icon: ReactOriginal,
            name: "React",
        },
        {
            icon: NextjsOriginal,
            name: "NextJS",
        },
        {
            icon: MongodbOriginal,
            name: "MongoDB",
        },
        {
            icon: PandasOriginal,
            name: "Pandas"
        },
        {
            icon: NumpyOriginal,
            name: "Numpy"
        },
        {
            icon: TailwindcssOriginal,
            name: "TailwindCSS"
        },
        {
            icon: SqliteOriginal,
            name: "SQLite"
        },
        {
            icon: MysqlOriginal,
            name: "MySQL"
        },
        {
            icon: SeleniumOriginal,
            name: "Selenium"
        },
        {
            icon: GitOriginal,
            name: "Git"
        },
        {
            icon: CloudflareworkersOriginal,
            name: "Cloudflare Workers"
        },
        {
            icon: MatplotlibOriginal,
            name: "Matplotlib"
        },
        {
            icon: JavaOriginal,
            name: "Java"
        },
        {
            icon: SqlalchemyOriginal,
            name: "SQLAlchemy"
        },
        {
            icon: PostgresqlOriginal,
            name: "PostgreSQL"
        }
    ]

    return (
        <div className="mx-auto pb-10 w-full px-4 sm:w-3/4 lg:w-4/5">
            <Info imagePath={info.imagePath} alt={info.alt} />

            <QuoteSection />

            <Stack skills={skills} />

            <Education />

            <Hero />
        </div>
    );
}
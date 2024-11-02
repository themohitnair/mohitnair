import Stuff, { StuffProps } from "./stuff";
import { GraduationCap, Heart, ActivitySquare, Cpu } from "lucide-react";

const Hero: React.FC = () => {
    const stuff: StuffProps[] = [
        {
            icon: GraduationCap,
            heading: "Education",
            points: [
                "Federal Public School, Tirumenahalli (Middle and Lower Secondary Education) - 2020",
                "Presidency PU College, Kogilu (Pre-University Education - Physics, Chemistry, Math and Computer Science Stream) - 2022",
                "Ramaiah Institute of Technology (Undergraduate Education - B. E. Information Science and Engineering) - Graduating 2026"
            ]
        },
        {
            icon: Heart,
            heading: "Interests",
            points: [
                "Full Stack Web Development",
                "Neural Networks",
                "Computer Vision",
                "Natural Language Processing",
            ]
        },
        {
            icon: Cpu,
            heading: "Tech Stack",
            points: [
                "FastAPI",
                "React",
                "HonoJS",
                "NextJS",
                "NodeJS",
                "Pandas, Matplotlib, and Numpy",
            ]
        },
        {
            icon: ActivitySquare,
            heading: "Hobbies",
            points: [
                "Chess",
                "Food",
                "History",
                "Debates",
                "Movies",
            ]
        }        
    ]
    return (
        <div className="grid grid-cols-2 gap-x-4 mx-auto mt-10 px-4">
            {stuff.map((item, key) => (
                <Stuff key={key} icon={item.icon} heading={item.heading} points={item.points}/>
            ))}
        </div>
    )
}

export default Hero;
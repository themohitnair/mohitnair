import Stuff, { StuffProps } from "./stuff";
import { GraduationCap, Heart } from "lucide-react";

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
    ]
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto mt-10 px-4">
            {stuff.map((item, key) => (
                <Stuff key={key} icon={item.icon} heading={item.heading} points={item.points}/>
            ))}
        </div>
    )
}

export default Hero;
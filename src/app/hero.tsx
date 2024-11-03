import Stuff, { StuffProps } from "./stuff";
import { ActivitySquare, Heart } from "lucide-react";

const Hero: React.FC = () => {
    const stuff: StuffProps[] = [
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
            icon: ActivitySquare,
            heading: "Hobbies",
            points: [
                "Chess",
                "History",
                "Debates",
                "Food",
            ]
        } 
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
import { LucideIcon } from "lucide-react";

export interface StuffProps {
    icon: LucideIcon
    heading: string
    points: string[]
}

const Stuff: React.FC<StuffProps> = ({ icon: Icon, heading, points }) => {
    return (
        <div className="container mx-auto mt-5 px-4">
            <div className="max-w-xl mx-auto space-y-6">
                <div className="flex items-center gap-4 mb-6">
                    <Icon className="w-8 h-8 text-blue-500" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{heading}</h2>
                </div>

                {points.map((point, index) => (
                    <div key={index} className="flex items-start p-4 rounded-lg shadow-md bg-ocean-gradient transition-transform duration-300 hover:scale-105">
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black">{point}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stuff
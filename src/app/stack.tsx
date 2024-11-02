import React from "react"
import { Cpu } from "lucide-react"
import { IconType } from "react-icons"

export interface SkillProp {
    icon: IconType
    name: string
}

export interface StackProp {
    skills: SkillProp[]
}

const Skill: React.FC<SkillProp> = ({ icon: Icon, name }) => {
    return (
        <div className="flex flex-col items-center p-4 gap-y-3 rounded shadow-md hover:shadow-lg transition-transform hover:scale-105">
            <Icon className="h-18 w-18 text-notmain"/>
            <div className="text-center">
                {name}
            </div>
        </div>
    )
}

const Stack: React.FC<StackProp> = ({ skills }) => {
    return (
        <div className="container mt-10 px-10 w-full">
            <div className="mx-auto space-y-6">
                <div className="flex items-center gap-4 mb-6 text-center">
                    <Cpu className="w-8 h-8 text-notmain" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Skills</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                    {skills.map((skillProps, index) => (
                        <Skill key={index} icon={skillProps.icon} name={skillProps.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stack
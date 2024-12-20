import React from "react"
import { Cpu } from "lucide-react"
import { LinuxOriginal } from "devicons-react"

export interface SkillProp {
    icon: typeof LinuxOriginal
    name: string
}

export interface StackProp {
    skills: SkillProp[]
}

const Skill: React.FC<SkillProp> = ({ icon: Icon, name }) => {
    return (
        <div className="flex flex-col items-center p-4 gap-y-3 rounded shadow-md hover:shadow-lg transition-transform hover:scale-105">
            <Icon size={65} className="text-notmain w-10"/>
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
                    <Cpu className="w-8 h-8 text-blue-400" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Skills</h2>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                    {skills.map((skillProps, index) => (
                        <Skill key={index} icon={skillProps.icon} name={skillProps.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stack
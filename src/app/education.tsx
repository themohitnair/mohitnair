import Image from 'next/image'
import { MapPin, Calendar, GraduationCap } from 'lucide-react'
import React from 'react'

interface EducationEntry {
    year: string
    location: string
    institute: string
    subject: string
    imageUrl: string
}

const Education: React.FC = () => {
    const entries: EducationEntry[] = [
        {
            year: '2026',
            location: 'Bangalore, India',
            institute: 'Ramaiah Institute of Technology',
            subject: 'B.E. Information Science and Engineering',
            imageUrl: '/images/rit.jpg'
        },
        {
            year: '2022',
            location: 'Bangalore, India',
            institute: 'Presidency PU College, Kogilu',
            subject: 'Pre-University Education - Physics, Chemistry, Math and Computer Science',
            imageUrl: '/images/presikog.jpg'
        },
        {
            year: '2020',
            location: 'Bangalore, India',
            institute: 'Federal Public School, Tirumenahalli',
            subject: 'Middle and Lower Secondary Education',
            imageUrl: '/images/fps.png'
        }
    ]
    return (
        <div className="container mx-auto mt-10 px-4">
            <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="w-8 h-8 text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {entries.map((entry, index) => (
                    <div key={index} className="bg-notmain rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                        <div className="relative h-40">
                            <Image src={entry.imageUrl} alt={entry.institute} fill style={{ objectFit: 'cover' }}/>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-black mb-2">{entry.institute}</h3>
                            <p className="text-sm text-black mb-4">{entry.subject}</p>
                            <div className="flex items-center text-sm text-black mb-2">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{entry.year}</span>
                            </div>
                            <div className="flex items-center text-sm text-black">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>{entry.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
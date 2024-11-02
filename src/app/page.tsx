import Hero, { HeroProps } from "./hero";
import Info, { InfoProps } from "./info";
import QuoteSection from "./quote";

export default function Home() {
    const heroes: HeroProps[] = [
        { 
            imagePath: "/images/osm.jpg", 
            points: [
                "I'm currently pursuing my Bachelor's of Engineering in Information Science and Engineering at Ramaiah Institute of Technology, Bangalore",
                "I take a keen interest in Full Stack Web Development, with an emphasis on Backend Development",
                "I love chess.",
                "Also interested in Natural Language Processing, and Neural Nets"
            ],
            alt: "Mohit in an amazing backdrop",
            width: 480,
            height: 371
        }
    ]

    const info: InfoProps = {
        imagePath: "/images/lake.jpeg",
        alt: "Mohit in another amazing backdrop",
    }

    return (
        <div className="w-3/4 m-auto pb-10">            
            <Info imagePath={info.imagePath} alt={info.alt}/>

            <QuoteSection/>

            {heroes.map((item, key) => (
                <Hero imagePath={item.imagePath} points={item.points} alt={item.alt} width={item.width} height={item.height} key={key}/>
            ))}       

        </div>
    );
}
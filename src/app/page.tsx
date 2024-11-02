import Hero, { HeroProps } from "./hero";
import Info, { InfoProps } from "./info";

export default function Home() {
    

    const heroes: HeroProps[] = [
        { 
            imagePath: "/images/osm.jpg", 
            points: [
                "I love building. The language I speak just so happens to be Computer Science."
            ],
            alt: "Mohit in an amazing backdrop",
            width: 480,
            height: 371
        }
    ]

    const info: InfoProps = {
        imagePath: "/images/lake.jpeg",
        alt: "Mohit in another amazing backdrop",
        width: 480,
        height: 292.45
    }

    return (
        <div className="w-3/4 m-auto">            
            <Info imagePath={info.imagePath} alt={info.alt} width={info.width} height={info.height}/>

            {heroes.map((item, key) => (
                <Hero imagePath={item.imagePath} points={item.points} alt={item.alt} width={item.width} height={item.height} key={key}/>
            ))}       

        </div>
    );
}

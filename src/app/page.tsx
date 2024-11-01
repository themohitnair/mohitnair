import Hero, { HeroProps } from "./hero";
import Info, { InfoProps } from "./info";
import { SecondaryProps } from "./secondary";

export default function Home() {
    

    const heroes: HeroProps[] = [
        { 
            imagePath: "/images/osm.jpg", 
            text: "I love building. The language I speak just so happens to be Computer Science.",
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

    const secText: SecondaryProps = {
        text: "Welcome to my website. Here I share my projects, ideas and stuff I know."
    }

    return (
        <div className="w-3/4 m-auto">            
            <Info imagePath={info.imagePath} alt={info.alt} width={info.width} height={info.height}/>

            {heroes.map((item, key) => (
                <Hero imagePath={item.imagePath} text={item.text} alt={item.alt} width={item.width} height={item.height} key={key}/>
            ))}       

        </div>
    );
}

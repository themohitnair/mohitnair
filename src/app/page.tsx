import Hero, { HeroProps } from "./hero";
import Info from "./info";
import { NavlinkProps } from "./navbar";

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
    return (
        <div className="w-3/4 m-auto">            
            <Info/>

            {heroes.map((item, key) => (
                <Hero imagePath={item.imagePath} text={item.text} alt={item.alt} width={item.width} height={item.height} key={key}/>
            ))}       

        </div>
    );
}

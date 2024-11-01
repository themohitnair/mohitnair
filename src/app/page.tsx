import Hero, { HeroProps } from "./hero";
import Info from "./info";
import Navbar from "./navbar";
import { NavlinkProps } from "./navbar";

export default function Home() {
    const links: NavlinkProps[] = [
        { text: "Resume", link: "/resume" },
        { text: "Blog", link: "/blog" },
        { text: "Projects", link: "/projects" },
        { text: "Contact", link: "/contact" },     
        { text: "Source Code", link: "https://github.com/themohitnair/mohitnair" },          
    ]

    const heroes: HeroProps[] = [
        { 
            imagePath: "/images/osm.jpg", 
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, voluptatum maiores? Nisi beatae dolores soluta veniam quas dolorum quod, nostrum sit expedita reiciendis? Voluptatum, error expedita maxime minima ex eligendi?",
            alt: "Mohit in an amazing backdrop",
            width: 960,
            height: 742
        }
    ]
    return (
        <div>
            <Navbar links={links}/>  
            {/* {heroes.map((item, key) => (
                <Hero imagePath={item.imagePath} text={item.text} alt={item.alt} width={item.width} height={item.height} key={key}/>
            ))}        */}
            <Info/>

        </div>
    );
}

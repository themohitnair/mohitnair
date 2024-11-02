import Hero from "./hero";
import Info, { InfoProps } from "./info";
import QuoteSection from "./quote";

export default function Home() {
    const info: InfoProps = {
        imagePath: "/images/osm.jpg",
        alt: "Mohit in another amazing backdrop",
    }

    return (
        <div className="mx-auto pb-10 w-3/4">            
            <Info imagePath={info.imagePath} alt={info.alt}/>

            <QuoteSection/>

            <Hero/>
        </div>
    );
}
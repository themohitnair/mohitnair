import Hero from "./hero";
import Info, { InfoProps } from "./info";
import QuoteSection from "./quote";

export default function Home() {
    const info: InfoProps = {
        imagePath: "/images/osm.jpg",
        alt: "Mohit in another amazing backdrop",
    }

    return (
        <div className="mx-auto pb-10 w-full px-4 sm:w-3/4 lg:w-2/3">
            <Info imagePath={info.imagePath} alt={info.alt} />

            <QuoteSection />

            <Hero />
        </div>
    );
}
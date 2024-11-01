import Navbar from "./navbar";
import { NavlinkProps } from "./navbar";

export default function Home() {
    const links: NavlinkProps[] = [
        { text: "Source Code", link: "https://github.com/themohitnair/mohitnair" }
    ]
    return (
        <div>
            <Navbar links={links}/>            
        </div>
    );
}

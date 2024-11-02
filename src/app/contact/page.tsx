import { Metadata } from "next";
import Contacts from "./contacts";

export const metadata: Metadata = {
    title: "Contact - Mohit Nair",
    description: "Mohit Nair's Portfolio Website",
}

export default function ContactPage() {
    return (
        <div className="w-3/4 m-auto pb-10">
            <Contacts/>
        </div>
    );
}
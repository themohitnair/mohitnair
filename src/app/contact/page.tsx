import { Metadata } from "next";
import Contacts from "./contacts";

export const metadata: Metadata = {
    title: "Contact - Mohit Nair",
    description: "Mohit Nair's Portfolio Website",
}

export default function ContactPage() {
    return (
        <div className="w-full sm:w-3/4 m-auto pb-10 px-4">
            <Contacts />
        </div>
    );
}

import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [text, setText] = useState("");
    const [isBlinking, setIsBlinking] = useState(true);
    const words = ["skywalker", "mohit"];
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenWords = 1000;

    const animateText = useCallback(() => {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const animate = () => {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                setText(currentWord.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setText(currentWord.substring(0, charIndex + 1));
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(animate, delayBetweenWords);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(animate, typingSpeed);
            } else {
                setTimeout(animate, isDeleting ? erasingSpeed : typingSpeed);
            }
        };

        animate();
    }, []);

    useEffect(() => {
        animateText();
    }, [animateText]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setIsBlinking((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <header className="sticky top-0 bg-secondary pb-7">
            <div className="title text-7xl flex justify-center items-center mt-7">
                <Link to="/" className="text-inherit">
                    {text}
                    <span
                        className={`inline-block w-2.5 h-9 bg-black ml-1.5 ${
                            isBlinking ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </Link>
            </div>
            <nav className="w-7/12 mt-5 m-auto">
                <ul className="flex justify-around items-center">
                    {["blog", "projects", "technologies", "contact"].map((item) => (
                        <li key={item}>
                            <Link to={`/${item}`} className="hover:bg-primary hover:text-secondary py-2 px-5 rounded-sm text-xl">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
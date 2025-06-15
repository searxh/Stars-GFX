import { useState } from "react";
import GlassmorphismCard from "./GlassmorphismCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <GlassmorphismCard className="flex flex-col w-full text-white">
            <button
                onClick={() => {
                    setIsActive(!isActive);
                }}
                className="bg-gradient-to-l text-left from-primary to-secondary 
                p-3 rounded-lg font-bold text-lg flex justify-between"
            >
                <div>{question}</div>

                <FontAwesomeIcon
                    className={`${
                        isActive ? "rotate-180" : "rotate-0"
                    } text-white drop-shadow-sm w-5 h-5 transition duration-300 ease-in-out my-auto`}
                    icon={faChevronDown}
                />
            </button>
            {isActive ? (
                <div className="p-9 whitespace-pre-line">{answer}</div>
            ) : null}
        </GlassmorphismCard>
    );
};

export default FAQItem;

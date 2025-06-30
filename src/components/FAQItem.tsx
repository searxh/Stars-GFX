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
        <GlassmorphismCard className="flex flex-col w-full rounded-lg">
            <button
                onClick={() => {
                    setIsActive(!isActive);
                }}
                className={`${
                    isActive
                        ? "border-opacity-100 text-secondary rounded-t-lg"
                        : "border-opacity-0 text-white rounded-lg"
                } border-b-[1px] border-secondary bg-black bg-opacity-40 text-left
                p-4 font-semibold text-lg flex justify-between transition duration-300`}
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

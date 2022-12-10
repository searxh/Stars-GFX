import React from "react";

interface ContactButtonPropsInterface {
    text: string;
    imageUrl: string;
}

const ContactButton = ({ text, imageUrl }: ContactButtonPropsInterface) => {
    return (
        <button
            className="text-xl font-bold text-black backdrop-blur-sm transition
            duration-500 rounded-full bg-opacity-50 bg-white w-60 py-2 m-auto hover:scale-110"
        >
            {text}
        </button>
    );
};

export default ContactButton;

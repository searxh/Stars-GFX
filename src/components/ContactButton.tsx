import React from "react";
import { Link } from "react-router-dom";

interface ContactButtonPropsInterface {
    text: string;
    imageUrl: string;
    linkTo: string;
}

const ContactButton = ({
    text,
    imageUrl,
    linkTo,
}: ContactButtonPropsInterface) => {
    const handleOnClick = () => {
        window.location.href = linkTo;
    };
    return (
        <button
            onClick={handleOnClick}
            className="text-xl font-bold text-white text-center 
            border-x-[0.5px] border-white w-60 py-2 drop-shadow-md"
        >
            <div className="hover:scale-110 transition duration-500">
                <img
                    className="w-16 h-16 m-auto invert"
                    src={imageUrl}
                    alt=""
                />
                <div className="font-righteous mt-2">{text}</div>
                <div className="text-base whitespace-normal px-5">
                    This is where I commonly post my GFX
                </div>
            </div>
        </button>
    );
};

export default ContactButton;

import React from "react";
interface ContactButtonPropsInterface {
    text: string;
    imageUrl: string;
    desc: string;
    linkTo: string;
}

const ContactButton = ({
    text,
    imageUrl,
    desc,
    linkTo,
}: ContactButtonPropsInterface) => {
    const handleOnClick = () => {
        window.location.href = linkTo;
    };
    return (
        <button
            onClick={handleOnClick}
            className="text-xl font-bold text-white text-center bg-white bg-opacity-10
            w-60 py-5 drop-shadow-md rounded-xl mx-auto shadow-md"
        >
            <div className="md:hover:scale-105 transform-gpu duration-500">
                <img
                    className="w-16 h-16 m-auto invert"
                    src={imageUrl}
                    draggable={false}
                    alt=""
                />
                <div className="font-bold mt-2">{text}</div>
                <div className="text-base whitespace-normal px-5 font-normal">
                    {desc}
                </div>
            </div>
        </button>
    );
};

export default ContactButton;

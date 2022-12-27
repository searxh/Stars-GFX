import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

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
    const isLargerThanMedium = useMediaQuery("(min-width: 640px)");
    return (
        <button
            style={{
                borderBottom: isLargerThanMedium
                    ? undefined
                    : "1px solid white",
            }}
            onClick={handleOnClick}
            className="text-xl font-bold text-white text-center
            md:border-x-[0.5px] border-white w-60 py-5 drop-shadow-md"
        >
            <div className="hover:scale-110 transform-gpu duration-500">
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

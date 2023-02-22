import React from "react";

interface XButtonInterface {
    closeCallback: Function;
    className?: string;
}

const XButton = ({ closeCallback, className }: XButtonInterface) => {
    const handleOnClick = () => {
        closeCallback();
    };
    return (
        <button
            onClick={handleOnClick}
            className={`w-8 h-8 ${className} bg-red-400 text-center shadow-md text-lg
            rounded-full text-white md:hover:scale-105 md:hover:bg-red-500 duration-300 transition`}
        >
            X
        </button>
    );
};

export default XButton;

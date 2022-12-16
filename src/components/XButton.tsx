import React from "react";

interface XButtonInterface {
    closeCallback: Function;
    className: string;
}

const XButton = ({ closeCallback, className }: XButtonInterface) => {
    const handleOnClick = () => {
        closeCallback();
    };
    return (
        <button
            onClick={handleOnClick}
            className={`w-8 h-8 ${className} bg-red-400 text-center shadow-md
            rounded-full text-white hover:scale-105 hover:bg-red-500 duration-300 transition`}
        >
            X
        </button>
    );
};

export default XButton;

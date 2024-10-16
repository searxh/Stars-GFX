import React from "react";

interface TextPropsInterface {
    text: string;
    color: string;
}

const Text = ({ text, color }: TextPropsInterface) => {
    return (
        <div
            className={`max-w-xl text-4xl lg:text-5xl ${color} m-auto font-bold w-full drop-shadow-sm p-5 text-center`}
        >
            {text}
        </div>
    );
};

export default Text;

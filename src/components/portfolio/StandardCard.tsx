import React from "react";

interface StandardCardPropsType {
    src: string;
    name?: string;
    desc?: string;
    callback: Function;
}

const StandardCard = ({ src, callback, name, desc }: StandardCardPropsType) => {
    return (
        <div
            className={`fixed flex flex-col w-screen h-screen top-0 bottom-0 left-0 right-0 
            bg-opacity-50 bg-white select-none ${
                src.length !== 0
                    ? "scale-100 backdrop-blur-lg opacity-100 z-50"
                    : "scale-0 -z-10 opacity-0 backdrop-blur-none"
            } transition duration-300 rounded-xl`}
        >
            <button
                onClick={() => {
                    callback();
                }}
                className="absolute text-xl m-2 top-0 right-0 w-12 h-12 z-50 hover:scale-110 transition duration-500"
            >
                X
            </button>
            <div className="flex flex-col relative m-auto h-full w-full overflow-hidden">
                {name ? (
                    <div className="w-full text-3xl p-2 font-bold m-auto drop-shadow-sm">
                        {name}
                    </div>
                ) : (
                    <div className="m-auto" />
                )}
                <img
                    className="m-auto object-contain rounded-xl
                        max-w-[90%] max-h-[75%] drop-shadow-lg"
                    src={src}
                    alt=""
                />
                {desc ? (
                    <div className="w-full text-base p-5 pt-0 font-semibold m-auto">
                        {desc}
                    </div>
                ) : (
                    <div className="m-auto" />
                )}
            </div>
        </div>
    );
};

export default StandardCard;

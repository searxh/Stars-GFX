import React from "react";

interface StandardCardPropsType {
    src: string;
    name?: string;
    desc?: string;
    isProject?: boolean;
    arr?: Array<string>;
    callback: Function;
}

const ItemWindow = ({
    src,
    callback,
    name,
    desc,
    isProject,
    arr,
}: StandardCardPropsType) => {
    return (
        <div
            className={`fixed flex flex-col w-screen h-screen top-0 bottom-0 left-0 right-0 
            bg-opacity-60 bg-white select-none backdrop-blur-lg ${
                src.length !== 0
                    ? "scale-100 opacity-100 z-50"
                    : "scale-0 -z-10 opacity-0"
            } transform-gpu duration-300 rounded-xl`}
        >
            <button
                onClick={() => {
                    callback();
                }}
                className="absolute text-xl m-2 top-0 right-0 w-12 h-12 z-50 hover:scale-110 transform-gpu duration-500"
            >
                X
            </button>
            <div
                className={`${
                    isProject ? "overflow-y-scroll" : "overflow-hidden"
                } flex flex-col relative m-auto h-full w-full `}
            >
                {name ? (
                    <div className="w-full text-3xl p-2 font-bold m-auto drop-shadow-sm">
                        {name}
                    </div>
                ) : (
                    <div className="m-auto" />
                )}
                {!arr ? (
                    <img
                        className="m-auto object-contain rounded-xl
                        max-w-[90%] max-h-[75%] drop-shadow-lg"
                        src={src}
                        draggable={false}
                        alt=""
                    />
                ) : null}
                {desc ? (
                    <div className="w-full text-base p-5 pt-0 font-semibold m-auto">
                        {desc}
                    </div>
                ) : (
                    <div className="m-auto" />
                )}
                {arr?.map((arrItem: string) => {
                    if (arrItem.includes("//media"))
                        return (
                            <img
                                className="max-w-[90%] max-h-[75%] object-contain rounded-xl drop-shadow-lg m-auto my-5"
                                src={arrItem}
                                draggable={false}
                                alt=""
                            />
                        );
                    else if (arrItem.includes("https://")) {
                        return (
                            <a
                                href={arrItem}
                                className="text-blue-500 text-base px-12 py-3"
                            >
                                {arrItem}
                            </a>
                        );
                    } else {
                        return (
                            <div className=" text-left text-base px-12 py-3">
                                {arrItem}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default ItemWindow;

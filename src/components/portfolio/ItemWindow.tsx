import React from "react";
import { ListItemTypes, ProjectArrItemTypes } from "../../types";
import compareAsc from "date-fns/compareAsc";
import { portfolio } from "../../lib/portfolio";

interface StandardCardPropsType {
    listItem: ListItemTypes;
    callback: Function;
}

const ItemWindow = ({ listItem, callback }: StandardCardPropsType) => {
    const { arr, desc, name, src, timestamp } = listItem;
    const getSrc = (content: number) => {
        const dir = "/images/portfolio/";
        const type = ".webp";
        const id =
            portfolio[2].length -
            portfolio[2].findIndex((projItem: any) => projItem.name === name);
        return dir + "c" + id + "_" + content + type;
    };
    const IsInCooldown = () => {
        if (timestamp) {
            const res = compareAsc(Date.now(), timestamp + 500);
            return res === 1 ? false : true;
        }
    };
    const handleOnQuickExit = () => {
        if (!IsInCooldown()) callback();
    };
    return (
        <div
            onClick={handleOnQuickExit}
            className={`fixed flex flex-col w-screen h-screen top-0 bottom-0 left-0 right-0 
            bg-opacity-60 bg-neutral-100 select-none backdrop-blur-xl ${
                src !== undefined
                    ? "scale-100 opacity-100 z-50"
                    : "scale-0 -z-10 opacity-0"
            } transform-gpu duration-[400ms] rounded-xl`}
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
                className={`overflow-y-scroll flex flex-col relative m-auto h-full w-full`}
            >
                {name ? (
                    <div className="w-full text-2xl lg:text-3xl p-2 px-12 font-bold mx-auto mt-10 drop-shadow-sm">
                        {name}
                    </div>
                ) : null}
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
                    <div className="w-fit text-left text-sm lg:text-lg p-6 mx-auto">
                        {desc}
                    </div>
                ) : null}
                {arr ? (
                    <div className="m-auto w-full">
                        {arr?.map(
                            (arrItem: ProjectArrItemTypes, index: number) => {
                                const { content, className } = arrItem;
                                if (typeof content === "number") {
                                    return (
                                        <img
                                            key={index}
                                            className={`${className} max-w-[90%] max-h-[75%] object-contain rounded-xl drop-shadow-lg 
                                    m-auto my-5`}
                                            src={getSrc(content)}
                                            draggable={false}
                                            alt=""
                                        />
                                    );
                                } else if (content.includes("https://")) {
                                    return (
                                        <div className="min-w-[21rem] w-[80%] mx-auto">
                                            <a
                                                key={index}
                                                href={content}
                                                className={`${className} text-blue-500 text-lg py-3 break-words`}
                                            >
                                                {content}
                                            </a>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            key={index}
                                            className={`${className} text-left text-lg px-12 py-3`}
                                        >
                                            {content}
                                        </div>
                                    );
                                }
                            }
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ItemWindow;

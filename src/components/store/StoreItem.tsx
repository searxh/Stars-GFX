import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

interface StoreItemProps {
    name: string;
    link: string;
    price: number;
    index: number;
}

const StoreItem = ({ name, link, price, index }: StoreItemProps) => {
    const src = `/images/store/a${index + 1}.webp`;
    const isSmall = useMediaQuery("(max-width: 530px)");
    return link ? (
        <a
            href={link}
            className={`relative flex flex-col ${
                isSmall ? "w-full" : "w-[14rem]"
            } h-[20rem] shadow-md overflow-hidden 
            hover:scale-105 transform-gpu duration-500 rounded-xl bg-white`}
        >
            <img
                className="h-full m-5 shadow-md
                object-cover rounded-xl"
                src={src}
                draggable={false}
                alt=""
            />
            <div className="w-full p-5 pt-0">
                <div className="flex gap-5 text-left justify-between leading-tight">
                    <div className="text-xl font-semibold">{name}</div>
                    <div className="my-auto text-sm">${price}</div>
                </div>
            </div>
        </a>
    ) : null;
};

export default StoreItem;

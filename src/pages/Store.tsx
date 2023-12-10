import React from "react";
import useScript from "../hooks/useScript";
import { store } from "../lib/store";
import StoreItem from "../components/store/StoreItem";
import useMediaQuery from "../hooks/useMediaQuery";

const Store = () => {
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");
    const isSmall = useMediaQuery("(max-width: 530px)");
    //useScript("https://gumroad.com/js/gumroad.js");
    return (
        <div
            className="relative flex flex-col py-12 w-full min-h-screen h-full
            font-nunito bg-neutral-100 text-center"
        >
            <div
                className={`grid ${
                    isSmall
                        ? "grid-cols-1"
                        : isSmallerThanMedium
                        ? "grid-cols-2"
                        : "grid-cols-3"
                } gap-5 p-10 mx-auto`}
            >
                {store.map((item, index) => {
                    const { name, price, link } = item;
                    return (
                        <StoreItem
                            key={Math.random()}
                            name={name}
                            link={link}
                            price={price}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Store;

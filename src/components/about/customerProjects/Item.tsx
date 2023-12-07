import React from "react";
import { ListItemTypes } from "../../../types";
import { customerProjects } from "../../../lib/customerProjects";

interface CustomerProjectsItemProps {
    listItem: ListItemTypes;
    isLastItem?: boolean;
    setInfo: (value: any) => void;
}

const CustomerProjectsItem = ({
    listItem,
    setInfo,
}: CustomerProjectsItemProps) => {
    const { name, desc, arr } = listItem;
    const id =
        customerProjects.length -
        customerProjects.findIndex((projItem: any) => projItem.name === name);
    const src = `/images/customerProjects/c${id}.webp`;
    const handleSetInfo = () => {
        setInfo({
            src: src,
            name: name,
            desc: desc,
            isProject: true,
            arr: arr,
            timestamp: Date.now(),
        });
    };
    return (
        <button
            onClick={handleSetInfo}
            className="bg-white rounded-3xl shadow-md w-full p-5 text-black"
        >
            <div className="flex flex-col gap-2 text-left">
                <img
                    className={`object-cover object-center rounded-xl drop-shadow-md`}
                    src={src}
                    draggable={false}
                    alt=""
                />
                <div className="p-1 px-2 text-sm bg-neutral-300 w-fit shadow-md rounded-lg">
                    Commissioned
                </div>
                <div className="font-bold text-2xl">{listItem.name}</div>
            </div>
        </button>
    );
};

export default CustomerProjectsItem;

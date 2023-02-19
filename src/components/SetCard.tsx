import React from "react";

interface IProps {
    name: string;
    isSelected: boolean;
    onClickCallback: Function;
}

const SetCard = ({ name, isSelected, onClickCallback }: IProps) => {
    return (
        <button
            onClick={() => onClickCallback(name)}
            className={`${
                isSelected ? "border-2 border-black" : ""
            } flex w-52 h-52 bg-neutral-200 rounded-xl`}
        >
            <div className="m-auto">{name}</div>
        </button>
    );
};

export default SetCard;

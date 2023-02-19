import React from "react";
import { GlobalContext } from "../../../states";
import { pageChangeCheck } from "../../../lib/utilities";
import SetCard from "../../SetCard";

const setInfo = [
    {
        name: "Entry Set",
    },
    {
        name: "Plus Set",
    },
    {
        name: "Pro Set",
    },
    {
        name: "Beyond Set",
    },
];
const SelectSetPage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { currentPage } = global_state;
    const [selected, setSelected] = React.useState<string>();
    const handleOnNavigate = (isForward: boolean) => {
        const check = pageChangeCheck(isForward, currentPage);
        dispatch({
            type: "set",
            field: "currentPage",
            payload: check !== undefined ? check : currentPage,
        });
    };
    const onClickCallback = (name: string) => {
        dispatch({
            type: "set",
            field: "commsFlow",
            payload: name === "Customize" ? 1 : 0,
        });
        setSelected(name);
    };
    return (
        <div className="text-4xl lg:text-5xl text-black m-auto font-bold w-full">
            <div className="py-2 drop-shadow-sm">Choose your set</div>
            <div className="grid grid-flow-col gap-5 w-fit mx-auto text-3xl py-5">
                {setInfo.map((setItem) => (
                    <SetCard
                        name={setItem.name}
                        isSelected={selected === setItem.name}
                        onClickCallback={onClickCallback}
                    />
                ))}
            </div>
            <div className="text-2xl">or</div>
            <button
                onClick={() => onClickCallback("Customize")}
                className={`${
                    selected === "Customize" ? "border-2 border-black" : ""
                } mx-auto text-xl px-5 rounded-full`}
            >
                Customize your order
            </button>
            <div className="flex justify-evenly">
                <button
                    onClick={() => handleOnNavigate(false)}
                    className="text-orange-500 border-orange-500 hover:scale-110 hover:text-sky-500 w-40
                    duration-500 transform-gpu text-2xl lg:text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                >
                    Back
                </button>
                <button
                    onClick={() => handleOnNavigate(true)}
                    className="text-orange-500 border-orange-500 hover:scale-110 hover:text-sky-500 w-40
                    duration-500 transform-gpu text-2xl lg:text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SelectSetPage;

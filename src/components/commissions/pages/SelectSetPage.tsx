import React from "react";
import { GlobalContext } from "../../../states";
import { pageChangeCheck } from "../../../lib/utilities";
import SetCard from "../../SetCard";
import { FormInfoType } from "../../../types";

const setInfo = [
    {
        name: "Entry",
        color: "bg-orange-400",
        details: {
            resolution: "HD",
            models: 3,
            icon: 59,
            thumbnail: 79,
            amount: [1],
            extras: null,
        },
    },
    {
        name: "Plus",
        color: "bg-red-400",
        details: {
            resolution: "5k",
            models: "Unlimited",
            icon: 69,
            thumbnail: 89,
            amount: [1],
            extras: null,
        },
    },
    {
        name: "Pro",
        color: "bg-sky-400",
        details: {
            resolution: "5k",
            models: "Unlimited",
            price: 229,
            amount: [1, 2],
            extras: null,
        },
    },
    {
        name: "Beyond",
        color: "bg-purple-400",
        details: {
            resolution: "5k",
            models: "Unlimited",
            price: 349,
            amount: [2, 3],
            extras: "Photoshop & Blender files",
        },
    },
];
const SelectSetPage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { currentPage, formInfo } = global_state;
    const [selected, setSelected] = React.useState<string>("");
    const [errorMessageVisible, setErrorMessageVisible] =
        React.useState<boolean>(false);
    const handleOnNavigate = (isForward: boolean) => {
        if (selected.length === 0) {
            setErrorMessageVisible(true);
            setTimeout(() => setErrorMessageVisible(false), 1500);
        } else {
            const check = pageChangeCheck(isForward, currentPage);
            dispatch({
                type: "set",
                field: "currentPage",
                payload: check !== undefined ? check : currentPage,
            });
        }
    };
    const onSelectCallback = (name: string) => {
        dispatch({
            type: "set",
            field: "commsFlow",
            payload: name === "Customize" ? 1 : 0,
        });
        setSelected(name !== selected ? name : "");
    };
    React.useEffect(() => {
        const setInfoItem = setInfo.find((item) => item.name === selected);
        let newFormInfo: FormInfoType = {};
        if (formInfo[selected] === undefined && setInfoItem) {
            newFormInfo[selected] = {
                modelLimit:
                    typeof setInfoItem.details.models === "string"
                        ? "Unlimited"
                        : "Limited",
                number: "1",
                resolution: setInfoItem.details.resolution,
                additional: setInfoItem.details.extras
                    ? setInfoItem.details.extras
                    : "None",
            };
        }
        dispatch({
            type: "set",
            field: "formInfo",
            payload: newFormInfo,
        });
    }, [selected]);
    return (
        <div className="text-4xl lg:text-5xl text-black m-auto font-bold w-full">
            <div className="relative w-full">
                <div className="py-2 drop-shadow-sm">Choose your set</div>
                <div
                    className={`absolute left-0 right-0 -bottom-2 font-normal text-sm lg:text-xl
                    drop-shadow-sm text-red-500 transition duration-500 leading-4 ${
                        errorMessageVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    Choose a set or select customize order to continue
                </div>
            </div>

            <div className="grid grid-flow-col gap-5 w-fit mx-auto text-3xl py-5">
                {setInfo.map((setItem) => (
                    <SetCard
                        name={setItem.name}
                        isSelected={selected === setItem.name}
                        selectCallback={onSelectCallback}
                        details={setItem.details}
                        color={setItem.color}
                    />
                ))}
            </div>
            <div className="text-2xl -mb-4">or</div>
            <button
                onClick={() => onSelectCallback("Customize")}
                className={`${
                    selected === "Customize"
                        ? "bg-orange-400 text-white"
                        : "border-2 border-black"
                } mx-auto text-xl px-5 py-1 my-5 rounded-full transform-gpu duration-300 hover:scale-105`}
            >
                Customize your order
            </button>
            <div className="flex justify-evenly font-normal">
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

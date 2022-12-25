/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { GlobalContext } from "../../../states";
import { productChoices, initialProductInfo } from "../../../lib/default";
import { pageChangeCheck } from "../../../lib/utilities";

const gridConfig = [
    { row: "row-span-2", col: "col-span-3" },
    { row: "row-span-2", col: "col-span-2" },
    { row: "row-span-1", col: "col-span-5" },
    { row: "row-span-1", col: "col-span-5" },
];

const SelectProductPage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { formInfo, currentPage } = global_state;
    const [selected, setSelected] = React.useState<Array<boolean>>(
        Object.keys(productChoices).map((productKey: string) => false)
    );
    const [errorMessageVisible, setErrorMessageVisible] =
        React.useState<boolean>(false);
    const handleOnSelect = (index: number) => {
        setSelected((previousSelected) => {
            const newSelected = [...previousSelected];
            newSelected[index] = !newSelected[index];
            return newSelected;
        });
    };
    const handleOnNavigate = (isForward: boolean) => {
        if (selected.find((bool: boolean) => bool) === undefined && isForward) {
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
    React.useEffect(() => {
        const newFormInfo = { ...formInfo };
        selected.forEach((selectObj: boolean, index: number) => {
            if (
                selectObj &&
                newFormInfo[productChoices[index].title] === undefined
            ) {
                newFormInfo[productChoices[index].title] = {
                    ...initialProductInfo,
                };
            } else if (
                !selectObj &&
                newFormInfo[productChoices[index].title] !== undefined
            ) {
                delete newFormInfo[productChoices[index].title];
            }
        });
        dispatch({
            type: "set",
            field: "formInfo",
            payload: newFormInfo,
        });
    }, [selected]);
    return (
        <div className="relative text-black m-auto w-[60%]">
            <div className="relative">
                <div className="text-5xl my-2 drop-shadow-sm font-bold px-10">
                    Select product(s) for a project
                </div>
                <div
                    className={`absolute left-0 right-0 -bottom-6 text-xl 
                drop-shadow-sm text-red-500 transition duration-500 whitespace-nowrap ${
                    errorMessageVisible ? "opacity-100" : "opacity-0"
                }`}
                >
                    At least one product needs to be selected in order to
                    continue
                </div>
            </div>
            <div className="grid grid-rows-4 grid-cols-5 gap-2 col-span-5 my-10">
                {productChoices.map(
                    (
                        productChoice: { title: string; color: string },
                        index: number
                    ) => {
                        return (
                            <button
                                key={index}
                                onClick={() => handleOnSelect(index)}
                                className={`flex-1 rounded-2xl duration-500 ${
                                    gridConfig[index].row
                                } ${gridConfig[index].col}
                                text-white py-5 text-2xl hover:scale-[102%] transform-gpu shadow-md ${
                                    selected[index]
                                        ? "opacity-100"
                                        : "opacity-50"
                                } ${productChoice.color}`}
                            >
                                {productChoice.title.toLocaleUpperCase()}
                            </button>
                        );
                    }
                )}
            </div>
            <div className="flex justify-evenly">
                <button
                    onClick={() => handleOnNavigate(false)}
                    className="text-orange-500 border-orange-500 hover:scale-110 hover:text-sky-500 w-40
                    duration-500 transform-gpu text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                >
                    Back
                </button>
                <button
                    onClick={() => handleOnNavigate(true)}
                    className="text-orange-500 border-orange-500 hover:scale-110 hover:text-sky-500 w-40
                    duration-500 transform-gpu text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SelectProductPage;

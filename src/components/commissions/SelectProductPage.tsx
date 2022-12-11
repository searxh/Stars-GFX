import React from "react";
import { GlobalContext } from "../../states";
import { productChoices, initialProductInfo } from "../../lib/default";
import { pageChangeCheck } from "../../lib/utilities";
import { PagesDot } from "../PagesDot";

const SelectProductPage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { formInfo, currentPage } = global_state;
    const [selected, setSelected] = React.useState<Array<boolean>>(
        Object.keys(productChoices).map((productKey: string) => false)
    );
    const handleOnSelect = (index: number) => {
        setSelected((previousSelected) => {
            const newSelected = [...previousSelected];
            newSelected[index] = !newSelected[index];
            return newSelected;
        });
        console.log(selected);
    };
    const handleOnNavigate = (isForward: boolean) => {
        const check = pageChangeCheck(isForward, currentPage);
        console.log(check);
        dispatch({
            type: "set",
            field: "currentPage",
            payload: check !== undefined ? check : currentPage,
        });
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
        <div className="relative text-black m-auto font-bold">
            <div className="text-5xl my-2 drop-shadow-sm">
                Select product(s)
            </div>
            <div className="grid grid-cols-2 gap-2 justify-between">
                {productChoices.map(
                    (
                        productChoice: { title: string; color: string },
                        index: number
                    ) => {
                        return (
                            <button
                                onClick={() => handleOnSelect(index)}
                                className={`flex-1 rounded-full duration-500 font-normal
                                text-white p-5 text-2xl hover:scale-105 transition shadow-md ${
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
            <button
                onClick={() => handleOnNavigate(false)}
                className="absolute -left-10 top-0 bottom-0"
            >
                <svg
                    className="w-7 h-7 hover:fill-orange-500 hover:scale-110 duration-500 transition fill-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                >
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
            </button>
            <button
                onClick={() => handleOnNavigate(true)}
                className="absolute -right-10 top-0 bottom-0"
            >
                <svg
                    className="w-7 h-7 hover:fill-orange-500 hover:scale-110 duration-500 transition fill-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                >
                    <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
            </button>
            <div className="my-10">
                <PagesDot currentPage={currentPage} totalPages={3} />
            </div>
        </div>
    );
};

export default SelectProductPage;

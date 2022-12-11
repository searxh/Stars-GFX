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
    const [errorMessageVisible, setErrorMessageVisible] =
        React.useState<boolean>(false);
    const handleOnSelect = (index: number) => {
        setSelected((previousSelected) => {
            const newSelected = [...previousSelected];
            newSelected[index] = !newSelected[index];
            return newSelected;
        });
        console.log(selected);
    };
    const handleOnNavigate = (isForward: boolean) => {
        if (selected.find((bool: boolean) => bool) === undefined && isForward) {
            setErrorMessageVisible(true);
            setTimeout(() => setErrorMessageVisible(false), 2000);
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
                <div className="text-5xl my-2 drop-shadow-sm font-bold">
                    Select product(s)
                </div>
                <div
                    className={`absolute left-0 right-0 -bottom-6 text-2xl 
                drop-shadow-sm text-red-500 transition duration-500 whitespace-nowrap ${
                    errorMessageVisible ? "opacity-100" : "opacity-0"
                }`}
                >
                    At least one product needs to be selected in order to
                    continue
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 justify-between my-10">
                {productChoices.map(
                    (
                        productChoice: { title: string; color: string },
                        index: number
                    ) => {
                        return (
                            <button
                                onClick={() => handleOnSelect(index)}
                                className={`flex-1 rounded-full duration-500
                                text-white p-5 text-2xl hover:scale-[102%] transition shadow-md ${
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
                    duration-500 transition text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                >
                    Back
                </button>
                <button
                    onClick={() => handleOnNavigate(true)}
                    className="text-orange-500 border-orange-500 hover:scale-110 hover:text-sky-500 w-40
                    duration-500 transition text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                >
                    Next
                </button>
            </div>
            <div className="my-10">
                <PagesDot currentPage={currentPage} totalPages={3} />
            </div>
        </div>
    );
};

export default SelectProductPage;

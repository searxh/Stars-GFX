import React from "react";
import { GlobalContext } from "../../states";
import { productChoices, initialProductInfo } from "../../lib/default";
import { pageChangeCheck } from "../../lib/utilities";
import { PagesDot } from "../PagesDot";

const Page1 = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { formInfo, currentPage } = global_state;
    const [selected, setSelected] = React.useState<Array<boolean>>([
        false,
        false,
        false,
    ]);
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
                newFormInfo[productChoices[index].title] = initialProductInfo;
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
            <div className="text-5xl my-2">Select product(s)</div>
            <div className="flex justify-between">
                {productChoices.map(
                    (
                        productChoice: { title: string; text: string },
                        index: number
                    ) => {
                        return (
                            <button
                                onClick={() => handleOnSelect(index)}
                                className={`flex-1 mx-1 rounded-lg bg-orange-500 duration-500
                                text-white p-5 text-2xl hover:scale-105 transition ${
                                    selected[index]
                                        ? "opacity-100"
                                        : "opacity-50"
                                }`}
                            >
                                {productChoice.title}
                            </button>
                        );
                    }
                )}
            </div>
            <button
                onClick={() => handleOnNavigate(false)}
                className="absolute -left-10"
            >
                {"<"}
            </button>
            <button
                onClick={() => handleOnNavigate(true)}
                className="absolute -right-10"
            >
                {">"}
            </button>
            <div className="my-10">
                <PagesDot currentPage={currentPage} totalPages={3} />
            </div>
        </div>
    );
};

export default Page1;

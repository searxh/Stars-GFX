import React from "react";
import ProductSelect from "../ProductSelect";
import {
    calculatePrice,
    convertUSDtoRobux,
    isSignedIn,
    pageChangeCheck,
} from "../../../lib/utilities";
import { ConfirmationContext } from "../../../confirmation";
import { GlobalContext } from "../../../states";
import { authLink, signUpMessage } from "../../../lib/default";

const CustomizePage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { setTrigger, setAcceptCallback, setMessage } =
        React.useContext(ConfirmationContext);
    const { formInfo, currentPage } = global_state;
    const [price, setPrice] = React.useState<{
        value: number;
        discountPercent: number;
    }>({ value: 0, discountPercent: 0 });
    const handleNext = () => {
        if (isSignedIn()) {
            handleOnNavigate(true);
        } else {
            setTrigger(true);
            setMessage(signUpMessage);
            const callback = () => {
                const randomString = crypto.randomUUID();
                dispatch({
                    type: "set",
                    field: "stateId",
                    payload: randomString,
                });
                window.location.href = authLink + "&state=" + randomString;
            };
            setAcceptCallback(() => callback);
        }
    };
    const handleOnNavigate = (isForward: boolean) => {
        const check = pageChangeCheck(isForward, currentPage);
        dispatch({
            type: "set",
            field: "currentPage",
            payload: check !== undefined ? check : currentPage,
        });
    };
    React.useEffect(() => {
        setPrice(calculatePrice(formInfo));
    }, [formInfo]);
    return (
        <div className="text-4xl lg:text-5xl text-black m-auto font-bold w-full">
            <div className="py-2 drop-shadow-sm">Customize</div>
            {Object.keys(formInfo).map((formInfoKey: string, index: number) => {
                return (
                    <div
                        key={index}
                        className="p-5 min-w-[21rem] w-[60%] mx-auto border-black border-2 rounded-3xl my-5 shadow-md"
                    >
                        <ProductSelect currentProduct={formInfoKey} />
                    </div>
                );
            })}
            <div className="drop-shadow-sm">
                <div className="">${Math.round(price.value)}</div>
                <div className="text-base -mt-2 mb-2">
                    ⏣{convertUSDtoRobux(price.value)}
                </div>
                {price.discountPercent !== 0 && (
                    <div className="text-xl lg:text-2xl px-5 pb-3 -mt-2 rounded-full w-fit m-auto text-green-600">
                        Save {Math.round(price.discountPercent)}%!
                    </div>
                )}
            </div>
            <div className="flex justify-evenly pb-12">
                <button
                    onClick={() => handleOnNavigate(false)}
                    className="text-orange-500 border-orange-500 md:hover:scale-110 md:hover:text-sky-500 w-40 font-normal
                    duration-500 transform-gpu text-2xl lg:text-3xl drop-shadow-sm border-2 md:hover:border-sky-500 rounded-full"
                >
                    Back
                </button>
                <button
                    onClick={handleNext}
                    className="text-orange-500 border-orange-500 md:hover:scale-110 md:hover:text-sky-500 w-40 font-normal
                        duration-500 transform-gpu text-2xl lg:text-3xl drop-shadow-sm border-2 md:hover:border-sky-500 rounded-full"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CustomizePage;

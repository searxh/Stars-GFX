import React from "react";
import { GlobalContext } from "../../../states";
import { pageChangeCheck } from "../../../lib/utilities";

const TermsPage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { currentPage } = global_state;
    const handleOnNavigate = (isForward: boolean) => {
        const check = pageChangeCheck(isForward, currentPage);
        dispatch({
            type: "set",
            field: "currentPage",
            payload: check !== undefined ? check : currentPage,
        });
    };
    return (
        <div className="text-5xl text-black m-auto w-[60%]">
            <div className="text-5xl my-1 drop-shadow-sm font-bold">
                Terms and Conditions
            </div>
            <div className="text-lg mb-2 border-b-[2px] pb-5">
                They are there to help prevent conflicts between both the client
                and the designer
            </div>
            <div className="text-xl my-8 drop-shadow-sm w-[70%] m-auto text-left">
                1. Upfront payment must be included for queueing.
                <br />
                2. Refunding cannot be done once purchased.
                <br />
                3. When the final works are finished only a maximum of 3 fixes
                are allowed.
                <br />
                4. There can be no further edits on the final works when given,
                i.e, removing watermarks, editing the contrast, saturation of
                the image and etc.
            </div>
            <div className="flex justify-evenly">
                <button
                    onClick={() => handleOnNavigate(false)}
                    className="text-orange-500 border-orange-500 hover:scale-110 hover:text-sky-500 w-40
                    duration-500 transition text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                >
                    Decline
                </button>
                <button
                    onClick={() => handleOnNavigate(true)}
                    className="text-orange-500 border-orange-500 hover:scale-110 hover:text-sky-500 w-40
                    duration-500 transition text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default TermsPage;

import React from "react";
import { PagesDot } from "../../PagesDot";
import { GlobalContext } from "../../../states";
import { pageChangeCheck } from "../../../lib/utilities";

const TermsPage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { formInfo, currentPage } = global_state;
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
            TermsPage
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
            <div className="my-10">
                <PagesDot currentPage={currentPage} totalPages={4} />
            </div>
        </div>
    );
};

export default TermsPage;

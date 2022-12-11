import React from "react";
import { PagesDot } from "../components/PagesDot";
import Page1 from "../components/commissions/Page1";
import Page2 from "../components/commissions/Page2";
import { GlobalContext } from "../states";
import { pageChangeCheck } from "../lib/utilities";

const Commissions = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { currentPage } = global_state;
    return (
        <div
            className="flex flex-col pt-12 w-full min-h-screen h-full
            font-nunito bg-neutral-100 text-center"
        >
            {currentPage === 0 ? (
                <div className="relative text-5xl text-black m-auto font-bold">
                    <div className="-mb-2 px-10 drop-shadow-sm">
                        Passion led to you.
                    </div>
                    <img
                        src="/images/pltu.webp"
                        alt=""
                        className="w-1/2 m-auto brightness-[101%]"
                    />
                    <button
                        onClick={() => {
                            const check = pageChangeCheck(true, currentPage);
                            dispatch({
                                type: "set",
                                field: "currentPage",
                                payload: check ? check : currentPage,
                            });
                        }}
                        className="text-orange-500 hover:scale-110 hover:text-sky-500 duration-500 transition text-3xl drop-shadow-sm"
                    >
                        Start
                    </button>
                    <div className="my-10">
                        <PagesDot currentPage={currentPage} totalPages={3} />
                    </div>
                </div>
            ) : currentPage === 1 ? (
                <Page1 />
            ) : currentPage === 2 ? (
                <Page2 />
            ) : null}
        </div>
    );
};

export default Commissions;

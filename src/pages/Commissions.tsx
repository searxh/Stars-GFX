import React from "react";
import { PagesDot } from "../components/PagesDot";
import SelectProductPage from "../components/commissions/pages/SelectProductPage";
import CustomizePage from "../components/commissions/pages/CustomizePage";
import { GlobalContext } from "../states";
import { pageChangeCheck } from "../lib/utilities";
import TermsPage from "../components/commissions/pages/TermsPage";
import FormPage from "../components/commissions/pages/FormPage";
import CompletePage from "../components/commissions/pages/CompletePage";

const Commissions = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { currentPage } = global_state;
    return (
        <div
            className="flex flex-col pt-12 w-full min-h-screen h-full
            font-nunito bg-neutral-100 text-center"
        >
            {currentPage === 0 ? (
                <div className="relative text-5xl text-black m-auto">
                    <div className="-mb-2 px-10 drop-shadow-sm font-bold">
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
                        className="text-orange-500 border-orange-500 hover:scale-110 hover:text-sky-500 w-40
                        duration-500 transition text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                    >
                        Start
                    </button>
                </div>
            ) : currentPage === 1 ? (
                <TermsPage />
            ) : currentPage === 2 ? (
                <SelectProductPage />
            ) : currentPage === 3 ? (
                <CustomizePage />
            ) : currentPage === 4 ? (
                <FormPage />
            ) : currentPage === 5 ? (
                <CompletePage />
            ) : null}
            {currentPage !== 5 && (
                <div className="my-10">
                    <PagesDot currentPage={currentPage} totalPages={5} />
                </div>
            )}
        </div>
    );
};

export default Commissions;

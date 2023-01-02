import React from "react";
import { PagesDot } from "../components/PagesDot";
import SelectProductPage from "../components/commissions/pages/SelectProductPage";
import CustomizePage from "../components/commissions/pages/CustomizePage";
import { GlobalContext } from "../states";
import { pageChangeCheck } from "../lib/utilities";
import TermsPage from "../components/commissions/pages/TermsPage";
import FormPage from "../components/commissions/pages/FormPage";
import CompletePage from "../components/commissions/pages/CompletePage";
import { getOwnerStatus } from "../lib/api";
import { OwnerStatusType } from "../types";
import { userRate } from "../lib/default";
import Footer from "../components/Footer";

const Commissions = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { currentPage } = global_state;
    const [ownerStatus, setOwnerStatus] =
        React.useState<OwnerStatusType | null>(null);
    const getObjects = () => {
        getOwnerStatus().then((res) => {
            setOwnerStatus(res as OwnerStatusType);
        });
    };
    React.useEffect(() => {
        if (currentPage === 0) {
            getObjects();
            const periodicFetch = setInterval(() => {
                getObjects();
            }, userRate);
            return () => clearInterval(periodicFetch);
        }
    }, [currentPage]);
    return (
        <div
            className="relative flex flex-col py-12 w-full min-h-screen h-full
            font-nunito bg-neutral-100 text-center overflow-hidden"
        >
            {currentPage === 0 ? (
                <div className="relative text-4xl lg:text-5xl text-black m-auto">
                    <div className="px-3 my-2 drop-shadow-sm font-bold leading-8">
                        Passion led to you.
                    </div>
                    {ownerStatus ? (
                        <div
                            className={`${
                                ownerStatus.status
                                    ? "text-green-500"
                                    : "text-red-500"
                            } text-base lg:text-lg font-semibold px-5`}
                        >
                            {ownerStatus.status
                                ? `Star is currently open for commissions (${ownerStatus.num}/3)`
                                : `Star is currently not accepting commissions (${ownerStatus.num}/3)`}
                        </div>
                    ) : null}
                    <img
                        src="/images/pltu.gif"
                        alt=""
                        draggable={false}
                        className="max-w-[20rem] aspect-square mt-5 w-screen m-auto brightness-[101%] rounded-full drop-shadow-md"
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
                <div className="my-5">
                    <PagesDot currentPage={currentPage} totalPages={5} />
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Commissions;

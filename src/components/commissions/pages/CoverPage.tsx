import React from "react";
import { GlobalContext } from "../../../states";
import { getOwnerStatus } from "../../../lib/api";
import { OwnerStatusType } from "../../../types";
import { userRate } from "../../../lib/default";
import { pageChangeCheck } from "../../../lib/utilities";

const CoverPage = () => {
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
        <div className="relative text-4xl lg:text-5xl text-black m-auto">
            <div className="px-3 my-2 drop-shadow-sm font-bold leading-8">
                Passion led to you.
            </div>
            {ownerStatus ? (
                <div
                    className={`${
                        ownerStatus.status ? "text-green-500" : "text-red-500"
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
                className="max-w-[18rem] aspect-square my-6 w-screen m-auto brightness-[101%] rounded-full drop-shadow-md"
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
    );
};

export default CoverPage;
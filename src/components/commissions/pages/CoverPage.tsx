/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { GlobalContext } from "../../../states";
import { getOwnerStatus } from "../../../lib/api";
import { OwnerStatusType } from "../../../types";
import { maxCommissionNumber, userRate } from "../../../lib/default";
import { pageChangeCheck } from "../../../lib/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useObserver from "../../../hooks/useObserver";

const CoverPage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { currentPage } = global_state;
    const [ownerStatus, setOwnerStatus] =
        React.useState<OwnerStatusType | null>(null);
    const [transition, setTransition] = React.useState<boolean>(false);
    const getObjects = () => {
        getOwnerStatus().then((res) => {
            setOwnerStatus(res as OwnerStatusType);
        });
    };
    const isVisible = useObserver({
        elementId: "pltu-image",
    });
    React.useEffect(() => {
        if (currentPage === 0) {
            getObjects();
            const periodicFetch = setInterval(() => {
                getObjects();
            }, userRate);
            return () => clearInterval(periodicFetch);
        }
    }, [currentPage]);
    React.useEffect(() => {
        if (isVisible && !transition) {
            setTimeout(() => setTransition(true), 500);
        }
    }, [isVisible]);
    return (
        <div
            id="cover-page"
            className={`relative text-4xl lg:text-5xl text-black m-auto transition duration-500`}
        >
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
                        ? `Star is currently open for commissions`
                        : `Star is currently not accepting commissions`}
                </div>
            ) : (
                <div
                    className={`text-sky-500 text-base lg:text-lg font-semibold px-5`}
                >
                    Fetching Star's commission status
                    <FontAwesomeIcon
                        className="ml-2 animate-spin"
                        icon={faSpinner}
                    />
                </div>
            )}
            <img
                id="pltu-image"
                src="/images/pltu.gif"
                alt=""
                draggable={false}
                className={`${
                    transition
                        ? "duration-1000"
                        : isVisible
                        ? "translate-x-20"
                        : "opacity-0 -translate-x-32"
                } max-w-[18rem] aspect-square my-6 w-screen m-auto brightness-[101%] 
                rounded-full drop-shadow-md transition duration-500`}
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
                className="text-orange-500 border-orange-500 md:hover:scale-110 md:hover:text-sky-500 w-40
        duration-500 transition text-3xl drop-shadow-sm border-2 md:hover:border-sky-500 rounded-full"
            >
                Start
            </button>
        </div>
    );
};

export default CoverPage;

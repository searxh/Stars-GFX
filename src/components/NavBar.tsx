/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { all_routes } from "../lib/default";
import { checkAdmin } from "../lib/utilities";
import { GlobalContext } from "../states";
import DiscordProfile from "./DiscordProfile";
import { updateUserInfoFromSession } from "../lib/api";
import StarLogo from "./StarLogo";
import useMediaQuery from "../hooks/useMediaQuery";

const NavBar = (props: any) => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const [routes, setRoutes] = React.useState<{ [key: string]: string }>(
        all_routes
    );
    const [isTop, setIsTop] = React.useState<boolean>(true);
    const [mobileMenuActive, setMobileMenuActive] =
        React.useState<boolean>(false);
    const [transition, setTransition] = React.useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();
    const getLocationIndex = () => {
        return Object.keys(routes).findIndex((route: string) => {
            return (
                "/" + route === location.pathname ||
                (route.length !== 0 && location.pathname.includes(route))
            );
        });
    };
    const [locationIndex, setLocationIndex] = React.useState(
        getLocationIndex()
    );
    const handleChangeRoute = (selectedRoute: string) => {
        navigate(selectedRoute);
    };
    const handleOnClick = () => {
        navigate("/");
    };
    const transitionLogic = () => {
        if (!transition) {
            return transition;
        } else {
            return mobileMenuActive;
        }
    };
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");
    const isSmallerThanLarge = useMediaQuery("(max-width: 1024px)");
    const isWebservicePage = location.pathname.endsWith("web");

    React.useEffect(() => {
        checkAdmin().then((res) => {
            if (res) {
                const newRoutes: any = { ...routes, dashboard: "Dashboard" };
                delete newRoutes.orders;
                setRoutes(newRoutes);
            } else {
                setRoutes(all_routes);
            }
        });
    }, [location.pathname]);

    React.useEffect(() => {
        const newLocationIndex = getLocationIndex();
        setLocationIndex(newLocationIndex);
        updateUserInfoFromSession(global_state, dispatch, navigate, true);
        if (mobileMenuActive) setMobileMenuActive(false);
    }, [location.pathname, routes]);

    React.useLayoutEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY === 0) {
                setIsTop(true);
            } else {
                setIsTop(false);
            }
        });
        return () =>
            window.removeEventListener("scroll", () => {
                if (window.scrollY === 0) {
                    setIsTop(true);
                } else {
                    setIsTop(false);
                }
            });
    }, []);

    React.useLayoutEffect(() => {
        if (!isSmallerThanMedium) setMobileMenuActive(false);
    }, [isSmallerThanMedium]);

    React.useEffect(() => {
        if (mobileMenuActive) setTimeout(() => setTransition(true), 10);
        else if (!mobileMenuActive) setTimeout(() => setTransition(false), 200);
    }, [mobileMenuActive]);

    return (
        <div
            className={`fixed top-0 flex w-full h-12 bg-opacity-70
             font-nunito backdrop-blur-lg ${
                 isTop
                     ? "bg-transparent"
                     : isWebservicePage
                     ? "bg-black"
                     : "bg-white shadow-md"
             } ${
                isWebservicePage ? "text-white" : "text-black"
            } z-20 justify-evenly transition duration-200`}
        >
            {isSmallerThanMedium ? (
                <button
                    onClick={() => setMobileMenuActive((prev) => !prev)}
                    className="absolute top-0.5 left-2 w-6 h-6 m-2 fill-black z-20"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        {
                            "<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->"
                        }
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>
            ) : null}
            {transition || mobileMenuActive ? (
                <div
                    onClick={() => {
                        setMobileMenuActive((prev) => !prev);
                    }}
                    className={`absolute ${
                        transitionLogic() ? "opacity-100" : "opacity-0"
                    } left-0 w-screen h-screen bg-black bg-opacity-50 transition duration-200`}
                >
                    <div
                        className={`absolute ${
                            transitionLogic()
                                ? "translate-x-0"
                                : "-translate-x-[100px]"
                        } -left-2 w-64 h-screen bg-white shadow-md rounded-xl transform-gpu duration-200`}
                    >
                        <div className="relative text-xl flex flex-col justify-evenly w-full h-full">
                            <StarLogo />
                            <div>
                                {Object.keys(routes).map(
                                    (route: string, index: number) => {
                                        return (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    handleChangeRoute(route)
                                                }
                                                className={`m-auto w-full
                                                py-2 px-5 h-fit font-normal rounded-sm
                                        ${
                                            locationIndex === index
                                                ? "bg-gradient-to-r bg-gray-200"
                                                : ""
                                        }`}
                                            >
                                                {routes[route]}
                                            </button>
                                        );
                                    }
                                )}
                            </div>
                            <div className="mx-auto">
                                <DiscordProfile />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            {!isSmallerThanMedium ? (
                <>
                    {!isSmallerThanLarge ? (
                        <button
                            onClick={handleOnClick}
                            className="w-fit flex justify-center md:hover:scale-110 
                            duration-500 transform-gpu"
                        >
                            <StarLogo />
                        </button>
                    ) : null}

                    <div className="relative flex min-w-[40rem]">
                        {Object.keys(routes).map(
                            (route: string, index: number) => {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleChangeRoute(route)}
                                        className="m-auto w-[20%] md:hover:bg-black md:hover:bg-opacity-5
                                        h-full text-sm transition duration-500 font-normal rounded-md"
                                    >
                                        {routes[route]}
                                    </button>
                                );
                            }
                        )}
                        <div
                            style={{
                                transform: `translateX(${
                                    locationIndex * 100
                                }%)`,
                                width: 100 / Object.keys(routes).length + "%",
                            }}
                            className={`absolute bg-black h-0.5 bottom-0 rounded-full transform-gpu duration-300 ease-in-out`}
                        />
                    </div>
                    <div className="my-auto">
                        <DiscordProfile />
                    </div>
                </>
            ) : null}
            {props.children}
        </div>
    );
};

export default NavBar;

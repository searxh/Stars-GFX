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
import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";

interface MultipleChildrenRoute {
    value: string;
    children: Array<{ [key: string]: string }>;
}

const NavBar = (props: any) => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const [routes, setRoutes] = React.useState<{
        [key: string]: string | MultipleChildrenRoute;
    }>(all_routes);
    const [isTop, setIsTop] = React.useState<boolean>(true);
    const [mobileMenuActive, setMobileMenuActive] =
        React.useState<boolean>(false);
    const [transition, setTransition] = React.useState<boolean>(false);
    const [subRoutes, setSubRoutes] = React.useState<MultipleChildrenRoute>({
        value: "",
        children: [],
    });

    const location = useLocation();
    const navigate = useNavigate();
    const getLocationIndex = () => {
        const index = Object.keys(routes).findIndex((route: string) => {
            return (
                "/" + route === location.pathname.toLowerCase() ||
                (route.length !== 0 &&
                    location.pathname.toLowerCase().includes(route))
            );
        });
        return index;
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
        <motion.div
            animate={{
                height: subRoutes.children.length > 0 ? "5rem" : "3rem",
            }}
            style={{
                WebkitBackdropFilter: "blur(16px)",
            }}
            className={`fixed top-0 flex w-full bg-opacity-70
             font-nunito backdrop-blur-lg ${
                 isWebservicePage
                     ? "bg-black"
                     : isTop
                     ? "bg-neutral-100"
                     : "bg-neutral-100 shadow-md"
             } ${isWebservicePage ? "text-white" : "text-black"} ${
                subRoutes.children.length > 0 ? "shadow-md" : ""
            } z-20 justify-evenly transition duration-200`}
        >
            <motion.div
                onMouseLeave={() => {
                    setSubRoutes({ value: "", children: [] });
                }}
                animate={{
                    top: subRoutes.children.length > 0 ? "2.5rem" : 0,
                    opacity: subRoutes.children.length > 0 ? 1 : 0,
                    zIndex: subRoutes.children.length > 0 ? 10 : 0,
                }}
                className={`fixed flex m-auto h-12 w-full justify-center text-sm`}
            >
                <div className="my-auto font-semibold px-3 text-xs">
                    {subRoutes.value.toUpperCase()}
                </div>
                <Divider orientation="vertical" flexItem variant="middle" />
                {!isSmallerThanMedium && subRoutes.children.length > 0
                    ? subRoutes.children.map((subRoute, index: number) => {
                          const subRouteKey = Object.keys(subRoute)[0];
                          const subRoutePath = `${subRoutes.value}/${subRouteKey}`;
                          return (
                              <button
                                  key={index}
                                  onClick={() =>
                                      handleChangeRoute(subRoutePath)
                                  }
                                  className="w-24 my-auto md:hover:bg-black md:hover:bg-opacity-5 h-fit p-2
                                                transition duration-500 font-normal rounded-md"
                              >
                                  {subRoute[subRouteKey]}
                              </button>
                          );
                      })
                    : null}
            </motion.div>
            {isSmallerThanMedium ? (
                <button
                    onClick={() => setMobileMenuActive((prev) => !prev)}
                    className={`absolute top-0.5 left-2 w-6 h-6 m-2 ${
                        isWebservicePage && !mobileMenuActive
                            ? "fill-white"
                            : "fill-black"
                    } z-20`}
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
                    } left-0 w-screen h-screen text-black bg-black bg-opacity-50 transition duration-200`}
                >
                    <div
                        className={`absolute ${
                            transitionLogic()
                                ? "translate-x-0"
                                : "-translate-x-[100px]"
                        } -left-2 w-64 h-screen bg-neutral-100 shadow-md rounded-xl transform-gpu duration-200`}
                    >
                        <div className="relative text-xl flex flex-col justify-evenly w-full h-full">
                            <StarLogo
                                invert={isWebservicePage && !mobileMenuActive}
                            />
                            <div>
                                {Object.keys(routes).map(
                                    (route: string, index: number) => {
                                        if (
                                            typeof routes[route] !== "string" &&
                                            routes[route]
                                        ) {
                                            const multipleChildrenRoutes =
                                                routes[
                                                    route
                                                ] as MultipleChildrenRoute;
                                            const parentRoute =
                                                multipleChildrenRoutes.value;
                                            const childrenRoutes =
                                                multipleChildrenRoutes.children;
                                            return (
                                                <div className="h-fit text-center text-lg font-normal">
                                                    <div className="px-5 h-fit font-bold text-xl">
                                                        Commissions
                                                    </div>
                                                    {childrenRoutes.map(
                                                        (subRoute) => {
                                                            const subRouteKey =
                                                                Object.keys(
                                                                    subRoute
                                                                )[0];
                                                            const subRoutePath = `${parentRoute}/${subRouteKey}`;
                                                            return (
                                                                <button
                                                                    key={index}
                                                                    onClick={() =>
                                                                        handleChangeRoute(
                                                                            subRoutePath
                                                                        )
                                                                    }
                                                                    className={`mx-auto w-full py-2 px-5 h-fit font-normal 
                                                                        rounded-sm ${
                                                                            locationIndex ===
                                                                            index
                                                                                ? "bg-gradient-to-r bg-gray-200"
                                                                                : ""
                                                                        }`}
                                                                >
                                                                    {
                                                                        subRoute[
                                                                            subRouteKey
                                                                        ]
                                                                    }
                                                                </button>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            );
                                        }
                                        return (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    handleChangeRoute(route)
                                                }
                                                className={`m-auto w-full
                                                py-2 px-5 h-fit font-bold rounded-sm
                                        ${
                                            locationIndex === index
                                                ? "bg-gradient-to-r bg-gray-200"
                                                : ""
                                        }`}
                                            >
                                                {routes[route] as string}
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
                <div className="relative flex gap-2 w-full">
                    {!isSmallerThanLarge ? (
                        <button
                            onClick={handleOnClick}
                            className="absolute top-0 left-5 w-fit flex justify-center md:hover:scale-110 
                            duration-500 transform-gpu"
                        >
                            <StarLogo />
                        </button>
                    ) : null}

                    <div className="absolute top-0 left-0 mx-auto md:right-full lg:right-0 flex w-full md:w-[40rem] h-12">
                        {Object.keys(routes).map(
                            (route: string, index: number) => {
                                if (typeof routes[route] !== "string") {
                                    const multipleChildrenRoutes = routes[
                                        route
                                    ] as MultipleChildrenRoute;
                                    const parentRoute =
                                        multipleChildrenRoutes.value;
                                    return (
                                        <button
                                            onMouseEnter={() => {
                                                setSubRoutes(
                                                    multipleChildrenRoutes
                                                );
                                            }}
                                            className="relative m-auto w-[20%] md:hover:bg-black md:hover:bg-opacity-5
                                        h-full text-sm transition duration-500 font-normal rounded-md"
                                        >
                                            {parentRoute}
                                        </button>
                                    );
                                }
                                return (
                                    <button
                                        key={index}
                                        onMouseEnter={() => {
                                            setSubRoutes({
                                                value: "",
                                                children: [],
                                            });
                                        }}
                                        onClick={() => handleChangeRoute(route)}
                                        className="m-auto w-[20%] md:hover:bg-black md:hover:bg-opacity-5
                                        h-full text-sm transition duration-500 font-normal rounded-md"
                                    >
                                        {routes[route] as string}
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
                    <div className="absolute top-0.5 right-5 my-auto">
                        <DiscordProfile />
                    </div>
                </div>
            ) : null}
            {props.children}
        </motion.div>
    );
};

export default NavBar;

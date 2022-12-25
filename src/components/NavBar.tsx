/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { all_routes } from "../lib/default";
import { checkAdmin } from "../lib/utilities";
import { GlobalContext } from "../states";
import DiscordProfile from "./DiscordProfile";
import { updateUserInfoFromSession } from "../lib/api";
import { clientLink } from "../lib/option";

const NavBar = (props: any) => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const [routes, setRoutes] = React.useState<{ [key: string]: string }>(
        all_routes
    );
    const [isTop, setIsTop] = React.useState<boolean>(false);
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
        setLocationIndex(getLocationIndex());
        updateUserInfoFromSession(global_state, dispatch, navigate, true);
    }, [location.pathname, routes]);
    React.useEffect(() => {
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
    return (
        <div
            className={`fixed top-0 flex w-full h-12 backdrop-blur-lg bg-opacity-70
             font-nunito ${
                 isTop ? "bg-transparent" : "bg-white shadow-md"
             } text-black z-10 justify-evenly transition duration-300`}
        >
            <button
                onClick={handleOnClick}
                className="w-fit flex justify-center hover:scale-110 
                duration-500 transform-gpu"
            >
                <img
                    className="w-8 h-8 m-2"
                    src={`${clientLink}/logo512.png`}
                    alt=""
                />
                <div className="text-2xl my-auto font-nunito font-bold">
                    STAR
                </div>
            </button>
            <div className="relative flex min-w-[30rem]">
                {Object.keys(routes).map((route: string, index: number) => {
                    return (
                        <button
                            key={index}
                            onClick={() => handleChangeRoute(route)}
                            className="m-auto w-[25%] hover:bg-black hover:bg-opacity-10
                            h-full transition duration-500 font-normal hover:shadow-md rounded-sm"
                        >
                            {routes[route]}
                        </button>
                    );
                })}
                <div
                    className={`absolute bg-black h-0.5 bottom-0 rounded-full transform-gpu duration-300 ease-in-out
                ${
                    locationIndex === 0
                        ? "translate-x-[0%]"
                        : locationIndex === 1
                        ? "translate-x-[100%]"
                        : locationIndex === 2
                        ? "translate-x-[200%]"
                        : locationIndex === 3
                        ? "translate-x-[300%]"
                        : null
                }`}
                    style={{
                        width: 100 / Object.keys(routes).length + "%",
                    }}
                />
            </div>
            <DiscordProfile />
            {props.children}
        </div>
    );
};

export default NavBar;

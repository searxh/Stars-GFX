import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { all_routes } from "../App";

const NavBar = (props: any) => {
    const location = useLocation();
    const navigate = useNavigate();
    const getLocationIndex = () => {
        return Object.keys(all_routes).findIndex(
            (route: string) => "/" + route === location.pathname
        );
    };
    const [locationIndex, setLocationIndex] = React.useState(
        getLocationIndex()
    );
    const handleChangeRoute = (selectedRoute: string) => {
        navigate(selectedRoute);
    };
    React.useEffect(() => {
        setLocationIndex(getLocationIndex());
        console.log(locationIndex);
    }, [location.pathname]);
    return (
        <div className="absolute top-0 flex w-full h-12 bg-black font-quicksand justify-evenly shadow-md">
            <div className="flex relative m-auto text-white">
                <img className="w-16 h-12 invert" src="logo.png" alt="" />
                <div className="text-xl my-auto font-bold">STAR</div>
            </div>
            {Object.keys(all_routes).map((route: string) => {
                return (
                    <button
                        onClick={() => handleChangeRoute(route)}
                        className="m-auto text-white hover:scale-110 transition duration-500"
                    >
                        {all_routes[route]}
                    </button>
                );
            })}
            <div
                className={`absolute bg-slate-300 h-1 bottom-0 rounded-full transition duration-300
                ${
                    locationIndex === 0
                        ? "translate-x-[-100%]"
                        : locationIndex === 1
                        ? "translate-x-[0%]"
                        : locationIndex === 2
                        ? "translate-x-[100%]"
                        : locationIndex === 3
                        ? "translate-x-[200%]"
                        : null
                }`}
                style={{
                    width: 100 / (Object.keys(all_routes).length + 1) + "%",
                }}
            />
            {props.children}
        </div>
    );
};

export default NavBar;

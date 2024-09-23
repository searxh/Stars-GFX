import React from "react";
import { useLocation } from "react-router-dom";

const StarLogo = () => {
    const location = useLocation();
    const isWebservicePage = location.pathname.endsWith("web");
    return (
        <div className="flex mx-auto">
            <img
                className={`w-8 h-8 m-2 ${isWebservicePage ? "invert" : ""}`}
                src={`/logo512.png`}
                draggable={false}
                alt=""
            />
            <div className="text-2xl my-auto font-nunito font-bold">STAR</div>
        </div>
    );
};

export default StarLogo;

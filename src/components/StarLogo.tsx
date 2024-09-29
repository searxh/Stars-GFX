import React from "react";

interface StarLog {
    invert?: boolean;
}

const StarLogo = ({ invert = false }: StarLog) => {
    return (
        <div className="flex mx-auto">
            <img
                className={`w-8 h-8 m-2 ${invert ? "invert" : ""}`}
                src={`/logo512.png`}
                draggable={false}
                alt=""
            />
            <div
                className={`text-2xl my-auto font-nunito font-bold ${
                    invert ? "text-white" : "text-black"
                }`}
            >
                STAR
            </div>
        </div>
    );
};

export default StarLogo;

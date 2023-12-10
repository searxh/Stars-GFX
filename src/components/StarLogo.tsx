import React from "react";

const StarLogo = () => {
    return (
        <div className="flex mx-auto">
            <img
                className="w-8 h-8 m-2"
                src={`/logo512.png`}
                draggable={false}
                alt=""
            />
            <div className="text-2xl my-auto font-nunito font-bold">STAR</div>
        </div>
    );
};

export default StarLogo;

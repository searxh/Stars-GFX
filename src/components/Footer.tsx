import React from "react";

const Footer = () => {
    return (
        <div className="absolute left-0 bottom-0 flex w-full h-12 drop-shadow-md text-center">
            <div className="m-auto font-nunito text-sm">
                &copy; Copyright {new Date().getFullYear()} StarsGFX. All rights
                reserved
            </div>
        </div>
    );
};

export default Footer;

import React from "react";

const Footer = () => {
    return (
        <div className="absolute bottom-0 flex w-full h-14 drop-shadow-md text-center">
            <div className="m-auto font-nunito text-sm">
                &copy; Copyright {new Date().getFullYear()} StarsGFX. All rights
                reserved
            </div>
        </div>
    );
};

export default Footer;

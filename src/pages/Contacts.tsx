import React from "react";
import ContactButton from "../components/ContactButton";

const Contacts = () => {
    return (
        <div
            className="flex flex-col w-full h-full pt-12 text-white font-quicksand 
		bg-[url('../public/images/background.png')] bg-cover"
        >
            <img
                className="m-auto h-[20%] w-[20%] my-10"
                src="images/star.png"
                alt=""
            />
            <div className="flex flex-col py-5">
                <ContactButton text="Twitter" imageUrl="" />
            </div>
        </div>
    );
};

export default Contacts;

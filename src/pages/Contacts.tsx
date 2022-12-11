import React from "react";
import ContactButton from "../components/ContactButton";

const Contacts = () => {
    return (
        <div
            className="flex flex-col pt-12 w-full min-h-screen h-full text-white font-nunito 
			bg-gradient-to-t from-orange-500 to-sky-400"
        >
            <img
                className="m-auto h-[25%] w-[25%] my-10 drop-shadow-md"
                src="images/star.png"
                alt=""
            />
            <div className="text-white text-3xl font-nunito font-bold drop-shadow-md text-center my-2">
                Find me on:
            </div>
            <div className="py-5 overflow-x-scroll whitespace-nowrap cursor-grab">
                <ContactButton
                    text="Twitter"
                    imageUrl="/images/contacts_logo/twitter.png"
                    linkTo="https://twitter.com/ooStarwarsbccoo"
                />
                <ContactButton
                    text="YouTube"
                    imageUrl="/images/contacts_logo/youtube.png"
                    linkTo="https://twitter.com/ooStarwarsbccoo"
                />
                <ContactButton
                    text="DevForum"
                    imageUrl="/images/contacts_logo/devforum.png"
                    linkTo="https://twitter.com/ooStarwarsbccoo"
                />
                <ContactButton
                    text="Discord"
                    imageUrl="/images/contacts_logo/discord.png"
                    linkTo="https://twitter.com/ooStarwarsbccoo"
                />
                <ContactButton
                    text="Blog"
                    imageUrl="/images/contacts_logo/blog.png"
                    linkTo="https://twitter.com/ooStarwarsbccoo"
                />
                <ContactButton
                    text="Gumroad"
                    imageUrl="/images/contacts_logo/gumroad.png"
                    linkTo="https://twitter.com/ooStarwarsbccoo"
                />
                <ContactButton
                    text="Instagram"
                    imageUrl="/images/contacts_logo/instagram.png"
                    linkTo="https://twitter.com/ooStarwarsbccoo"
                />
                <ContactButton
                    text="Unsplash"
                    imageUrl="/images/contacts_logo/unsplash.png"
                    linkTo="https://twitter.com/ooStarwarsbccoo"
                />
            </div>
            <img
                className="m-auto h-20 w-25 my-5 drop-shadow-md invert"
                src="images/logo.png"
                alt=""
            />
        </div>
    );
};

export default Contacts;

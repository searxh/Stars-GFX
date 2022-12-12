import React from "react";
import ContactButton from "../components/ContactButton";

const Contacts = () => {
    return (
        <div
            className="flex flex-col pt-12 w-full min-h-screen h-full text-white font-nunito 
			bg-gradient-to-t from-orange-500 to-sky-400 brightness-110"
        >
            <img
                className="m-auto h-[25%] w-[25%] my-10 drop-shadow-md hover:scale-105 duration-500 transition"
                src="images/star.png"
                alt=""
            />
            <div className="text-white text-3xl font-nunito font-bold drop-shadow-md text-center my-2">
                Find me on:
            </div>
            <div className="grid grid-flow-col py-5 overflow-x-scroll whitespace-nowrap cursor-grab">
                <ContactButton
                    text="Twitter"
                    imageUrl="/images/contacts_logo/twitter.png"
                    linkTo="https://twitter.com/ooStarwarsbccoo"
                    desc="I post GFX here"
                />
                <ContactButton
                    text="YouTube"
                    imageUrl="/images/contacts_logo/youtube.png"
                    linkTo="https://www.youtube.com/channel/UC_KPXhWm0RyhlpM1E_SbTuA"
                    desc="I share my process and vlogs"
                />
                <ContactButton
                    text="DevForum"
                    imageUrl="/images/contacts_logo/devforum.png"
                    linkTo="https://devforum.roblox.com/t/close-stars-gfx-gfx-designer/1090212"
                    desc="Roblox Related Forum"
                />
                <ContactButton
                    text="Discord"
                    imageUrl="/images/contacts_logo/discord.png"
                    linkTo="https://discord.gg/WBFkGgf"
                    desc="Join The Star's Community"
                />
                <ContactButton
                    text="Blog"
                    imageUrl="/images/contacts_logo/blog.png"
                    linkTo="https://medium.com/@teerapat310"
                    desc="Weekly Blogs"
                />
                <ContactButton
                    text="Gumroad"
                    imageUrl="/images/contacts_logo/gumroad.png"
                    linkTo="https://stargfx.gumroad.com"
                    desc="My online store"
                />
                <ContactButton
                    text="Instagram"
                    imageUrl="/images/contacts_logo/instagram.png"
                    linkTo="https://www.instagram.com/potential__star/"
                    desc="General Art and Graphic Works"
                />
                <ContactButton
                    text="Unsplash"
                    imageUrl="/images/contacts_logo/unsplash.png"
                    linkTo="https://unsplash.com/@seenyboy"
                    desc="Photography Work"
                />
            </div>
            <img
                className="m-auto h-20 w-20 my-5 drop-shadow-md invert"
                src="images/logo.png"
                alt=""
            />
        </div>
    );
};

export default Contacts;

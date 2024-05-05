import React from "react";
import ContactButton from "../components/ContactButton";
import Footer from "../components/Footer";
import useMediaQuery from "../hooks/useMediaQuery";
import useObserver from "../hooks/useObserver";

const Contacts = () => {
    const isLargerThanMedium = useMediaQuery("(min-width: 786px)");
    const imgIsVisible = useObserver({
        elementId: "contact-img",
    });
    const contactsAreVisible = useObserver({
        elementId: "contact-list",
        delay: 500,
    });
    return (
        <div
            className={`relative flex flex-col justify-evenly py-12 w-full min-h-screen h-full text-white font-nunito 
			bg-gradient-to-t from-orange-500 to-sky-400 brightness-110`}
        >
            <img
                id="contact-img"
                className={`${
                    imgIsVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                } m-auto h-72 lg:h-80 my-10 drop-shadow-md 
                md:hover:scale-105 duration-1000 transition object-contain`}
                src="images/star.webp"
                draggable={false}
                alt=""
            />
            <div
                id="contact-list"
                className={`${
                    contactsAreVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                } transition duration-1000`}
            >
                <div className="text-white text-3xl font-nunito font-bold drop-shadow-md text-center my-2">
                    Find Us on:
                </div>
                <div
                    style={{
                        overflowX: isLargerThanMedium ? "scroll" : undefined,
                    }}
                    className={`mx-auto md:mx-0 grid grid-flow-row duration-1000
                md:grid-flow-col gap-2 py-5 whitespace-nowrap transition`}
                >
                    <ContactButton
                        text="Twitter"
                        imageUrl="/images/contacts_logo/twitter.png"
                        linkTo="https://twitter.com/ooStarwarsbccoo"
                        desc="Keep up to date with news"
                    />
                    <ContactButton
                        text="YouTube"
                        imageUrl="/images/contacts_logo/youtube.png"
                        linkTo="https://www.youtube.com/channel/UC_KPXhWm0RyhlpM1E_SbTuA"
                        desc="Valuable Experiences"
                    />
                        <ContactButton
                        text="Instagram"
                        imageUrl="/images/contacts_logo/instagram.png"
                        linkTo="https://www.instagram.com/teerapatpisitsup/"
                        desc="Personal Life Style"
                    />
                        <ContactButton
                        text="Discord"
                        imageUrl="/images/contacts_logo/discord.png"
                        linkTo="https://discord.gg/WBFkGgf"
                        desc="Join The Star's Community"
                    />
                    <ContactButton
                        text="Talent Hub"
                        imageUrl="/images/contacts_logo/devforum.png"
                        linkTo="https://create.roblox.com/talent/creators/274029164"
                        desc="RobloxDev Forum"
                    />
                    <ContactButton
                        text="Blog"
                        imageUrl="/images/contacts_logo/blog.png"
                        linkTo="https://medium.com/@teerapat310"
                        desc="Insights Blogs"
                    />
                    <ContactButton
                        text="Gumroad"
                        imageUrl="/images/contacts_logo/gumroad.png"
                        linkTo="https://stargfx.gumroad.com"
                        desc="Online store"
                    />
                    <ContactButton
                        text="Unsplash"
                        imageUrl="/images/contacts_logo/unsplash.png"
                        linkTo="https://unsplash.com/@seenyboy"
                        desc="Photography Work"
                    />
                </div>
            </div>
            <img
                className="m-auto h-20 w-20 my-10 drop-shadow-md invert"
                src="images/logo.webp"
                draggable={false}
                alt=""
            />
            <Footer />
        </div>
    );
};

export default Contacts;

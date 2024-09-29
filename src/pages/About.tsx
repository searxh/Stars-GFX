import React, { useLayoutEffect, useRef } from "react";
import ReviewItem from "../components/about/ReviewItem";
import Footer from "../components/Footer";
import { reviews } from "../lib/reviews";
import { ReviewItemType } from "../types";
import ItemWindow from "../components/archives/ItemWindow";
import CustomerProjectsList from "../components/about/customerProjects/List";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import useObserver from "../hooks/useObserver";
import { Carousel } from "react-responsive-carousel";
import useMediaQuery from "../hooks/useMediaQuery";
import useElementSize from "../hooks/useElementSize";

const About = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const navigate = useNavigate();
    const [info, setInfo] = React.useState<any>({});
    const { width } = useElementSize();
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");
    const meetTextVisible = useObserver({
        elementId: "meetText",
    });
    const customerProjectsVisible = useObserver({
        elementId: "customerProjects",
        threshold: 0.55,
    });
    return (
        <div
            className="relative pt-12 w-full min-h-screen h-full
            font-nunito text-center overflow-hidden bg-black"
        >
            <div className="absolute top-0 w-screen bg-neutral-100 h-12" />
            <ItemWindow
                listItem={info}
                callback={() => {
                    setInfo({});
                }}
                imageDirectory="customerProjects"
            />
            <div className="relative w-full mx-auto h-full text-white">
                <div
                    id="meetText"
                    className={`absolute flex flex-col leading-snug top-10 bottom-0 left-0 right-0 m-auto md:top-36 md:left-24 ${
                        meetTextVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-12 opacity-0"
                    } transition duration-1000 z-10 text-center md:text-left drop-shadow-sm`}
                >
                    <div className="text-2xl font-light">Meet Us</div>
                    <div className="text-3xl md:text-5xl font-bold">
                        STARS GFX
                    </div>
                    <div className="text-sm md:text-lg md:max-w-[310px] md:px-0 px-5 font-semibold">
                        A seasoned creative design studio with 8+ years of
                        expertise in game development graphics.
                    </div>
                    <div className="text-base md:max-w-[300px] md:px-0 px-5 font-light pt-5">
                        We specialize in the metaverse for Roblox, Fortnite,
                        Minecraft, and beyond
                    </div>
                    <button
                        onClick={() => navigate("/contacts")}
                        className="flex justify-center mt-6 md:mx-0 mx-auto gap-2 py-1 pl-2 pr-5 bg-neutral-100 hover:text-white
                        rounded-full text-black shadow-md w-fit transform-gpu duration-200 hover:bg-orange-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-8 w-8 my-auto drop-shadow-sm"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                        <div className="my-auto font-semibold">
                            <div>Find us</div>
                        </div>
                    </button>
                </div>
                <video
                    ref={videoRef}
                    preload="auto"
                    loop
                    muted
                    onLoadedData={(e) => {
                        if (videoRef.current) videoRef.current.play();
                    }}
                    className="w-full h-full"
                >
                    <source src="/videos/about.mov" type="video/mp4"></source>
                </video>
                <div className="absolute bottom-0 h-52 w-full bg-gradient-to-t from-slate-900 to-transparent" />
            </div>
            <div className="w-full h-16 bg-slate-900" />
            <div
                className={`relative max-w-screen md:h-[800px] p-5 px-0 text-white bg-gradient-to-r from-blue-700 to-sky-700 
                brightness-110 shadow-md md:overflow-hidden`}
            >
                <div className="absolute top-0 h-60 w-full bg-gradient-to-b from-slate-900 to-transparent" />
                <div
                    id="customerProjects"
                    className={`w-full h-fit mx-auto drop-shadow-sm mt-20 transition duration-1000 ${
                        customerProjectsVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-12 opacity-0"
                    }`}
                >
                    <div className="text-3xl font-bold px-5">
                        Commission Projects
                    </div>
                    <div className="text-lg font-semibold -mt-1">
                        Collaboration with
                    </div>
                    <img
                        className="m-auto h-12 w-12 mb-5 mt-2 drop-shadow-sm invert"
                        src="images/logo.webp"
                        draggable={false}
                        alt=""
                    />
                    <CustomerProjectsList setInfo={setInfo} />
                </div>
            </div>

            <div
                className="w-screen md:h-[35rem] h-full p-5 px-0 text-white bg-gradient-to-r from-blue-700 to-sky-700 
                brightness-110 shadow-md md:overflow-hidden"
            >
                <Carousel
                    axis={isSmallerThanMedium ? "vertical" : "horizontal"}
                    interval={3000}
                    transitionTime={500}
                    infiniteLoop
                    autoPlay
                    centerMode
                    centerSlidePercentage={50}
                    showStatus={false}
                    showIndicators={false}
                    width={width}
                    showThumbs={false}
                    swipeable={false}
                >
                    {reviews.map(
                        (reviewItem: ReviewItemType, index: number) => {
                            return (
                                <ReviewItem
                                    key={index}
                                    reviewItem={reviewItem}
                                />
                            );
                        }
                    )}
                </Carousel>
                <div className="flex w-full px-5">
                    <button
                        onClick={() => navigate("/commissions")}
                        className="flex gap-5 p-5 bg-neutral-100 rounded-2xl text-black shadow-md animate-bounce 
                    md:mb-0 mb-10 mt-14 mx-auto transition duration-500 hover:bg-orange-600 hover:text-white"
                    >
                        <img
                            className="m-auto h-10 w-10 drop-shadow-sm"
                            src="images/logo.webp"
                            draggable={false}
                            alt=""
                        />
                        <div className="text-left my-auto font-semibold">
                            <div className="font-bold">ORDER NOW</div>
                            <div>Become part of the star!</div>
                        </div>
                        <div className="bg-emerald-500 rounded-md py-1.5 px-6 my-auto shadow-md">
                            <PlayArrowIcon className="text-white" />
                        </div>
                    </button>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default About;

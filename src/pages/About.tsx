import React from "react";
import ReviewItem from "../components/about/ReviewItem";
import Footer from "../components/Footer";
import { reviews } from "../lib/reviews";
import { ReviewItemType } from "../types";
import ItemWindow from "../components/archives/ItemWindow";
import CustomerProjectsList from "../components/about/customerProjects/List";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import useObserver from "../hooks/useObserver";

const About = () => {
    const navigate = useNavigate();
    const [info, setInfo] = React.useState<any>({});
    const meetTextVisible = useObserver({
        elementId: "meetText",
    });
    return (
        <div
            className="relative pt-12 w-full min-h-screen h-full
            font-nunito text-center overflow-hidden"
        >
            <ItemWindow
                listItem={info}
                callback={() => {
                    setInfo({});
                }}
                imageDirectory="customerProjects"
            />
            <div className="relative w-full mx-auto h-full md:text-white text-black">
                <div
                    id="meetText"
                    className={`${
                        meetTextVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-12 opacity-0"
                    } transition duration-1000 `}
                >
                    <div className="md:absolute top-5 px-5 left-5 text-lg text-left drop-shadow-sm">
                        Meet Us
                    </div>
                    <div className="md:absolute top-9 px-5 left-5 text-left text-3xl md:text-5xl font-bold drop-shadow-sm">
                        STARS GFX
                    </div>
                    <p
                        className="md:absolute top-24 px-5 pb-5 left-5 text-sm md:text-base  md:max-w-[285px] 
                    text-left drop-shadow-sm font-semibold"
                    >
                        A seasoned creative design studio with 8+ years of
                        expertise in game development graphics.
                    </p>
                </div>
                <img
                    src="/images/about.webp"
                    alt=""
                    draggable={false}
                    className="w-full m-auto"
                />
                <div className="absolute bottom-0 h-52 w-full bg-gradient-to-t from-slate-900 to-transparent" />
            </div>
            <div
                className="relative w-screen md:h-[35rem] p-5 px-0 text-white bg-gradient-to-r from-blue-700 to-sky-700 
                brightness-110 shadow-md md:overflow-hidden"
            >
                <div className="absolute top-0 h-52 w-full bg-gradient-to-b from-slate-900 to-transparent" />
                <div className="w-full h-fit mx-auto drop-shadow-sm">
                    <div className="text-3xl font-bold">
                        Commission Projects
                    </div>
                    <div className="text-lg font-semibold -mt-1">
                        Collaboration with
                    </div>
                    <img
                        className="m-auto h-12 w-12 mb-5 mt-2 drop-shadow-sm invert"
                        src="images/logo.png"
                        draggable={false}
                        alt=""
                    />
                    <CustomerProjectsList setInfo={setInfo} />
                </div>
            </div>
            <div
                className="w-screen md:h-[35rem] p-5 px-0 md:px-5 text-white bg-gradient-to-r from-blue-700 to-sky-700 
                brightness-110 shadow-md md:overflow-hidden"
            >
                <div className="w-full h-fit mx-auto drop-shadow-sm">
                    <div
                        className="md:grid grid-flow-col py-3 w-full h-full
                        md:overflow-y-hidden md:overflow-x-scroll gap-2 mb-12"
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
                    </div>
                </div>
                <button
                    onClick={() => navigate("/commissions")}
                    className="flex gap-5 p-5 bg-gradient-to-r from-neutral-100 to-white rounded-2xl text-black shadow-md mx-auto animate-bounce 
                    md:mb-0 mb-10 transition duration-500"
                >
                    <img
                        className="m-auto h-10 w-10 drop-shadow-sm"
                        src="images/logo.png"
                        draggable={false}
                        alt=""
                    />
                    <div className="my-auto font-semibold">
                        <div className="text-left font-bold">ORDER NOW</div>
                        <div>Become part of the star!</div>
                    </div>
                    <div className="bg-emerald-500 rounded-md py-1.5 px-6 my-auto shadow-md">
                        <PlayArrowIcon className="text-white" />
                    </div>
                </button>
                <Footer />
            </div>
        </div>
    );
};

export default About;

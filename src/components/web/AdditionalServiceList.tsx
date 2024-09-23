import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import useMediaQuery from "../../hooks/useMediaQuery";
import { generateUUID } from "../../lib/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    faCreditCard,
    faDashboard,
    faGear,
    faGlobe,
    faMobile,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

const additionalServiceList = [
    {
        id: generateUUID(),
        title: "SEO Optimization",
        text: "Boost your search rankings and increase visibility.",
        icon: faSearch,
    },
    {
        id: generateUUID(),
        title: "Analytics & Cookie Consent",
        text: "Track your site's performance while maintaining privacy compliance.",
        icon: faDashboard,
    },
    {
        id: generateUUID(),
        title: "Mobile Support",
        text: "Fully responsive designs that look great on any device.",
        icon: faMobile,
    },
    {
        id: generateUUID(),
        title: "Custom Domain Support",
        text: "We'll set up your custom domain for you.",
        icon: faGlobe,
    },
    {
        id: generateUUID(),
        title: "Payment Gateway Integration",
        text: "Secure online payments for e-commerce sites.",
        icon: faCreditCard,
    },
    {
        id: generateUUID(),
        title: "Maintenance Support",
        text: "We offer several levels of ongoing support to ensure your website stays up-to-date",
        icon: faGear,
    },
];

const AdditionalServiceList = () => {
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");
    return (
        <div className="w-full md:h-fit">
            <Carousel
                axis={isSmallerThanMedium ? "vertical" : "horizontal"}
                interval={2000}
                transitionTime={600}
                infiniteLoop
                autoPlay
                centerMode={!isSmallerThanMedium}
                centerSlidePercentage={35}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                className="relative"
                swipeable={true}
                onClickItem={(index, item) => {}}
                renderArrowPrev={(clickHandler, hasNext, label) =>
                    hasNext ? (
                        <button
                            onClick={clickHandler}
                            className="absolute -left-5 top-0 bottom-0 z-10"
                        >
                            <FontAwesomeIcon
                                className="m-auto w-[20px] h-[20px] p-5 rounded-full text-white"
                                icon={faArrowLeft}
                            />
                        </button>
                    ) : (
                        <></>
                    )
                }
                renderArrowNext={(clickHandler, hasNext, label) =>
                    hasNext ? (
                        <button
                            onClick={clickHandler}
                            className="absolute -right-5 top-0 bottom-0 z-10"
                        >
                            <FontAwesomeIcon
                                className="m-auto w-[20px] h-[20px] p-5 rounded-full text-white"
                                icon={faArrowRight}
                            />
                        </button>
                    ) : (
                        <></>
                    )
                }
                renderItem={(
                    item: React.ReactNode,
                    options?:
                        | { isSelected: boolean; isPrevious: boolean }
                        | undefined
                ) => {
                    return (
                        <div
                            style={{
                                transform: options?.isSelected
                                    ? "scale(1.1)"
                                    : options?.isPrevious
                                    ? "rotate3d(0.5, 1, 0.5, -10deg) scale(0.7)"
                                    : "rotate3d(0.5, -1, -0.5, -10deg) scale(0.7)",
                            }}
                            className={`flex h-[30rem] transition duration-500`}
                        >
                            <div className="m-auto">{item}</div>
                        </div>
                    );
                }}
            >
                {additionalServiceList.map((item, index) => {
                    return (
                        <div key={item.id} className="relative">
                            <div className="relative overflow-clip flex flex-col gap-2 h-[15rem] bg-neutral-900 bg-opacity-60 border-[1px] border-neutral-700 p-5 px-10 text-sm rounded-xl">
                                <div className="flex flex-col gap-5 font-semibold text-xl m-auto">
                                    <FontAwesomeIcon
                                        className="m-auto w-[30px] h-[30px] p-4 bg-gradient-to-b from-[#355c7d] to-[#c06c84] shadow-lg shadow-[#c06c84] rounded-xl text-white"
                                        icon={item.icon}
                                    />
                                    <h2 className="leading-6 text-2xl font-bold mx-auto text-center line-clamp-2 z-10">
                                        <span className="text-[#c06c84]">
                                            0{index + 1}
                                        </span>{" "}
                                        {item.title}
                                    </h2>
                                </div>
                                <p className="line-clamp-2 z-10">{item.text}</p>
                            </div>
                            <div
                                style={{
                                    transform: `rotateX(180deg) translateY(38px) scaleY(0.5)`,
                                    filter: "blur(5px) brightness(0.3)",
                                    maskImage: "url(#gradientMask)",
                                }}
                                className="relative overflow-clip flex flex-col gap-2 h-[10rem] bg-neutral-900 bg-opacity-60 border-[1px] border-neutral-700 p-5 px-10 text-sm rounded-xl"
                            >
                                <div className="flex flex-col gap-5 font-semibold text-xl m-auto">
                                    <FontAwesomeIcon
                                        className="m-auto w-[30px] h-[30px] p-4 bg-gradient-to-b from-[#355c7d] to-[#c06c84] shadow-lg shadow-[#c06c84] rounded-xl text-white"
                                        icon={item.icon}
                                    />
                                    <h2 className="leading-6 text-2xl font-bold mx-auto text-center line-clamp-2 z-10">
                                        0{index + 1} {item.title}
                                    </h2>
                                </div>
                                <p className="line-clamp-2 z-10">{item.text}</p>
                            </div>

                            <svg className="absolute left-0 right-0 w-full">
                                <defs>
                                    <mask
                                        id="gradientMask"
                                        maskUnits="objectBoundingBox"
                                        maskContentUnits="objectBoundingBox"
                                    >
                                        <linearGradient
                                            id="grad"
                                            gradientTransform="rotate(90)"
                                        >
                                            <stop
                                                offset="0%"
                                                stopColor="black"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="white"
                                            />
                                        </linearGradient>
                                        <rect
                                            x="0"
                                            y="0"
                                            width="1"
                                            height="1"
                                            fill="url(#grad)"
                                        />
                                    </mask>
                                </defs>
                            </svg>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default AdditionalServiceList;

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Colors } from "../../../lib/colors";
import GlassmorphismCard from "../../GlassmorphismCard";
import StarRounded from "@mui/icons-material/StarRounded";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface Review {
    quote: string;
    rating: number;
    year: number;
    name: string;
    projectName: string;
    description: string;
    profileImage: string;
    websiteImage: string;
    link: string;
}

const reviews: Review[] = [
    {
        quote: "It was a great experience, definitely recommend. very super helpful.",
        rating: 5,
        year: 2025,
        name: "Crackop",
        projectName: "Crackop Portfolio Website",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas doloribus praesentium culpa debitis vero esse quis laboriosam ipsa tempora eaque corporis pariatur corrupti, fugiat incidunt excepturi quia nulla ex.",
        profileImage: "/images/woman.png",
        websiteImage: "/images/custom_UI.png",
        link: "",
    },
    {
        quote: "It was a great experience, definitely recommend. very super helpful.",
        rating: 4,
        year: 2025,
        name: "Crackop",
        projectName: "Crackop Portfolio Website",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas doloribus praesentium culpa debitis vero esse quis laboriosam ipsa tempora eaque corporis pariatur corrupti, fugiat incidunt excepturi quia nulla ex.",
        profileImage: "/images/woman.png",
        websiteImage: "/images/custom_UI.png",
        link: "",
    },
];

const ClientReviewSection = () => {
    const ref = useRef(null);
    const section = useInView(ref);

    return (
        <motion.div
            ref={ref}
            animate={{
                translateX: section ? 0 : 50,
                opacity: section ? 1 : 0,
                filter: section ? "blur(0px)" : "blur(20px)",
            }}
            transition={{
                duration: 0.5,
            }}
            className="flex flex-col gap-6 mx-24"
        >
            <div className="flex flex-col gap-6 text-center w-full h-fit my-auto">
                <div className="font-black text-5xl drop-shadow-md leading-tight">
                    WHAT OUR
                    <br />
                    <span
                        style={{
                            color: Colors.secondary,
                        }}
                        className=""
                    >
                        CLIENTS
                    </span>{" "}
                    SAY
                </div>
                <div className="text-2xl">
                    Here&apos;s what it&apos;s like to work with us straight
                    from the source.
                </div>
            </div>
            <GlassmorphismCard className="w-full py-6">
                <Carousel
                    axis={"horizontal"}
                    interval={2000}
                    transitionTime={600}
                    infiniteLoop
                    centerSlidePercentage={100}
                    showStatus={false}
                    showIndicators={true}
                    showThumbs={false}
                    className="relative"
                    preventMovementUntilSwipeScrollTolerance={true}
                    renderArrowNext={(clickHandler, hasNext) =>
                        hasNext ? (
                            <button
                                onClick={clickHandler}
                                className="absolute right-0 top-0 bottom-0 z-10"
                            >
                                <FontAwesomeIcon
                                    className="m-auto w-[20px] h-[20px] p-5 rounded-full text-white"
                                    icon={faChevronRight}
                                />
                            </button>
                        ) : (
                            <></>
                        )
                    }
                    renderArrowPrev={(clickHandler, hasNext) =>
                        hasNext ? (
                            <button
                                onClick={clickHandler}
                                className="absolute left-0 top-0 bottom-0 z-10"
                            >
                                <FontAwesomeIcon
                                    className="m-auto w-[20px] h-[20px] p-5 rounded-full text-white"
                                    icon={faChevronLeft}
                                />
                            </button>
                        ) : (
                            <></>
                        )
                    }
                    renderIndicator={(onClickHandler, isSelected, index) => {
                        return (
                            <button
                                key={index}
                                onClick={onClickHandler}
                                className={`w-3 h-3 rounded-full mx-1 ${
                                    isSelected
                                        ? "bg-pink-300"
                                        : "bg-neutral-300"
                                }`}
                            />
                        );
                    }}
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
                                        ? "scale(1.0)"
                                        : options?.isPrevious
                                        ? "rotate3d(0.5, 1, 0.5, -10deg) scale(0.7)"
                                        : "rotate3d(0.5, -1, -0.5, -10deg) scale(0.7)",
                                }}
                                className={`flex h-fit transition duration-500 px-8 pb-8`}
                            >
                                <div className="m-auto">{item}</div>
                            </div>
                        );
                    }}
                >
                    {reviews.map((review) => {
                        const {
                            quote,
                            name,
                            year,
                            projectName,
                            description,
                            rating,
                            profileImage,
                            websiteImage,
                            link,
                        } = review;
                        return (
                            <div className="flex gap-6 text-start p-6">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2 text-white">
                                        <div
                                            style={{
                                                color: Colors.primary,
                                            }}
                                            className="text-2xl font-bold"
                                        >
                                            {projectName.toLocaleUpperCase()}
                                        </div>
                                        <div className="text-base">
                                            {description}
                                        </div>
                                    </div>

                                    <img
                                        src={websiteImage}
                                        alt=""
                                        className="object-cover h-[350px] rounded-2xl"
                                    />
                                </div>
                                <div className="flex flex-col gap-6 place-items-end my-auto">
                                    <GlassmorphismCard className="flex gap-10 p-6 w-full">
                                        <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                                            <img
                                                src={profileImage}
                                                alt="profile"
                                                height={100}
                                                width={100}
                                                draggable={false}
                                                className="object-fill"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-8 w-full flex-1">
                                            <div className="flex flex-col gap-2">
                                                <div className="font-bold text-3xl text-white">
                                                    "{quote.toLocaleUpperCase()}
                                                    "
                                                </div>
                                                <div className="flex">
                                                    {[...Array(rating)].map(
                                                        (_) => (
                                                            <StarRounded className="text-yellow-500" />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <div className="ml-auto">
                                                - {name}, {year}
                                            </div>
                                        </div>
                                    </GlassmorphismCard>
                                    <button
                                        style={{
                                            backgroundColor: Colors.secondary,
                                        }}
                                        className="px-6 py-2 text-white w-fit
                                                                rounded-lg md:hover:scale-105 transition shadow-md"
                                        onClick={() => {
                                            window.open(link, "_blank");
                                        }}
                                    >
                                        <div className="font-semibold text-2xl">
                                            Visit now
                                        </div>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </GlassmorphismCard>
        </motion.div>
    );
};

export default ClientReviewSection;

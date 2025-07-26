import React from "react";
import { Colors } from "../../../lib/colors";
import GlassmorphismCard from "../../GlassmorphismCard";
import StarRounded from "@mui/icons-material/StarRounded";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedContainer from "../../AnimatedContainer";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Quote {
    text: string;
    rating: number;
    year: number;
    name: string;
}

interface Review {
    quote?: Quote;
    projectName: string;
    description: string;
    profileImage: string;
    websiteImage: string;
    link: string;
}

const reviews: Review[] = [
    {
        quote: {
            text: "Working with Stars GFX has been an incredible experience, they are super friendly, great at what they do, and definitely worth the price! \nI absolutely love my website they created, and they made it super easy to modify and update it whenever i need!",
            rating: 5,
            year: 2025,
            name: "Crackop",
        },
        projectName: "Crackop Portfolio Website",
        description:
            "Crackop's portfolio website is a sleek, responsive showcase of his work as a Roblox game developer and graphics/UI designer. Built for clarity and performance, the site highlights his projects and creative skills in an engaging, professional format.",
        profileImage: "/images/woman.png",
        websiteImage: "/images/web/crackop.webp",
        link: "https://www.crackop.ca/",
    },
    {
        quote: {
            text: "This service has been great and the communication for this is phenomenal. Any time I had questions regarding anything, they'd get answered very fast. \nThe team behind my company's website were very kind and patient with me through this process which I deeply appreciate! I 100% give this 5 stars, best website ever!",
            rating: 5,
            year: 2025,
            name: "Daiki",
        },
        projectName: "Black Cat Studio Website",
        description:
            "Black Cat Studios' website is an iconic and modern portfolio built to spotlight their Roblox game development work. With a clean layout and immersive visuals, it showcases the studio's creativity, technical talent, and commitment to high-quality gameplay experiences.",
        profileImage: "/images/woman.png",
        websiteImage: "/images/web/blackcat.webp",
        link: "https://www.blackcat.gg/",
    },
    {
        projectName: "Bulk Games Website",
        description:
            "Bulk Games' website is a bold and energetic portfolio designed to highlight their innovative approach to Roblox game development. Featuring dynamic visuals, sharp UI, and engaging content, it reflects the studio's passion for crafting immersive, high-performance gaming experiences that push the boundaries of the platform.",
        profileImage: "/images/woman.png",
        websiteImage: "/images/web/bulkgames.webp",
        link: "https://www.bulkgames.gg/",
    },
];

const ClientReviewSection = () => {
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");
    if (isSmallerThanMedium) {
        return (
            <AnimatedContainer
                options={{
                    rightSlideIn: true,
                }}
                className="flex flex-col gap-6 px-4"
            >
                <div className="flex flex-col gap-6 text-center w-full h-fit my-auto drop-shadow-md">
                    <div className="font-black md:text-5xl text-4xl drop-shadow-md leading-tight">
                        OUR{" "}
                        <span
                            style={{
                                color: Colors.secondary,
                            }}
                            className=""
                        >
                            CLIENTS
                        </span>{" "}
                    </div>
                    <div className="text-lg">
                        Here&apos;s what it&apos;s like to work with us straight
                        from the source.
                    </div>
                </div>
                {reviews.map((review) => {
                    const {
                        quote,
                        projectName,
                        description,
                        profileImage,
                        websiteImage,
                        link,
                    } = review;
                    const { text, year, name, rating } = quote || {};
                    return (
                        <GlassmorphismCard
                            key={projectName}
                            className="flex flex-col gap-6 text-start p-6 h-fit"
                        >
                            <div className={`flex flex-col gap-6 w-full`}>
                                <div className="flex flex-col gap-2 text-white">
                                    <div className="text-xl font-bold">
                                        {projectName.toLocaleUpperCase()}
                                    </div>
                                    <div className="text-sm text-neutral-300">
                                        {description}
                                    </div>
                                </div>
                                <button
                                    style={{
                                        backgroundColor: Colors.secondary,
                                    }}
                                    className="px-6 py-2 text-white w-full
                                                                rounded-lg md:hover:scale-105 transition shadow-md"
                                    onClick={() => {
                                        window.open(link, "_blank");
                                    }}
                                >
                                    <div className="flex gap-2 font-semibold text-xl mx-auto w-fit">
                                        Visit now!
                                        <LaunchRoundedIcon className="m-auto" />
                                    </div>
                                </button>

                                <img
                                    src={websiteImage}
                                    alt=""
                                    className="object-contain h-fit rounded-2xl"
                                />
                            </div>
                            {quote ? (
                                <div className="flex flex-col gap-6 w-full h-full">
                                    <GlassmorphismCard className="flex w-full h-full p-4">
                                        <div className="flex gap-8 m-auto">
                                            <div className="flex flex-col gap-8 w-full flex-1">
                                                <div className="flex flex-col gap-2">
                                                    <div className="font-bold text-base text-white">
                                                        "{text}"
                                                    </div>
                                                    <div className="flex">
                                                        {[...Array(rating)].map(
                                                            (_, index) => (
                                                                <StarRounded
                                                                    key={index}
                                                                    className="text-yellow-500"
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="ml-auto">
                                                    - {name}, {year}
                                                </div>
                                            </div>
                                        </div>
                                    </GlassmorphismCard>
                                </div>
                            ) : null}
                        </GlassmorphismCard>
                    );
                })}
            </AnimatedContainer>
        );
    }

    return (
        <AnimatedContainer
            options={{
                rightSlideIn: true,
            }}
            className="flex flex-col gap-6 px-24"
        >
            <div className="flex flex-col gap-6 text-center w-full h-fit my-auto drop-shadow-md">
                <div className="font-black md:text-5xl text-4xl drop-shadow-md leading-tight">
                    OUR{" "}
                    <span
                        style={{
                            color: Colors.secondary,
                        }}
                        className=""
                    >
                        CLIENTS
                    </span>{" "}
                </div>
                <div className="text-lg">
                    Here&apos;s what it&apos;s like to work with us straight
                    from the source.
                </div>
            </div>
            <GlassmorphismCard className="w-full md:py-6 py-2">
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
                            projectName,
                            description,
                            profileImage,
                            websiteImage,
                            link,
                        } = review;
                        const { text, year, name, rating } = quote || {};
                        return (
                            <div
                                key={projectName}
                                className="flex gap-6 text-start p-6 h-[40rem]"
                            >
                                <div
                                    className={`flex flex-col gap-6 ${
                                        quote ? "w-1/2" : "w-full"
                                    }`}
                                >
                                    <div className="flex flex-col gap-2 text-white">
                                        <div className="text-2xl font-bold">
                                            {projectName.toLocaleUpperCase()}
                                        </div>
                                        <div className="text-base text-neutral-300">
                                            {description}
                                        </div>
                                    </div>
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
                                        <div className="flex gap-2 font-semibold text-xl">
                                            Visit now!
                                            <LaunchRoundedIcon className="m-auto" />
                                        </div>
                                    </button>

                                    <img
                                        src={websiteImage}
                                        alt=""
                                        className="object-cover h-[350px] rounded-2xl"
                                    />
                                </div>
                                {quote ? (
                                    <div className="flex flex-col gap-6 w-1/2 h-full">
                                        <GlassmorphismCard className="flex w-full h-full p-8">
                                            <div className="flex gap-8 m-auto">
                                                <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                                                    <img
                                                        src={profileImage}
                                                        alt="profile"
                                                        height={80}
                                                        width={80}
                                                        draggable={false}
                                                        className="object-fill"
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-8 w-full flex-1">
                                                    <div className="flex flex-col gap-2">
                                                        <div className="font-bold text-xl text-white">
                                                            "{text}"
                                                        </div>
                                                        <div className="flex">
                                                            {[
                                                                ...Array(
                                                                    rating
                                                                ),
                                                            ].map(
                                                                (_, index) => (
                                                                    <StarRounded
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="text-yellow-500"
                                                                    />
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto">
                                                        - {name}, {year}
                                                    </div>
                                                </div>
                                            </div>
                                        </GlassmorphismCard>
                                    </div>
                                ) : null}
                            </div>
                        );
                    })}
                </Carousel>
            </GlassmorphismCard>
        </AnimatedContainer>
    );
};

export default ClientReviewSection;

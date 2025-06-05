import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Colors } from "../../../lib/colors";

const LogoSection = () => {
    const ref = useRef(null);
    const section = useInView(ref);

    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");

    return (
        <div className="flex w-full h-[70vh] md:h-[40rem] mx-auto mx-24">
            <motion.div
                ref={ref}
                animate={{
                    scale: section ? 1 : 0.9,
                    opacity: section ? 1 : 0,
                    filter: section ? "blur(0px)" : "blur(20px)",
                }}
                transition={{
                    duration: 1,
                }}
                className="flex flex-col gap-9 m-auto md:max-w-3xl w-fit"
            >
                <div className="flex gap-4">
                    <img
                        className="w-[76px] h-[76px]"
                        src="/images/web_logo.png"
                        draggable={false}
                        alt=""
                    />
                    <div className="font-bold text-base text-white my-auto">
                        CUSTOM WEB DEVELOPMENT
                        <br /> FOR GAME STUDIOS & CREATIVE BRANDS
                    </div>
                </div>
                <div className="flex flex-col gap-6 h-full w-full">
                    <div className="relative h-[200px] flex flex-col">
                        <div className="flex">
                            <motion.svg
                                width="100%"
                                height="100%"
                                viewBox={"0 0 200 100"}
                                className="relative w-[300px]"
                            >
                                <defs>
                                    <motion.linearGradient
                                        id="gradient"
                                        gradientTransform="rotate(180 0.5 0.5)"
                                        animate={{
                                            gradientTransform: [
                                                "rotate(0 0.5 0.5)",
                                                "rotate(180 0.5 0.5)",
                                            ],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                        }}
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor={Colors.primary}
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor={Colors.secondary}
                                        />
                                    </motion.linearGradient>

                                    {isSmallerThanMedium ? (
                                        <mask id="text-mask">
                                            <text
                                                x="0%"
                                                y="0%"
                                                fontSize={100}
                                                fontWeight={900}
                                                fill="white"
                                            >
                                                STAR
                                            </text>
                                        </mask>
                                    ) : (
                                        <mask id="text-mask">
                                            <text
                                                x="0%"
                                                y="75%"
                                                fontSize={75}
                                                fontWeight={900}
                                                fill="white"
                                            >
                                                STAR
                                            </text>
                                        </mask>
                                    )}
                                </defs>

                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="url(#gradient)"
                                    mask="url(#text-mask)"
                                />
                            </motion.svg>
                            <div
                                style={{
                                    color: Colors.secondary,
                                    fontFamily: "Rubik Wet Paint",
                                }}
                                className="text-[110px]"
                            >
                                GFX
                            </div>
                        </div>
                        <div className="absolute top-32 text-white text-[51px] font-black">
                            WEB DEVELOPMENT
                        </div>
                    </div>

                    <div className="text-xl max-w-md">
                        We build unique, handcrafted websites that capture your
                        identity and grow with you.
                    </div>
                </div>
                <button
                    style={{
                        backgroundColor: Colors.secondary,
                    }}
                    className="px-8 py-2 text-white w-fit
                            rounded-lg md:hover:scale-105 transition shadow-md"
                    onClick={() => {}}
                >
                    <div className="font-semibold text-2xl">Get Started</div>
                </button>
            </motion.div>
            <motion.div
                animate={{
                    scale: section ? 1 : 0.9,
                    opacity: section ? 1 : 0,
                    filter: section ? "blur(0px)" : "blur(20px)",
                }}
                transition={{
                    duration: 1,
                }}
                className="relative flex w-full h-full"
            >
                <img
                    src="/images/star_logo.png"
                    alt=""
                    className="drop-shadow-md w-[300px] h-[300px] z-20 m-auto"
                />
                <div
                    style={{
                        background: `radial-gradient(circle, white 0%, ${Colors.primary} 5%, rgba(0, 0, 0, 0) 60%)`,
                    }}
                    className="absolute top-0 bottom-12 right-0 left-0 m-auto
                h-[1200px] w-full z-10"
                />
                <img
                    src="/images/decor.png"
                    alt=""
                    className="absolute top-0 bottom-24 left-0 right-0 m-auto w-[800px] h-[800px]"
                />
            </motion.div>
        </div>
    );
};

export default LogoSection;

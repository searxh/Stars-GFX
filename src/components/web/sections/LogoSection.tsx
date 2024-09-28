import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";

const LogoSection = () => {
    const ref = useRef(null);
    const section = useInView(ref);

    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");

    return (
        <div className="flex w-full h-[70vh] md:h-[50rem] p-10 mx-auto">
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
                className="flex flex-col gap-2 md:gap-5 m-auto md:max-w-3xl text-center"
            >
                <div className="font-semibold text-base md:text-2xl text-white">
                    Bring Your Vision to Life with Customized Web Solutions
                </div>
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox={
                        isSmallerThanMedium ? "0 0 1000 500" : "0 0 950 300"
                    }
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
                            <stop offset="0%" stopColor="#355c7d" />
                            <stop offset="100%" stopColor="#c06c84" />
                        </motion.linearGradient>

                        {isSmallerThanMedium ? (
                            <mask id="text-mask">
                                <text
                                    x="50%"
                                    y="29%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    fontSize="180"
                                    fontWeight="bold"
                                    fill="white"
                                >
                                    STAR GFX
                                </text>
                                <text
                                    x="50%"
                                    y="60%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    fontSize="180"
                                    fontWeight="bold"
                                    fill="white"
                                >
                                    WEB DEV
                                </text>
                            </mask>
                        ) : (
                            <mask id="text-mask">
                                <text
                                    x="50%"
                                    y="35%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    fontSize="120"
                                    fontWeight="bold"
                                    fill="white"
                                >
                                    STAR GFX WEB
                                </text>
                                <text
                                    x="50%"
                                    y="70%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    fontSize="120"
                                    fontWeight="bold"
                                    fill="white"
                                >
                                    DEVELOPMENT
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

                <div className="text-sm md:text-lg max-w-md mx-auto">
                    We specialize in creating unique, custom-designed websites
                    that go beyond the ordinary.
                </div>
            </motion.div>
        </div>
    );
};

export default LogoSection;

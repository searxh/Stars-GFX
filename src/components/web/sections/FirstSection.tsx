import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const FirstSection = () => {
    const firstRef = useRef(null);
    const firstSection = useInView(firstRef);

    return (
        <div className="flex w-full h-[50rem] p-5 mx-auto">
            <motion.div
                ref={firstRef}
                animate={{
                    scale: firstSection ? 1 : 0.9,
                    opacity: firstSection ? 1 : 0,
                    filter: firstSection ? "blur(0px)" : "blur(20px)",
                }}
                transition={{
                    duration: 1,
                }}
                className="flex flex-col gap-5 m-auto max-w-3xl text-center"
            >
                <div className="font-semibold text-2xl text-white">
                    Bring Your Vision to Life with Customized Web Solutions
                </div>
                <motion.svg width="100%" height="100%" viewBox="0 0 1000 300">
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

                        <mask id="text-mask">
                            <text
                                x="50%"
                                y="32%"
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
                                y="68%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fontSize="120"
                                fontWeight="bold"
                                fill="white"
                            >
                                DESIGN SERVICE
                            </text>
                        </mask>
                    </defs>

                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#gradient)"
                        mask="url(#text-mask)"
                    />
                </motion.svg>

                <div className="text-lg">
                    We specialize in creating unique, custom-designed
                    <br /> websites that go beyond the ordinary.
                </div>
            </motion.div>
        </div>
    );
};

export default FirstSection;

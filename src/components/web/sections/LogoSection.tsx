import { motion } from "framer-motion";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Colors } from "../../../lib/colors";
import AnimatedContainer from "../../AnimatedContainer";

const LogoSection = () => {
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");

    return (
        <div
            style={{
                height: window.innerHeight - 48,
            }}
            className="relative flex w-full md:px-24 px-8 my-auto"
        >
            <AnimatedContainer
                options={{
                    fadeIn: true,
                    blurIn: true,
                    zoomIn: true,
                }}
                className="flex flex-col gap-9 my-auto md:max-w-3xl w-fit z-10"
            >
                <div className="flex gap-4">
                    <img
                        className="w-[76px] h-[76px]"
                        src="/images/web_logo.png"
                        draggable={false}
                        alt=""
                    />
                    <div className="font-bold md:text-base text-sm text-white my-auto drop-shadow-md">
                        <span
                            style={{
                                color: Colors.primary,
                            }}
                        >
                            CUSTOM WEB DEVELOPMENT
                        </span>
                        <br /> FOR GAME STUDIOS & <br />
                        CREATIVE BRANDS
                    </div>
                </div>
                <div className="flex flex-col gap-6 h-full w-full md:text-left text-center">
                    <div className="relative md:h-[200px] h-[280px] flex flex-col drop-shadow-md">
                        <div className="flex md:flex-row flex-col">
                            <motion.svg
                                width="100%"
                                height="100%"
                                viewBox={
                                    isSmallerThanMedium
                                        ? "0 0 135 45"
                                        : "0 0 200 100"
                                }
                                className="relative md:w-[300px] w-[240px] mx-auto"
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
                                                y="90%"
                                                fontSize={50}
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
                                className="md:text-[110px] text-[100px] leading-none md:leading-normal"
                            >
                                GFX
                            </div>
                        </div>
                        <div className="absolute md:top-32 top-[12rem] text-white leading-tight md:text-[51px] text-[31px] font-black">
                            WEB DEVELOPMENT
                        </div>
                    </div>

                    <div className="text-lg max-w-md w-full">
                        We build unique, handcrafted websites that capture your
                        identity and grow with you.
                    </div>
                </div>
                <button
                    style={{
                        backgroundColor: Colors.secondary,
                    }}
                    className="px-8 py-2 text-white md:w-fit w-full
                            rounded-lg md:hover:scale-105 transition shadow-md"
                    onClick={() => {}}
                >
                    <div className="font-semibold text-2xl">Get Started</div>
                </button>
            </AnimatedContainer>
        </div>
    );
};

export default LogoSection;

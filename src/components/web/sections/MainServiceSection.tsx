import { CheckRounded } from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const MainServiceSection = () => {
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
            className="flex flex-col gap-2 m-auto my-[10rem] p-5"
        >
            <div className="font-bold text-2xl md:text-5xl mx-auto drop-shadow-md">
                OUR SERVICES{" "}
            </div>
            <div className="m-auto max-w-2xl mb-5 text-center text-sm md:text-base">
                We offer different tiers of web development services based on
                your needs and project complexity:
            </div>
            <div className="flex flex-col md:flex-row gap-3 drop-shadow-md text-base max-w-5xl">
                <motion.div
                    animate={{
                        transform: section
                            ? "translateX(0)"
                            : "translateX(50%)",
                        opacity: section ? 1 : 0,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.5,
                    }}
                    style={{
                        background: "radial-gradient(#222222, #111111 80%)",
                    }}
                    className="basis-1/3 flex flex-col border-[1px] border-neutral-800 gap-3 rounded-xl p-5 md:p-10 py-12 flex-1 bg-neutral-900 shadow-[#c2788d] shadow-md"
                >
                    <div className="flex flex-col text-sm md:text-base m-auto w-fit h-full text-center text-neutral-300">
                        <div className="font-bold mb-3 text-white">
                            TIER 1:
                            <div className="text-xl md:text-3xl text-[#c2788d]">
                                BASIC
                            </div>
                        </div>
                        <p className="max-w-[90%] mx-auto">
                            Great for personal portfolios and small businesses.
                        </p>
                        <ol className="text-start py-10 text-white">
                            <li className="flex gap-2">
                                <CheckRounded />
                                Up to 4 static pages
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />1 dynamic page
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Admin page
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Up to 1 week free revision period
                            </li>
                        </ol>
                        <div className="text-[#c2788d] mt-auto">
                            Starts at
                            <div className="flex gap-2 font-bold text-xl md:text-3xl w-fit mx-auto">
                                $699
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div
                    style={{
                        background: "radial-gradient(#222222, #111111 80%)",
                    }}
                    className="basis-1/3 flex flex-col border-[1px] border-neutral-800 gap-3 rounded-xl p-10 py-12 flex-1 bg-neutral-900 shadow-[#b8506e] shadow-lg"
                >
                    <div className="flex flex-col text-sm md:text-base m-auto w-fit h-full text-center text-neutral-300 brightness-[110%]">
                        <div className="font-bold mb-3 text-white">
                            TIER 2:
                            <div className="text-xl md:text-3xl text-[#b8506e]">
                                INTERMEDIATE
                            </div>
                        </div>
                        <p className="max-w-[90%] mx-auto">
                            Perfect for blogs, portfolios with regular content
                            updates.
                        </p>
                        <ol className="text-start py-10 text-white">
                            <li className="flex gap-2">
                                <CheckRounded />
                                Up to 10 static pages
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Up to 3 dynamic pages
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Admin page
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                User authentication
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Free responsive design
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Up to 2 weeks free revision period
                            </li>
                        </ol>
                        <div className="text-[#b8506e] mt-auto">
                            Starts at
                            <div className="flex gap-2 font-bold text-xl md:text-3xl w-fit mx-auto">
                                $1199
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div
                    animate={{
                        transform: section
                            ? "translateX(0)"
                            : "translateX(-50%)",
                        opacity: section ? 1 : 0,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.5,
                    }}
                    style={{
                        background: "radial-gradient(#222222, #111111 80%)",
                    }}
                    className="basis-1/3 flex flex-col border-[1px] border-neutral-800 gap-3 rounded-xl p-10 py-12 flex-1 bg-neutral-900 shadow-[#c2375e] shadow-xl"
                >
                    <div className="flex flex-col text-sm md:text-base m-auto w-fit h-full text-center text-neutral-300 brightness-125">
                        <div className="font-bold mb-3 text-white">
                            TIER 3:
                            <div className="text-xl md:text-3xl text-[#c2375e]">
                                ADVANCED
                            </div>
                        </div>
                        <p className="max-w-[90%] mx-auto">
                            Ideal for e-commerce platforms or highly dynamic
                            sites.
                        </p>
                        <ol className="text-start py-10 text-white">
                            <li className="flex gap-2">
                                <CheckRounded />
                                15+ static pages
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                6+ dynamic pages
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Admin page
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                User authentication
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Role-based access control
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Free responsive design
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Free custom domain integration
                            </li>

                            <li className="flex gap-2">
                                <CheckRounded />
                                Up to 1 month free revision period
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Priority service
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Custom assets assistance
                            </li>
                        </ol>
                        <div className="text-[#c2375e] mt-auto">
                            Starts at
                            <div className="flex gap-2 font-bold text-xl md:text-3xl w-fit mx-auto">
                                $3999
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MainServiceSection;

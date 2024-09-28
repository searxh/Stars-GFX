import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const EndingSection = () => {
    const ref = useRef(null);
    const section = useInView(ref);
    return (
        <motion.div
            ref={ref}
            animate={{
                translateX: section ? 0 : -50,
                opacity: section ? 1 : 0,
                filter: section ? "blur(0px)" : "blur(20px)",
            }}
            transition={{
                duration: 1,
            }}
            className="flex flex-col md:flex-row gap-5 w-full h-[25rem] my-[20rem] rounded-lg p-10"
        >
            <div
                className="relative ml-auto my-auto h-[25rem] w-[22rem] object-center shadow-md 
                rounded-lg overflow-hidden drop-shadow-glow"
            >
                <img
                    className="absolute -top-8 bottom-0 w-full h-full scale-[130%]"
                    src="images/landing.webp"
                    draggable={false}
                    alt=""
                />
            </div>
            <div className="flex flex-col text-center md:text-left text-sm md:text-base gap-5 p-5 md:p-12 max-w-[25rem] mr-auto my-auto">
                <div className="font-bold text-3xl md:text-4xl leading-[2rem] md:leading-[2.6rem] bg-gradient-to-l from-[#355c7d] to-[#c06c84] text-gradient">
                    LET'S GET STARTED!
                </div>
                <p>
                    Take your web presence to the next level with STAR GFX WEB
                    DEV.
                </p>
                <p>
                    Ready to start your project or have any questions? Contact
                    us now through discord to discuss your web requirements and
                    get a free quote!
                </p>
                <div className="flex flex-col md:gap-1 md:flex-row font-semibold text-sm md:text-base bg-gradient-to-r from-indigo-700 to-indigo-500 text-white rounded-lg p-2 px-3 text-center">
                    <div className="flex gap-1 mx-auto md:mr-0 md:ml-auto">
                        Contact
                        <span className="font-bold text-sky-300 px-0.5">
                            'star5732'
                        </span>
                    </div>
                    <div className="flex gap-1 text-xs md:text-sm w-fit mx-auto md:ml-0 md:mr-auto my-auto">
                        via Discord
                        <img
                            className="h-5 w-5 rounded-full invert"
                            src="images/contacts_logo/discord.png"
                            draggable={false}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default EndingSection;

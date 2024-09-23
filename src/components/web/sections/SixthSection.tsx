import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const SixthSection = () => {
    const sixthRef = useRef(null);
    const sixthSection = useInView(sixthRef);
    return (
        <motion.div
            ref={sixthRef}
            animate={{
                translateX: sixthSection ? 0 : -50,
                opacity: sixthSection ? 1 : 0,
                filter: sixthSection ? "blur(0px)" : "blur(20px)",
            }}
            transition={{
                duration: 1,
            }}
            className="flex gap-5 w-full h-[25rem] my-[20rem] rounded-lg p-10"
        >
            <div
                className="relative ml-auto my-auto h-[25rem] w-[20rem] object-center shadow-md 
                rounded-lg overflow-hidden drop-shadow-glow"
            >
                <img
                    className="absolute -top-24"
                    src="images/landing1.webp"
                    draggable={false}
                    alt=""
                />
            </div>
            <div className="flex flex-col gap-5 p-12 max-w-[25rem] mr-auto text-left my-auto">
                <div className="font-bold text-4xl leading-[2.6rem] bg-gradient-to-l from-[#355c7d] to-[#c06c84] text-gradient">
                    LET'S GET STARTED!
                </div>
                <p>Take your web presence to the next level with STAR GFX.</p>
                <p>
                    Ready to start your project or have any questions? Contact
                    us now through discord to discuss your web design needs and
                    get a free quote!
                </p>
                <div className="flex font-semibold bg-gradient-to-r from-indigo-700 to-indigo-500 text-white rounded-lg p-2 px-3 text-center">
                    <div className="flex gap-1 mx-auto">
                        Contact
                        <span className="font-bold text-sky-300 px-0.5">
                            'star5732'
                        </span>
                        via Discord
                        <img
                            className="h-6 w-6 rounded-full invert ml-1"
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

export default SixthSection;

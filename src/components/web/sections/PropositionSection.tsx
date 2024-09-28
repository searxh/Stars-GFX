import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const PropositionSection = () => {
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
            className="flex flex-col md:flex-row w-full max-w-[25rem] md:max-w-full h-[30rem] my-[10rem] p-5 mx-auto"
        >
            <div className="relative w-full md:w-[25rem] md:h-[25rem] overflow-visible ml-auto my-auto">
                <img
                    className="md:absolute top-0 left-0 right-0 bottom-0 w-full md:h-[25rem] md:w-[25rem] drop-shadow-glow"
                    src="images/David.webp"
                    alt=""
                    // animate={{
                    //     scale: [1.0, 1.1, 1.1, 1.0],
                    //     rotate: [0, -5, 0, 5, 0],
                    // }}
                    // transition={{
                    //     duration: 20,
                    //     repeat: Infinity,
                    //     repeatDelay: 0,
                    // }}
                />
            </div>
            <div className="flex flex-col gap-5 mr-auto max-w-2xl my-auto p-5">
                <div className="font-bold text-lg md:text-2xl text-center md:text-left">
                    Why Choose STAR GFX?
                </div>
                <div className="text-sm md:text-base max-w-sm">
                    We offer more customization than popular website builders
                    like Carrd, Wix, WordPress, and Webflow. Our sites aren't
                    just templates; they are built from the ground up, ensuring
                    they look better and are truly unique to you.
                </div>
            </div>
        </motion.div>
    );
};

export default PropositionSection;

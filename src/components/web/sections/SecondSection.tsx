import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const SecondSection = () => {
    const secondRef = useRef(null);
    const secondSection = useInView(secondRef);
    return (
        <motion.div
            ref={secondRef}
            animate={{
                translateX: secondSection ? 0 : -50,
                opacity: secondSection ? 1 : 0,
                filter: secondSection ? "blur(0px)" : "blur(20px)",
            }}
            transition={{
                duration: 1,
            }}
            className="flex w-full h-[30rem] my-[10rem] p-5"
        >
            <div className="relative w-[25rem] h-[25rem] overflow-visible ml-auto my-auto">
                <img
                    className="absolute top-0 left-0 right-0 bottom-0 h-[25rem] w-[25rem] drop-shadow-glow"
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
                <div className="font-bold text-2xl">Why Choose STAR GFX?</div>
                <div className="max-w-sm">
                    We offer more customization than popular website builders
                    like Carrd, Wix, WordPress, and Webflow. Our sites aren't
                    just templates; they are built from the ground up, ensuring
                    they look better and are truly unique to you.
                </div>
            </div>
        </motion.div>
    );
};

export default SecondSection;

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import AdditionalServiceList from "../AdditionalServiceList";

const AdditionalServiceSection = () => {
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
            className="flex flex-col gap-3 w-full p-10 my-[10rem]"
        >
            <div className="font-bold text-2xl md:text-5xl mx-auto text-center">
                ADDITIONAL SERVICES
            </div>
            <div className="text-sm md:text-base m-auto w-full md:max-w-2xl mb-5 text-center">
                We also offer optional services to enhance your site. These
                extra features can be added to any web development tier to
                enhance functionality and user experience.
            </div>
            <div className="flex gap-2 w-full max-w-5xl mx-auto">
                <AdditionalServiceList />
            </div>
        </motion.div>
    );
};

export default AdditionalServiceSection;

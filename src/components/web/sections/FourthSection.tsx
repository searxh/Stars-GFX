import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import AdditionalServiceList from "../AdditionalServiceList";

const FourthSection = () => {
    const fourthRef = useRef(null);
    const fourthSection = useInView(fourthRef);
    return (
        <motion.div
            ref={fourthRef}
            animate={{
                translateX: fourthSection ? 0 : -50,
                opacity: fourthSection ? 1 : 0,
                filter: fourthSection ? "blur(0px)" : "blur(20px)",
            }}
            transition={{
                duration: 1,
            }}
            className="flex flex-col gap-3 w-full p-10 my-[20rem]"
        >
            <div className="font-bold text-5xl mx-auto">
                ADDITIONAL SERVICES
            </div>
            <div className="m-auto max-w-2xl mb-5 text-center">
                We also offer optional services to enhance your site. These
                extra features can be added to any web design tier to enhance
                functionality and user experience.
            </div>
            <div className="flex gap-2 w-full max-w-5xl mx-auto">
                <AdditionalServiceList />
            </div>
        </motion.div>
    );
};

export default FourthSection;

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const SeventhSection = () => {
    const seventhRef = useRef(null);
    const seventhSection = useInView(seventhRef);
    return (
        <motion.div
            ref={seventhRef}
            animate={{
                translateX: seventhSection ? 0 : -50,
                opacity: seventhSection ? 1 : 0,
                filter: seventhSection ? "blur(0px)" : "blur(20px)",
            }}
            transition={{
                duration: 1,
            }}
            className="relative flex w-full h-full p-10 mt-[10rem] pb-[10rem] text-center text-white"
        >
            <ul className="flex flex-col gap-5 text-sm list-disc p-5 pb-24 text-left max-w-2xl mx-auto">
                <div className="font-bold text-4xl drop-shadow-md">FAQ</div>{" "}
                <li className="font-semibold text-lg">
                    How long does the whole process take?
                </li>{" "}
                <p>
                    It depends on many factors such as the workload of our team,
                    the response time of our clients during feedbacks, the
                    complexity of the project, etc. But in general you can
                    expect around:
                </p>
                Tier 3: Few months <br />
                Tier 2: Around three weeks to a month <br />
                Tier 1: One to two weeks
                <div />
                <li className="font-semibold text-lg">
                    What if I need changes after the site is launched?
                </li>
                <p>
                    Minor updates are fine, but major changes outside of agreed
                    upon requirements will incur additional costs.
                </p>
                <div />
                <li className="font-semibold text-lg">
                    Do you offer ongoing support?
                </li>{" "}
                <p>
                    Yes! We offer various subscription plans for ongoing
                    updates, maintenance, and security patches.
                </p>
            </ul>
        </motion.div>
    );
};

export default SeventhSection;

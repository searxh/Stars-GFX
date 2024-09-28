import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const FAQSection = () => {
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
            className="relative flex w-full h-full p-5 md:p-10 mt-[10rem] pb-[10rem] text-center text-white"
        >
            <ul className="flex flex-col gap-5 text-sm list-disc p-5 pb-24 text-left max-w-2xl mx-auto">
                <div className="font-bold text-left text-2xl md:text-4xl drop-shadow-md">
                    FAQ
                </div>{" "}
                <li className="font-semibold text-base md:text-lg">
                    How long does the whole process take?
                </li>{" "}
                <div className="flex flex-col gap-2 text-sm md:text-base text-neutral-300">
                    <p>
                        It depends on many factors such as the workload of our
                        team, the response time of our clients during feedbacks,
                        the complexity of the project, etc. But in general you
                        can expect around:
                    </p>
                    <p>
                        Tier 3: Few months to several months <br />
                        Tier 2: Around three weeks to a month <br />
                        Tier 1: One to two weeks
                    </p>
                </div>
                <div />
                <li className="font-semibold text-base md:text-lg">
                    What if I need changes after the site is launched?
                </li>
                <p className="text-sm md:text-base text-neutral-300">
                    Minor updates are fine, but major changes outside of agreed
                    upon requirements will incur additional costs.
                </p>
                <div />
                <li className="font-semibold text-base md:text-lg">
                    Do you offer ongoing support?
                </li>{" "}
                <p className="text-sm md:text-base text-neutral-300">
                    Yes! We offer various subscription plans for ongoing
                    updates, maintenance, and security patches.
                </p>
            </ul>
        </motion.div>
    );
};

export default FAQSection;

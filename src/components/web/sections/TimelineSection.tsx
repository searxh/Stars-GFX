import React, { useRef } from "react";
import useElementSize from "../../../hooks/useElementSize";
import { motion, useInView } from "framer-motion";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
    faCode,
    faComments,
    faContactBook,
    faMoneyBill,
    faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMediaQuery from "../../../hooks/useMediaQuery";

const stepsInfo = [
    {
        stepTitle: "Contact Us",
        details:
            "Let’s discuss your project requirements, timeline, and budget.",
        icon: faContactBook,
    },
    {
        stepTitle: "Sign the Contract",
        details:
            "After discussing the details and finalizing the requirements, we’ll sign a contract and post it on our Discord group for easy access.",
        icon: faPencil,
    },
    {
        stepTitle: "Payment",
        details:
            "After agreeing on the terms, we’ll schedule a payment to ensure everything is on track.",
        icon: faMoneyBill,
    },
    {
        stepTitle: "Design & Feedback",
        details:
            "We start the design process and keep you updated through demos and feedback sessions.",
        icon: faComments,
    },
    {
        stepTitle: "Development & Testing",
        details:
            "Once the design is approved, we move into development and testing, ensuring everything works as expected.",
        icon: faCode,
    },
    {
        stepTitle: "Launch & Support",
        details:
            "After the final approval and payment, we’ll launch your site and offer free bug fixes for up to 3 months.",
        icon: faComments,
    },
];

const TimelineSection = () => {
    const { height, width } = useElementSize("timeline-container");
    const firstItemSize = useElementSize("timeline-first");
    const lastItemSize = useElementSize("timeline-last");

    const ref = useRef(null);
    const section = useInView(ref);

    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");
    return (
        <div
            ref={ref}
            id="fifth-section"
            className="flex flex-col gap-5 w-full h-full p-10 mt-0 my-[10rem] text-white"
        >
            <div className="font-bold text-2xl md:text-5xl mx-auto">
                HOW IT WORKS
            </div>
            <div className="text-sm md:text-base m-auto max-w-2xl mb-10 text-center">
                Our streamlined workflow is designed to bring your project to
                life efficiently and on schedule, with opportunities for
                feedback and revisions along the way.
            </div>
            <div
                id="timeline-container"
                className="relative grid gap-8 w-full mx-auto"
            >
                {stepsInfo.map((stepsItem, index: number) => {
                    return (
                        <div
                            id={
                                index === 0
                                    ? "timeline-first"
                                    : index === stepsInfo.length - 1
                                    ? "timeline-last"
                                    : undefined
                            }
                        >
                            <ListItem
                                index={index + 1}
                                title={stepsItem.stepTitle}
                                details={stepsItem.details}
                                icon={stepsItem.icon as IconDefinition}
                            />
                        </div>
                    );
                })}
                {isSmallerThanMedium ? null : (
                    <motion.div
                        style={{
                            height:
                                height -
                                firstItemSize.height / 2 -
                                lastItemSize.height / 2,
                            left: width / 2 - 2.5,
                        }}
                        animate={{
                            scaleY: section ? 1 : 0,
                            transformOrigin: "top",
                        }}
                        transition={{
                            duration: 5,
                        }}
                        className="absolute w-[3px] mt-[64px] bg-neutral-300 rounded-full"
                    />
                )}
            </div>
        </div>
    );
};

const ListItem = ({
    index,
    title,
    details,
    icon,
}: {
    index: number;
    title: string;
    details: string;
    icon: IconDefinition;
}) => {
    const { width } = useElementSize("timeline-container");
    const isEven = index % 2 === 0;
    const ref = useRef(null);
    const listItemInView = useInView(ref, { amount: 0.5 });
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");
    return (
        <div
            ref={ref}
            style={{
                marginLeft: isSmallerThanMedium ? 0 : isEven ? width / 2 : 0,
                marginRight: isSmallerThanMedium ? 0 : isEven ? 0 : width / 2,
                background: isSmallerThanMedium
                    ? "radial-gradient(#222222, #111111 80%)"
                    : "",
            }}
            className={`${
                isEven || isSmallerThanMedium ? "text-left" : "text-right"
            } relative rounded-lg px-5 md:px-10 border-[1px] border-neutral-800 md:border-none`}
        >
            <motion.div
                animate={{
                    transform: listItemInView ? "scale(1)" : "scale(0.5)",
                }}
                transition={{
                    duration: 1,
                }}
                className={`absolute flex top-0 ${
                    isEven || isSmallerThanMedium
                        ? "-left-[24px]"
                        : "-right-[24px]"
                } w-[48px] h-full z-[5]`}
            >
                <div
                    className="relative outline outline-neutral-300 outline-[3px] md:outline-[5px]
                 bg-neutral-900 rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] my-auto"
                >
                    <FontAwesomeIcon
                        className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[20px] h-[20px] text-neutral-300"
                        icon={icon}
                    />
                </div>
            </motion.div>
            <motion.div
                animate={{
                    filter: listItemInView ? "blur(0px)" : "blur(20px)",
                    opacity: listItemInView ? 1 : 0,
                }}
                transition={{
                    duration: 1,
                }}
                className="px-5 md:px-10 py-4"
            >
                <div
                    className={`text-lg md:text-2xl font-bold ${
                        isEven || isSmallerThanMedium
                            ? "bg-gradient-to-l mr-auto"
                            : "bg-gradient-to-r ml-auto"
                    } from-[#355c7d] to-[#c06c84] text-gradient w-fit`}
                >
                    0{index} {title}
                </div>
                <div
                    className={`${
                        isEven ? "mr-auto" : "ml-auto"
                    } text-xs md:text-sm font-normal max-w-[15rem]`}
                >
                    {details}
                </div>
            </motion.div>
        </div>
    );
};

export default TimelineSection;

import React from "react";
import { GlobalContext } from "../../../states";
import { pageChangeCheck } from "../../../lib/utilities";
import useElementSize from "../../../hooks/useElementSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRightToBracket,
    faClock,
    faPlus,
    faCreditCard,
    faComments,
    faImages,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const stepsInfo = [
    {
        stepTitle: "Create Order",
        details:
            "Choose the specific details and customize your order according to your preferences.",
        icon: faPlus,
    },
    {
        stepTitle: "Submit Order",
        details: "Submit your order request through this Commission Website.",
        icon: faRightToBracket,
    },
    {
        stepTitle: "Wait For Response",
        details:
            "I'll contact you back through your Discord, please note that my response time may be delayed due to time zone differences. Rest assured, I'll get back to you as soon as possible.",
        icon: faClock,
    },
    {
        stepTitle: "Payment",
        details:
            "An upfront payment will be required to secure your order. We will schedule deadlines and finalize all details at this time.",
        icon: faCreditCard,
    },
    {
        stepTitle: "Production and Feedback",
        details:
            "You can expect to receive your product within a few days, depending on the current queue. If you are ordering a large quantity, please allow up to a week for delivery.",
        icon: faComments,
    },
    {
        stepTitle: "Receive Your Product",
        details:
            "Your product is complete! Everything will be sent through Discord, get ready to receive it!",
        icon: faImages,
    },
];

const StepsPage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { currentPage } = global_state;
    const { height } = useElementSize("timeline-container");
    const firstItemSize = useElementSize("timeline-first");
    const lastItemSize = useElementSize("timeline-last");
    const handleOnNavigate = (isForward: boolean) => {
        const check = pageChangeCheck(isForward, currentPage);
        dispatch({
            type: "set",
            field: "currentPage",
            payload: check !== undefined ? check : currentPage,
        });
    };
    return (
        <div>
            <div className="text-4xl lg:text-5xl text-black m-auto font-bold min-w-[21rem] drop-shadow-sm">
                <div className="py-4 drop-shadow-sm">What's the process?</div>
                <div
                    id="timeline-container"
                    className="relative grid gap-8 max-w-[50rem] min-w-[21rem] w-1/2 mx-auto"
                >
                    {stepsInfo.map((stepsItem, index) => {
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
                    <div
                        style={{
                            height:
                                height -
                                firstItemSize.height / 2 -
                                lastItemSize.height / 2,
                        }}
                        className="absolute left-[22px] w-[4px] mt-[64px] bg-sky-400"
                    ></div>
                </div>
                <div className="pt-10 font-semibold text-orange-400 text-lg">
                    If you have any questions or concerns, please do not
                    hesitate to contact me.
                    <br />
                    You can reach me via Discord at STAR#5732.
                </div>
                <div className="flex justify-evenly font-normal max-w-[50rem] min-w-[21rem] w-1/2 mx-auto py-10">
                    <button
                        onClick={() => handleOnNavigate(false)}
                        className="text-orange-500 border-orange-500 md:hover:scale-110 md:hover:text-sky-500 w-40
                            duration-500 transform-gpu text-2xl lg:text-3xl drop-shadow-sm border-2 md:hover:border-sky-500 rounded-full"
                    >
                        Back
                    </button>
                    <button
                        onClick={() => handleOnNavigate(true)}
                        className="text-orange-500 border-orange-500 md:hover:scale-110 md:hover:text-sky-500 w-40
                            duration-500 transform-gpu text-2xl lg:text-3xl drop-shadow-sm border-2 md:hover:border-sky-500 rounded-full"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StepsPage;

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
    return (
        <div className="relative text-left ml-[5rem] rounded-xl py-3 px-5 bg-white shadow-sm">
            <div className="absolute flex top-0 -left-[5rem] w-[48px] h-full z-[1] ">
                <div className="relative border-sky-400 border-4 bg-neutral-100 rounded-full w-[48px] h-[48px] my-auto">
                    <FontAwesomeIcon
                        className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[20px] h-[20px] text-sky-400"
                        icon={icon}
                    />
                </div>
            </div>
            <div className="text-2xl text-neutral-800">
                0{index} {title}
            </div>
            <div className="text-lg font-normal">{details} </div>
        </div>
    );
};

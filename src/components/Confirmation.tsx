import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import React from "react";
import XButton from "./XButton";

interface ConfirmationPropsType {
    title: string;
    content: string;
    decisionCallback: Function;
    trigger: boolean;
}

export const Confirmation = ({
    title,
    content,
    decisionCallback,
    trigger,
}: ConfirmationPropsType) => {
    const handleOnClickDecision = (decision: boolean) => {
        decisionCallback(decision);
    };
    const [transition, setTransition] = React.useState<boolean>(false);
    const transitionLogic = () => {
        if (!transition) {
            return transition;
        } else {
            return trigger;
        }
    };
    React.useEffect(() => {
        if (trigger) {
            //disableBodyScroll(document.body);
            setTimeout(() => setTransition(true), 10);
        } else {
            //clearAllBodyScrollLocks();
            setTimeout(() => {
                setTransition(false);
            }, 300);
        }
    }, [trigger]);
    return trigger || transition ? (
        <div
            className={`${
                transitionLogic() ? "opacity-100 backdrop-blur-lg" : "opacity-0"
            } fixed w-screen h-screen bg-black z-50 bg-opacity-50 transition duration-300`}
        >
            <div
                className="fixed top-0 bottom-0 left-0 right-0 max-w-[25rem] w-[90%] h-fit py-5 text-black font-nunito
                text-2xl bg-white opacity-80 rounded-3xl flex m-auto shadow-md flex-col"
            >
                <XButton
                    closeCallback={() => handleOnClickDecision(false)}
                    className="absolute -top-2 -right-2"
                />
                <div className="m-auto text-center">
                    <div className="text-3xl px-10">{title}</div>
                    <div className="text-base py-8 px-12">{content}</div>
                    <div className="flex w-full justify-evenly">
                        <button
                            className="bg-green-600 px-8 py-2 text-white 
                            rounded-full md:hover:scale-105 transition shadow-md"
                            onClick={() => handleOnClickDecision(true)}
                        >
                            Confirm
                        </button>
                        <button
                            className="bg-red-600 px-8 py-2 text-white 
                            rounded-full md:hover:scale-105 transition shadow-md"
                            onClick={() => handleOnClickDecision(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Confirmation;

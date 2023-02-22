import React from "react";
import useObserver from "../hooks/useObserver";
import SetInfo from "./SetInfo";

interface IProps {
    index: number;
    name: string;
    isSelected: boolean;
    selectCallback: Function;
    details: any;
    color: string;
}

const SetCard = ({
    index,
    name,
    color,
    isSelected,
    selectCallback,
    details,
}: IProps) => {
    const [showInfo, setShowInfo] = React.useState<boolean>(false);
    const isVisible = useObserver({
        elementId: `set-card-${index}`,
        delay: index * 200,
    });
    return (
        <div
            id={`set-card-${index}`}
            className={`${
                isVisible ? "" : `opacity-0 -translate-y-12`
            } transition duration-500 relative`}
        >
            <button
                onClick={() => setShowInfo(true)}
                className={`${
                    isSelected
                        ? "brightness-125 scale-105 border-4"
                        : "bg-opacity-70"
                } relative flex w-52 h-52 ${color} text-white rounded-xl md:hover:scale-95 
                transform-gpu duration-500 shadow-md`}
            >
                <div className="text-5xl m-auto leading-10">
                    {name}
                    <div>Set</div>
                </div>
                <div
                    className={`absolute top-0 bottom-0 left-0 right-0 m-auto rounded-xl -z-10 bg-center
                    bg-[url('../public/images/about.webp')] bg-cover bg-no-repeat opacity-40 blur-sm`}
                ></div>
            </button>
            <SetInfo
                name={name}
                details={details}
                isSelected={isSelected}
                color={color}
                showInfo={showInfo}
                closeCallback={() => setShowInfo(false)}
                selectCallback={selectCallback}
            />
        </div>
    );
};

export default SetCard;

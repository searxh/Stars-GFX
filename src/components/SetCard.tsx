import React from "react";
import SetInfo from "./SetInfo";

interface IProps {
    name: string;
    isSelected: boolean;
    selectCallback: Function;
    details: any;
    color: string;
}

const SetCard = ({
    name,
    color,
    isSelected,
    selectCallback,
    details,
}: IProps) => {
    const [showInfo, setShowInfo] = React.useState<boolean>(false);
    return (
        <div className="relative">
            <button
                onClick={() => setShowInfo(true)}
                className={`${
                    isSelected ? "brightness-125 scale-105" : ""
                } relative flex w-52 h-52 ${color} text-white rounded-xl hover:scale-95 
                transform-gpu duration-500 shadow-md`}
            >
                <div className="text-5xl m-auto leading-10">
                    {name}
                    <div>Set</div>
                </div>
                <div
                    className={`absolute top-0 bottom-0 left-0 right-0 w-[90%] h-[90%] m-auto rounded-xl -z-10 bg-center
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

import React from "react";

interface IProps {
    name: string;
    showInfo: boolean;
    details: any;
    isSelected: boolean;
    color: string;
    closeCallback: Function;
    selectCallback: Function;
}

const SetInfo = ({
    name,
    showInfo,
    details,
    color,
    isSelected,
    selectCallback,
    closeCallback,
}: IProps) => {
    const [z, setZ] = React.useState<number>(0);
    React.useEffect(() => {
        if (!showInfo) {
            setTimeout(() => setZ(-10), 450);
        } else {
            setZ(10);
        }
    }, [showInfo]);
    return (
        <div
            onClick={() => closeCallback()}
            style={{ zIndex: z }}
            className={`${
                showInfo ? "opacity-100" : "opacity-0 -z-10"
            } fixed top-0 bottom-0 left-0 right-0 backdrop-blur-lg 
                w-full h-full transition-opacity duration-500`}
        >
            <div
                className={`${
                    showInfo ? "scale-100 opacity-100" : "scale-0 opacity-0"
                } fixed top-0 bottom-0 left-0 right-0 max-w-[25rem] w-[90%] h-fit py-5 text-black transition duration-500
                text-xl ${color} bg-opacity-90 rounded-3xl flex m-auto shadow-md flex-col p-2 font-normal text-white`}
            >
                <div className="text-5xl font-bold">{name} Set</div>
                <div className="text-2xl font-bold">
                    {details.amount.length === 1 ? (
                        <div>1 Thumbnail/Icon/Ad</div>
                    ) : (
                        <>
                            <div>{details.amount[0]} Icons/Ads</div>
                            <div>{details.amount[1]} Thumbnails</div>
                        </>
                    )}
                </div>
                <div className="pt-5">
                    <div>Resolution: {details.resolution} </div>
                    <div>Models Limit: {details.models}</div>
                    {details.extras ? (
                        <div>Extras: {details.extras}</div>
                    ) : null}
                </div>
                <div className="font-bold p-5">
                    {details.price ? (
                        <div>Price: ${details.price}</div>
                    ) : (
                        <>
                            <div>Icon Price: ${details.icon}</div>
                            <div>Thumbnail Price: ${details.thumbnail}</div>
                        </>
                    )}
                </div>
                <button
                    onClick={() => {
                        selectCallback(name);
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full w-[15rem] 
                    px-5 text-2xl mx-auto font-normal p-1 shadow-md transform-gpu"
                >
                    {isSelected ? "Unselect" : "Select"}
                </button>
            </div>
        </div>
    );
};

export default SetInfo;

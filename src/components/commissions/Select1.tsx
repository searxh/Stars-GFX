import React from "react";

interface SelectPropsInterface {
    choices: Array<{
        title: string;
        text: string;
    }>;
    title: string;
    desc: string;
    changeCallback: Function;
}

const Select1 = ({
    choices,
    title,
    desc,
    changeCallback,
}: SelectPropsInterface) => {
    const [option, setOption] = React.useState<number>(0);
    const handleOnClick = (index: number) => {
        setOption(index);
        changeCallback(choices[option]);
    };
    return (
        <div className="">
            <div className="text-2xl">{title}</div>
            <div className="text-lg font-normal">{desc}</div>
            <div className="flex justify-between">
                {choices.map(
                    (
                        choice: {
                            title: string;
                            text: string;
                        },
                        index: number
                    ) => {
                        return (
                            <button
                                onClick={() => handleOnClick(index)}
                                className={`flex-1 rounded-lg bg-orange-600 text-white
                            py-2 px-3 text-xl m-1 hover:scale-105 duration-500 transition
                            ${option === index ? "opacity-100" : "opacity-50"}`}
                            >
                                <div className="text-3xl font-nunito">
                                    {choice.title.toLocaleUpperCase()}
                                </div>
                                <div className="text-base">{choice.text}</div>
                            </button>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Select1;

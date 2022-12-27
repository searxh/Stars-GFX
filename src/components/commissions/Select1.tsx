import React from "react";

interface SelectPropsInterface {
    choices: Array<{
        title: string;
        text: string;
    }>;
    title: string;
    desc: string;
    color: string;
    changeCallback: Function;
}

const Select1 = ({
    choices,
    title,
    desc,
    color,
    changeCallback,
}: SelectPropsInterface) => {
    const [option, setOption] = React.useState<number>(0);
    const handleOnClick = (index: number) => {
        setOption(index);
        changeCallback(choices[index].title);
    };
    return (
        <div className="">
            <div className="text-xl lg:text-2xl font-extrabold">{title}</div>
            <div className="text-base lg:text-lg font-normal mb-2">{desc}</div>
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
                                key={index}
                                onClick={() => handleOnClick(index)}
                                className={`flex-1 rounded-3xl text-white shadow-md
                            py-2 px-3 text-xl m-1 hover:scale-105 duration-500 transition
                            ${
                                option === index ? "opacity-100" : "opacity-50"
                            } ${color}`}
                            >
                                <div className="text-2xl lg:text-3xl font-normal">
                                    {choice.title.toLocaleUpperCase()}
                                </div>
                                <div className="text-sm lg:text-base font-normal">
                                    {choice.text}
                                </div>
                            </button>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Select1;

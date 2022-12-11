import React from "react";

interface SelectPropsInterface {
    choices: Array<string>;
    title: string;
    desc: string;
    color: string;
    changeCallback: Function;
}

const Select = ({
    choices,
    title,
    desc,
    color,
    changeCallback,
}: SelectPropsInterface) => {
    const [option, setOption] = React.useState<number>(0);
    const handlePageChange = (isForward: boolean) => {
        if (isForward && option + 1 < choices.length) {
            setOption((previousOption) => previousOption + 1);
        } else if (!isForward && option - 1 >= 0) {
            setOption((previousOption) => previousOption - 1);
        }
    };
    React.useEffect(() => {
        changeCallback(choices[option]);
    }, [option]);
    return (
        <div className="w-[80%] m-auto">
            <div className="text-2xl">{title}</div>
            <div className="text-lg font-normal">{desc}</div>
            <div className="flex justify-evenly">
                <button
                    onClick={() => handlePageChange(false)}
                    className="text-2xl"
                >
                    {"<"}
                </button>
                <div className={`${color} text-2xl font-nunito`}>
                    {choices[option]}
                </div>
                <button
                    onClick={() => handlePageChange(true)}
                    className="text-2xl"
                >
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default Select;

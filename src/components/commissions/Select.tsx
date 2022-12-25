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
            changeCallback(choices[option + 1]);
            setOption((previousOption) => previousOption + 1);
        } else if (!isForward && option - 1 >= 0) {
            changeCallback(choices[option - 1]);
            setOption((previousOption) => previousOption - 1);
        }
    };
    return (
        <div className="w-[80%] m-auto">
            <div className="text-2xl">{title}</div>
            <div className="text-lg font-normal">{desc}</div>
            <div className="flex justify-evenly">
                <button
                    onClick={() => handlePageChange(false)}
                    className="text-2xl"
                >
                    <svg
                        className="w-7 h-7 hover:fill-orange-500 hover:scale-110 duration-500 transform-gpu fill-neutral-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                </button>
                <div className={`${color} text-2xl font-nunito`}>
                    {choices[option]}
                </div>
                <button
                    onClick={() => handlePageChange(true)}
                    className="text-2xl"
                >
                    <svg
                        className="w-7 h-7 hover:fill-orange-500 hover:scale-110 duration-500 transform-gpu fill-neutral-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Select;

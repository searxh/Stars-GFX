/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { maxCommissionNumber } from "../../lib/default";

interface InputPropsInterface {
    title: string;
    required: boolean;
    type?: string;
    value: string | undefined;
    changeCallback: Function;
}

const Input = ({
    title,
    required,
    type,
    value,
    changeCallback,
}: InputPropsInterface) => {
    const inputRef = React.useRef<any>(null);
    const handleOnChange = () => {
        if (inputRef.current !== undefined) {
            changeCallback(inputRef.current.value);
        }
    };
    React.useEffect(() => {
        inputRef.current.value = value ? value : "";
    }, []);
    return (
        <div className="flex flex-col text-lg lg:text-xl py-2">
            <div className="text-left py-1 px-2">
                {title}
                {required ? (
                    <span className="text-red-400 ml-2">(required)</span>
                ) : null}
            </div>
            {type === undefined ? (
                <input
                    onChange={handleOnChange}
                    ref={inputRef}
                    className="rounded-full py-2 px-5 text-base lg:text-lg shadow-md border-2"
                />
            ) : type === "textArea" ? (
                <textarea
                    onChange={handleOnChange}
                    rows={maxCommissionNumber}
                    ref={inputRef}
                    className="hide-scrollbar rounded-3xl py-2 px-5 text-base lg:text-lg shadow-md border-2 resize-none"
                />
            ) : null}
        </div>
    );
};

export default Input;

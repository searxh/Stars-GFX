import React from "react";
import { GlobalContext } from "../../../states";
import { pageChangeCheck } from "../../../lib/utilities";
import Input from "../Input";

const FormPage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { currentPage } = global_state;
    const handleOnNavigate = (isForward: boolean) => {
        const check = pageChangeCheck(isForward, currentPage);
        dispatch({
            type: "set",
            field: "currentPage",
            payload: check !== undefined ? check : currentPage,
        });
    };
    return (
        <div className="text-5xl text-black m-auto w-[60%]">
            <div className="text-5xl my-1 mt-10 drop-shadow-sm font-bold">
                Project Background
            </div>
            <form className="pt-5 pb-10">
                <Input
                    title="When is the estimated deadline?"
                    required={true}
                    changeCallback={(value: string) => console.log(value)}
                />
                <Input
                    title="Tell me a little bit about your game"
                    required={true}
                    changeCallback={(value: string) => console.log(value)}
                    type="textArea"
                />
                <Input
                    title="What's your project titled?"
                    required={false}
                    changeCallback={(value: string) => console.log(value)}
                />
                <Input
                    title="Theme Color?"
                    required={false}
                    changeCallback={(value: string) => console.log(value)}
                />
                <Input
                    title="Any provided assets, model or logo?"
                    required={false}
                    changeCallback={(value: string) => console.log(value)}
                />
                <Input
                    title="Any sketches or ideas for this project?"
                    required={false}
                    changeCallback={(value: string) => console.log(value)}
                />
            </form>
            <div className="flex justify-evenly">
                <button
                    onClick={() => handleOnNavigate(false)}
                    className="text-orange-500 border-orange-500 hover:scale-110 hover:text-sky-500 w-40
                    duration-500 transition text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                >
                    Decline
                </button>
                <button
                    onClick={() => handleOnNavigate(true)}
                    className="text-orange-500 border-orange-500 hover:scale-110 hover:text-sky-500 w-40
                    duration-500 transition text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default FormPage;

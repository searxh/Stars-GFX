import React from "react";
import { GlobalContext } from "../../../states";
import { pageChangeCheck } from "../../../lib/utilities";
import Input from "../Input";

const FormPage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { projInfo, currentPage } = global_state;
    const handleSetForm = (index: number, value: string) => {
        const newProjInfo = [...projInfo];
        newProjInfo[index] = value;
        dispatch({
            type: "set",
            field: "projInfo",
            payload: newProjInfo,
        });
    };
    const handleOnNavigate = (isForward: boolean) => {
        const check = pageChangeCheck(isForward, currentPage);
        dispatch({
            type: "set",
            field: "currentPage",
            payload: check !== undefined ? check : currentPage,
        });
    };
    React.useEffect(() => {
        console.log(projInfo);
    }, [projInfo]);
    return (
        <div className="text-5xl text-black m-auto w-[60%]">
            <div className="text-5xl my-1 mt-10 drop-shadow-sm font-bold">
                Project Background
            </div>
            <form className="pt-5 pb-10">
                <Input
                    title="When is the estimated deadline?"
                    required={true}
                    value={projInfo[0]}
                    changeCallback={(value: string) => handleSetForm(0, value)}
                />
                <Input
                    title="Tell me a little bit about your game"
                    required={true}
                    value={projInfo[1]}
                    changeCallback={(value: string) => handleSetForm(1, value)}
                    type="textArea"
                />
                <div className="pb-2 mt-6 border-t-2" />
                <Input
                    title="What's the title of your project?"
                    required={false}
                    value={projInfo[2]}
                    changeCallback={(value: string) => handleSetForm(2, value)}
                />
                <Input
                    title="Any preferred theme colors?"
                    required={false}
                    value={projInfo[3]}
                    changeCallback={(value: string) => handleSetForm(3, value)}
                />
                <Input
                    title="Any provided assets, model or logo?"
                    required={false}
                    value={projInfo[4]}
                    changeCallback={(value: string) => handleSetForm(4, value)}
                />
                <Input
                    title="Any sketches or ideas for this project?"
                    required={false}
                    value={projInfo[5]}
                    changeCallback={(value: string) => handleSetForm(5, value)}
                    type="textArea"
                />
            </form>
            <div className="flex justify-evenly">
                <button
                    onClick={() => handleOnNavigate(false)}
                    className="text-orange-500 border-orange-500 hover:scale-110 hover:text-sky-500 w-40
                    duration-500 transition text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                >
                    Back
                </button>
                <button
                    onClick={() => handleOnNavigate(true)}
                    className="text-orange-500 border-orange-500 hover:scale-110 hover:text-sky-500 w-40
                    duration-500 transition text-3xl drop-shadow-sm border-2 hover:border-sky-500 rounded-full"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default FormPage;

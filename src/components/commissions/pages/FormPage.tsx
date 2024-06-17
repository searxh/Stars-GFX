import React from "react";
import { GlobalContext } from "../../../states";
import { isSignedIn, pageChangeCheck } from "../../../lib/utilities";
import Input from "../Input";
import { initialFormInfo } from "../../../lib/default";
import { createOrder } from "../../../lib/api";
import dompurify from "dompurify";
import Text from "../../Text";

const formData = [
    {
        title: "When is the estimated deadline?",
        required: true,
    },
    {
        title: "Tell me a little bit about your game",
        required: true,
        type: "textArea",
    },
    {
        title: "What's the title of your project?",
        required: false,
    },
    {
        title: "Any preferred theme colors?",
        required: false,
    },
    {
        title: "Any provided assets, model or logo?",
        required: false,
    },
    {
        title: "Any sketches or ideas for this project?",
        required: false,
        type: "textArea",
    },
];

const FormPage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { formInfo, projInfo, userInfo, currentPage, notifier, orders } =
        global_state;
    const [canSubmit, setCanSubmit] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const handleSetForm = (index: number, value: string) => {
        const newProjInfo = [...projInfo];
        newProjInfo[index] = dompurify.sanitize(value);
        dispatch({
            type: "set",
            field: "projInfo",
            payload: newProjInfo,
        });
        if (newProjInfo[0] && newProjInfo[1] && orders < 3) {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }
    };
    const handleOnNavigate = (isForward: boolean) => {
        const check = pageChangeCheck(isForward, currentPage);
        dispatch({
            type: "set",
            field: "currentPage",
            payload: check !== undefined ? check : currentPage,
        });
    };
    const handleOnSubmit = async () => {
        if (isSignedIn()) {
            setLoading(true);
            const result = await createOrder(formInfo, projInfo, userInfo);
            setLoading(false);
            if (result && result.success) {
                dispatch({
                    type: "multi-set",
                    field: ["formInfo", "projInfo", "currentPage", "notifier"],
                    payload: [initialFormInfo, [], currentPage + 1, !notifier],
                });
            } else if (result && !result.success) {
                alert(`Error occurred: ${result.message}`);
            } else {
                alert("Unknown error occured, please resubmit");
            }
        } else {
            alert(
                `Error occurred: Session is expired. Please relogin and try again.`
            );
        }
    };
    return (
        <div className="text-4xl lg:text-5xl text-black m-auto min-w-[21rem] w-[60%]">
            {!loading ? (
                <>
                    <div className="my-1 mt-10 drop-shadow-sm font-bold leading-tight">
                        Project Background
                    </div>
                    <form className="pt-5 pb-10">
                        {formData.map((formDataObj, index: number) => {
                            return (
                                <Input
                                    key={index}
                                    title={formDataObj.title}
                                    required={formDataObj.required}
                                    value={projInfo[index]}
                                    changeCallback={(value: string) =>
                                        handleSetForm(index, value)
                                    }
                                    type={formDataObj.type}
                                />
                            );
                        })}
                    </form>
                    <div className="flex justify-evenly pb-12">
                        <button
                            onClick={() => handleOnNavigate(false)}
                            className="text-orange-500 border-orange-500 md:hover:scale-110 md:hover:text-sky-500 w-40
                    duration-500 transform-gpu text-2xl lg:text-3xl drop-shadow-sm border-2 md:hover:border-sky-500 rounded-full"
                        >
                            Back
                        </button>
                        <button
                            disabled={!canSubmit}
                            onClick={() => handleOnSubmit()}
                            className={`${
                                canSubmit
                                    ? "opacity-100 md:hover:text-sky-500 md:hover:border-sky-500 md:hover:scale-110"
                                    : "opacity-50"
                            } text-orange-500 border-orange-500 w-40 duration-500 transform-gpu text-2xl lg:text-3xl 
                    drop-shadow-sm border-2 rounded-full`}
                        >
                            Submit
                        </button>
                    </div>
                </>
            ) : (
                <Text text="Submitting..." color="text-blue-500" />
            )}
        </div>
    );
};

export default FormPage;

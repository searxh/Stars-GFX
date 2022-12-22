import React from "react";
import { FormObj, StringToAnyType } from "../../types";
interface FormInfoAdminType {
    formObj: FormObj;
}

const keyMapper: StringToAnyType = {
    deadline: "Estimated Deadline",
    game: "Game Summary",
    title: "Project Title",
    color: "Preferred Colors",
    assets: "Provided assets/model/logo",
    ideas: "Project Ideas",
};

const FormInfoAdmin = ({ formObj }: FormInfoAdminType) => {
    const displayCheck = (formObjKey: string) => {
        return (
            keyMapper[formObjKey] !== undefined && formObj[formObjKey] !== null
        );
    };
    return (
        <>
            {Object.keys(formObj).map((formObjKey: string, index: number) => {
                return displayCheck(formObjKey) ? (
                    <div
                        key={index}
                        className="text-left border-b py-3 break-words"
                    >
                        <div className="px-2 font-bold">
                            {keyMapper[formObjKey]}
                        </div>
                        <div className="text-left p-2 rounded-lg">
                            {formObj[formObjKey]}
                        </div>
                    </div>
                ) : null;
            })}
        </>
    );
};

export default FormInfoAdmin;

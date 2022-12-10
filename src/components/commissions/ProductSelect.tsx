import React from "react";
import Select from "./Select";
import {
    resolutionChoices,
    modelLimitChoices,
    numberChoices,
} from "../../lib/default";
import Select1 from "./Select1";
import { GlobalContext } from "../../states";

interface ProductSelectPropsInterface {
    currentProduct: string;
}

const ProductSelect = ({ currentProduct }: ProductSelectPropsInterface) => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { formInfo } = global_state;
    const setProductFormInfo = (field: string, option: string) => {
        if (formInfo[currentProduct] !== undefined) {
            formInfo[currentProduct][field] = option;
            const newFormInfo = { ...formInfo };
            console.log(newFormInfo);
            dispatch({
                type: "set",
                field: "formInfo",
                payload: newFormInfo,
            });
        }
    };
    return (
        <div className="grid grid-flows-row gap-2">
            <div className="text-red-400">{currentProduct}</div>
            <Select1
                choices={resolutionChoices}
                title="Pick resolution"
                desc=""
                changeCallback={(option: string) =>
                    setProductFormInfo("resolution", option)
                }
            />
            <Select1
                choices={modelLimitChoices}
                title="Pick model limit"
                desc="Number of models that need"
                changeCallback={(option: string) =>
                    setProductFormInfo("modelLimit", option)
                }
            />
            <Select
                choices={numberChoices}
                title="How many?"
                desc="Select the number of product that you want. 
                The maximum that you can order at a time is 3."
                changeCallback={(option: string) =>
                    setProductFormInfo("number", option)
                }
            />
        </div>
    );
};

export default ProductSelect;

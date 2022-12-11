import React from "react";
import Select from "./Select";
import {
    resolutionChoices,
    modelLimitChoices,
    numberChoices,
    productChoices,
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
    const getProductColor = () => {
        const res = productChoices.find(
            (productObj: { title: string; color: string }) =>
                productObj.title === currentProduct
        );
        return res !== undefined ? res.color : "bg-slate-500";
    };
    const getProductTextColor = () => {
        const res = productChoices.find(
            (productObj: { title: string; color: string }) =>
                productObj.title === currentProduct
        );
        return res !== undefined ? res.textColor : "text-black";
    };
    return (
        <div className="grid grid-flows-row gap-2">
            <div className={`${getProductTextColor()} text-4xl`}>
                {currentProduct}
            </div>
            <Select1
                choices={resolutionChoices}
                title="Pick resolution"
                desc="Support up to 5k Resolution"
                changeCallback={(option: string) =>
                    setProductFormInfo("resolution", option)
                }
                color={getProductColor()}
            />
            <Select1
                choices={modelLimitChoices}
                title="Pick model limit"
                desc="Expand the design possiblities with unlimited asset"
                changeCallback={(option: string) =>
                    setProductFormInfo("modelLimit", option)
                }
                color={getProductColor()}
            />
            <Select
                choices={numberChoices}
                title="How many?"
                desc="Select the number of product that you want. 
                The maximum that you can order at a time is 3."
                changeCallback={(option: string) =>
                    setProductFormInfo("number", option)
                }
                color={getProductTextColor()}
            />
        </div>
    );
};

export default ProductSelect;

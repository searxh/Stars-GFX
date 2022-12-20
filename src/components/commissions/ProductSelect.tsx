import React from "react";
import Select from "./Select";
import { getProductTextColor, getProductColor } from "../../lib/utilities";
import { selectChoices } from "../../lib/default";
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
            dispatch({
                type: "set",
                field: "formInfo",
                payload: newFormInfo,
            });
        }
    };
    return (
        <div className="grid grid-flows-row gap-3">
            <div
                className={`${getProductTextColor(
                    currentProduct
                )} text-4xl drop-shadow-md`}
            >
                {currentProduct.toLocaleUpperCase()}
            </div>
            <Select1
                choices={selectChoices.resolution}
                title="Pick resolution"
                desc="Support up to 5k Resolution"
                changeCallback={(option: string) =>
                    setProductFormInfo("resolution", option)
                }
                color={getProductColor(currentProduct)}
            />
            <Select1
                choices={selectChoices.modelLimit}
                title="Pick model limit"
                desc="Expand the design possiblities with unlimited asset"
                changeCallback={(option: string) =>
                    setProductFormInfo("modelLimit", option)
                }
                color={getProductColor(currentProduct)}
            />
            <Select1
                choices={selectChoices.additional}
                title="Include additional files?"
                desc="Get a glimpse behind the scenes"
                changeCallback={(option: string) =>
                    setProductFormInfo("additional", option)
                }
                color={getProductColor(currentProduct)}
            />
            <Select
                choices={selectChoices.number}
                title="How many?"
                desc="Select the number of this type of product that you want. 
                The maximum order at a time is three."
                changeCallback={(option: string) =>
                    setProductFormInfo("number", option)
                }
                color={getProductTextColor(currentProduct)}
            />
        </div>
    );
};

export default ProductSelect;

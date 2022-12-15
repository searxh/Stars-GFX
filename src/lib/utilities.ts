import { FormInfoType } from "../types";
import { priceInfo, selectChoices } from "./default";

export const pageChangeCheck = (isForward: boolean, page: number) => {
    if (isForward && page + 1 < 5) {
        return page + 1;
    } else if (!isForward && page - 1 >= 0) {
        return page - 1;
    } else {
        return undefined;
    }
};

export const calculatePrice = (formInfo: FormInfoType) => {
    let sum = 0;
    let productCounter = 0;
    Object.keys(formInfo).forEach((formInfoKey: string) => {
        if (formInfoKey !== "discount") {
            let attributesCost = 0;
            Object.keys(formInfo[formInfoKey]).forEach(
                (formInfoAttributesKey: string) => {
                    if (formInfoAttributesKey !== "number") {
                        const res = selectChoices[
                            formInfoAttributesKey
                        ].findIndex(
                            (choice: { title: string; text: string }) => {
                                return (
                                    choice.title ===
                                    formInfo[formInfoKey][formInfoAttributesKey]
                                );
                            }
                        );
                        attributesCost +=
                            priceInfo[formInfoKey][formInfoAttributesKey][res];
                    }
                }
            );
            const num = Number(formInfo[formInfoKey].number);
            sum += attributesCost * num;
            productCounter += num;
        }
    });
    let percent =
        productCounter >= priceInfo.discount.startAt
            ? Math.pow(priceInfo.discount.multiplyValue, productCounter)
            : 1;
    if (percent < 0.7) percent = 0.7;
    const value = sum * percent;
    return { value: value, discountPercent: (1 - percent) * 100 };
};

/*export const hash = (input: string, digits: number) => {
    digits = digits || 6;
    const m = Math.pow(10, digits + 1) - 1;
    const phi = Math.pow(10, digits) / 2 - 1;
    let n = 0;
    for (let i = 0; i < input.length; i++) {
        n = (n + phi * input.charCodeAt(i)) % m;
    }
    return n;
};*/

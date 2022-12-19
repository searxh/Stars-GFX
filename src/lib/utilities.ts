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

export const generateUUID = () => {
    const array = new Uint32Array(8);
    window.crypto.getRandomValues(array);
    let uuid = "";
    array.forEach((item) => {
        uuid += item.toString(16);
    });
    return hash(uuid);
};

export const checkAdmin = () => {
    return new Promise((resolve) => {
        const a = JSON.parse(sessionStorage.getItem("a") as string);
        sha256(a).then((res) => {
            if (res === process.env.REACT_APP_ADMIN_KEY) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
};

const hash = (str: string) => {
    let hash = 31;
    for (let i = 0; i < str.length; i++) {
        hash = hash * str.charCodeAt(i);
    }
    return hash % 1000000007;
};

export const sha256 = async (str: string) => {
    const buffer = new TextEncoder().encode(str);
    const hash = await crypto.subtle.digest("SHA-256", buffer);
    return Array.prototype.map
        .call(new Uint8Array(hash), (x) => ("00" + x.toString(16)).slice(-2))
        .join("");
};

import { FormInfoType } from "../types";
import { priceInfo, selectChoices, productChoices } from "./default";
import CryptoJS from "crypto-js";

export const pageChangeCheck = (isForward: boolean, page: number) => {
    if (isForward && page + 1 < 5) {
        return page + 1;
    } else if (!isForward && page - 1 >= 0) {
        return page - 1;
    } else {
        return undefined;
    }
};

export const getProductColor = (currentProduct: string) => {
    const res = productChoices.find(
        (productObj: { title: string; color: string }) =>
            productObj.title === currentProduct
    );
    return res !== undefined ? res.color : "bg-slate-500";
};

export const getProductTextColor = (currentProduct: string) => {
    const res = productChoices.find(
        (productObj: { title: string; color: string }) =>
            productObj.title === currentProduct
    );
    return res !== undefined ? res.textColor : "text-black";
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

export const isSignedIn = () => {
    const a = sessionStorage.getItem("a");
    return a !== null && JSON.parse(a).length === 64;
};

export const checkAdmin = () => {
    return new Promise((resolve) => {
        const a = sessionStorage.getItem("a");
        if (a !== null) {
            const decrypted = decrypt(JSON.parse(a));
            sha256(decrypted).then((res) => {
                if (res === process.env.REACT_APP_ADMIN_KEY) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        } else {
            resolve(false);
        }
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

const iv = CryptoJS.lib.WordArray.random(16);

export const encrypt = (str: string) => {
    return CryptoJS.AES.encrypt(str, process.env.REACT_APP_SECRET as string, {
        mode: CryptoJS.mode.ECB,
        iv: iv,
    }).toString();
};

export const decrypt = (str: string) => {
    return CryptoJS.AES.decrypt(str, process.env.REACT_APP_SECRET as string, {
        mode: CryptoJS.mode.ECB,
        iv: iv,
    }).toString(CryptoJS.enc.Utf8);
};

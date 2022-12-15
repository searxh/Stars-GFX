import { Dispatch } from "react";

export interface OrderType {
    id?: number;
    created_at?: string;
    discord: string;
    status: string;
    title: string;
    orderid: string;
}
export interface StringToAnyType {
    [key: string]: any;
}
export interface ProductSelectType extends StringToAnyType {
    resolution: string;
    modelLimit: string;
    number: string;
}
export interface FormInfoType {
    [key: string]: ProductSelectType;
}
export interface PriceInfoType {
    [key: string]: { [key: string]: any };
}
interface GlobalStateKeys {
    [key: string]: any;
}
export interface GlobalStateType extends GlobalStateKeys {
    formInfo: FormInfoType;
    projInfo: Array<string>;
    currentPage: number;
    userInfo: any;
}

export interface ActionType {
    type: string;
    field?: string | Array<string>;
    payload: any;
}

export interface GlobalContextType {
    global_state: GlobalStateType;
    dispatch: Dispatch<ActionType>;
}

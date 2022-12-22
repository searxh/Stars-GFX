import { Dispatch, SetStateAction } from "react";

export interface OrderObj {
    id: string;
    comment: string;
    created_at: string;
    updated_at: string;
    formInfo: FormObj;
    orderInfo: Array<OrderType>;
    userInfo: UserObj;
    status: string;
    price: number;
}
export interface UserObj {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    discriminator: string;
}
export interface FormObj extends StringToAnyType {
    id: string;
    assets: string;
    color: string;
    created_at: string;
    updated_at: string;
    title: string;
    order_id: string;
    ideas: string;
    game: string;
    deadline: string;
}
export interface StatusObjType extends StringToAnyType {
    pending: Array<OrderObj>;
    active: Array<OrderObj>;
    declined: Array<OrderObj>;
}
export interface OrderType {
    modelLimit: string;
    number: string;
    orderType: string;
    additional: string;
    resolution: string;
}
export interface StringToAnyType {
    [key: string]: any;
}
export interface ProductSelectType extends StringToAnyType {
    resolution: string;
    modelLimit: string;
    number: string;
}
export interface OwnerStatusType {
    status: boolean;
    num: number;
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
    notifier: boolean;
    userInfo: any;
    orders: number;
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

export interface ConfirmationContextType {
    setTrigger: Dispatch<SetStateAction<boolean>>;
    setAcceptCallback: Dispatch<SetStateAction<(decision: boolean) => void>>;
}

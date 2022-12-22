import { ActionType, FormInfoType, GlobalStateType, UserObj } from "../types";
import axios from "axios";
import { Dispatch } from "react";
import { generateUUID, decrypt } from "./utilities";

export const createOrder = (
    formInfo: FormInfoType,
    projInfo: Array<string>,
    userInfo: any
) => {
    if (Object.keys(userInfo).length !== 0) {
        const orderid = generateUUID();
        const sendObj = Object.keys(formInfo).map((formInfoKey: string) => {
            return {
                ...formInfo[formInfoKey],
                orderType: formInfoKey,
            };
        });
        axios.post(
            `${process.env.REACT_APP_API_URL}/v2/users/${userInfo.id}/orders/`,
            {
                id: orderid,
                orderInfo: JSON.stringify(sendObj),
                status: "pending",
                comment: "",
            }
        );
        setTimeout(() => {
            axios.post(
                `${process.env.REACT_APP_API_URL}/v2/users/${userInfo.id}/orders/${orderid}/forminfos`,
                {
                    deadline: projInfo[0],
                    game: projInfo[1],
                    title: projInfo[2],
                    color: projInfo[3],
                    assets: projInfo[4],
                    ideas: projInfo[5],
                }
            );
        }, 1000);
    }
};

export const deleteOrder = (orderID: string, userInfo: any) => {
    if (Object.keys(userInfo).length !== 0) {
        axios.delete(
            `${process.env.REACT_APP_API_URL}/v2/users/${userInfo.id}/orders/${orderID}`
        );
    }
};

export const getOrder = async (userInfo: any) => {
    const promise = new Promise((resolve) => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/v2/users/${userInfo.id}/orders`,
        }).then((res) => {
            resolve(
                res.data.map((orderItem: any) => {
                    return {
                        ...orderItem,
                        orderInfo: JSON.parse(orderItem.orderInfo),
                    };
                })
            );
        });
    });
    return promise;
};

export const getOrderList = async () => {
    const promise = new Promise((resolve) => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/v2/list`,
        }).then((res) => {
            const ret = res.data.orders.map((orderItem: any) => {
                const temp = {
                    ...orderItem,
                    orderInfo: JSON.parse(orderItem.orderInfo),
                    formInfo: res.data.formInfos.find(
                        (formInfoObj: any) =>
                            formInfoObj.order_id === orderItem.id
                    ),
                    userInfo: res.data.users.find(
                        (userObj: UserObj) => userObj.id === orderItem.user_id
                    ),
                };
                delete temp.user_id;
                return temp;
            });
            resolve(ret);
        });
    });
    return promise;
};

export const createUser = (userData: any) => {
    axios
        .post(process.env.REACT_APP_API_URL + "/v2/users/", {
            id: userData.id,
            name: userData.username,
            discriminator: userData.discriminator,
        })
        .catch((e) => {});
};

export const updateOrder = (orderData: any) => {
    axios.put(
        `${process.env.REACT_APP_API_URL}/v2/users/${orderData.userInfo.id}/orders/${orderData.id}`,
        {
            id: orderData.id,
            orderInfo: JSON.stringify(orderData.orderInfo),
            status: orderData.status,
            comment: orderData.comment,
        }
    );
};

export const authUser = (pw: string) => {
    const promise = new Promise((resolve) => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/v2/auth`, { pw: pw })
            .then((res) => {
                resolve(true);
            })
            .catch((res) => {
                resolve(false);
            });
    });
    return promise;
};

export const updateOwnerStatus = (status: boolean, num: number) => {
    axios
        .post(`${process.env.REACT_APP_API_URL}/v2/auth/status`, {
            status: status,
            num: num,
        })
        .then((res) => {
            return true;
        })
        .catch((res) => {
            return false;
        });
};

export const getOwnerStatus = () => {
    const promise = new Promise((resolve) => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/v2/status`)
            .then((res) => {
                resolve(res.data);
            })
            .catch((res) => {});
    });
    return promise;
};

export const updateUserInfoFromSession = (
    global_state: GlobalStateType,
    dispatch: Dispatch<ActionType>,
    navigate: Function,
    dontNavigate?: boolean
) => {
    const auth = JSON.parse(sessionStorage.getItem("a") as string);
    if (
        auth &&
        sessionStorage.getItem("b") &&
        Object.keys(global_state.userInfo).length === 0
    ) {
        axios
            .get("https://discord.com/api/users/@me", {
                headers: {
                    authorization: `${JSON.parse(
                        sessionStorage.getItem("b") as string
                    )} ${decrypt(auth)}`,
                },
            })
            .then((res) => {
                createUser(res.data);
                dispatch({
                    type: "set",
                    field: "userInfo",
                    payload: res.data,
                });
                if (dontNavigate === undefined)
                    setTimeout(() => navigate("/"), 1500);
            })
            .catch((e) => {});
    } else if (!auth || !sessionStorage.getItem("b")) {
        dispatch({
            type: "set",
            field: "userInfo",
            payload: {},
        });
    }
};

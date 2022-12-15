import UUID from "uuid-int";
import { ActionType, FormInfoType } from "../types";
import axios from "axios";
import { Dispatch } from "react";

export const createOrder = (
    formInfo: FormInfoType,
    projInfo: Array<string>,
    userInfo: any
) => {
    const orderid = UUID(Math.ceil(Math.random() * 511)).uuid();
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
};

export const createUser = (userData: any) => {
    axios.post(process.env.REACT_APP_API_URL + "/v2/users/", {
        id: userData.id,
        name: userData.username,
        discriminator: userData.discriminator,
    });
};

export const updateUserInfoFromSession = (
    dispatch: Dispatch<ActionType>,
    navigate: Function
) => {
    if (sessionStorage.getItem("a") && sessionStorage.getItem("b")) {
        axios
            .get("https://discord.com/api/users/@me", {
                headers: {
                    authorization: `${JSON.parse(
                        sessionStorage.getItem("b") as string
                    )} ${JSON.parse(sessionStorage.getItem("a") as string)}`,
                },
            })
            .then((res) => {
                createUser(res.data);
                dispatch({
                    type: "set",
                    field: "userInfo",
                    payload: res.data,
                });
                setTimeout(() => navigate("/"), 2000);
            });
    } else {
        dispatch({
            type: "set",
            field: "userInfo",
            payload: {},
        });
    }
};

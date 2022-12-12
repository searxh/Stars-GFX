import UUID from "uuid-int";
import { FormInfoType } from "../types";
import axios from "axios";

export const createOrder = (
    formInfo: FormInfoType,
    projInfo: Array<string>
) => {
    const orderid = UUID(Math.ceil(Math.random() * 511)).uuid();
    const sendObj = Object.keys(formInfo).map((formInfoKey: string) => {
        return {
            ...formInfo[formInfoKey],
            orderType: formInfoKey,
        };
    });
    axios.post(process.env.REACT_APP_API_URL + "/v1.1/orders", {
        id: orderid,
        orderInfo: JSON.stringify(sendObj),
    });
    setTimeout(() => {
        axios.post(
            process.env.REACT_APP_API_URL +
                "/v1.1/orders/" +
                orderid +
                "/forminfos",
            {
                discord: projInfo[0],
                deadline: projInfo[1],
                game: projInfo[2],
                title: projInfo[3],
                color: projInfo[4],
                assets: projInfo[5],
                ideas: projInfo[6],
            }
        );
    }, 1000);
};

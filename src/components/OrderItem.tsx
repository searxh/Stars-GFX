import React from "react";
import { OrderObj, OrderType } from "../types";
import { productChoices } from "../lib/default";
import format from "date-fns/format";
import XButton from "./XButton";
import { deleteOrder } from "../lib/api";
import { GlobalContext } from "../states";
import { generateUUID } from "../lib/utilities";
interface OrderItemPropsInterface {
    orderObj: OrderObj;
}

const OrderItem = ({ orderObj }: OrderItemPropsInterface) => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { userInfo, notifier } = global_state;
    const { id, created_at, orderInfo } = orderObj;
    const handleCancelOrder = () => {
        console.log(generateUUID());
        deleteOrder(id, userInfo);
        dispatch({
            type: "set",
            field: "notifier",
            payload: !notifier,
        });
    };
    const getProductColor = (currentProduct: string) => {
        const res = productChoices.find(
            (productObj: { title: string; color: string }) =>
                productObj.title === currentProduct
        );
        return res !== undefined ? res.color : "bg-slate-500";
    };
    return (
        <div className="relative flex flex-col rounded-lg border-2 border-black shadow-md">
            <XButton
                closeCallback={handleCancelOrder}
                className="absolute -top-2 -right-2"
            />
            <div
                className="flex justify-evenly shadow-md bg-gradient-to-r
			font-bold from-orange-400 to-blue-400 text-white rounded-md p-2"
            >
                <div className="my-auto">ORDER: {id}</div>
                <div className="my-auto">
                    TIME: {format(new Date(created_at), "h:mm d/M/yyyy")}
                </div>
                <div className="my-auto">PRICE: $0</div>
            </div>
            <div className="my-auto p-3 drop-shadow-sm">
                <div className="grid grid-cols-5 font-bold border-b border-black py-1">
                    <div>Product Type</div>
                    <div>Resolution</div>
                    <div>Model Limit</div>
                    <div>Additional Files</div>
                    <div>Amount</div>
                </div>
                {orderInfo.map((order: OrderType) => {
                    return (
                        <div className="grid grid-cols-5 border-b py-1">
                            <div
                                className={`${getProductColor(
                                    order.orderType
                                )} rounded-full text-white shadow-md`}
                            >
                                {order.orderType.toLocaleUpperCase()}
                            </div>
                            <div>{order.resolution}</div>
                            <div>{order.modelLimit}</div>
                            <div>{order.additional}</div>
                            <div>{order.number}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrderItem;

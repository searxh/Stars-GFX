import React from "react";
import { OrderObj, OrderType } from "../types";
import { getProductColor } from "../lib/utilities";
import format from "date-fns/format";
import XButton from "./XButton";
import { deleteOrder } from "../lib/api";
import { GlobalContext } from "../states";
import { statusArr } from "../lib/default";
import { ConfirmationContext } from "../confirmation";
interface OrderItemPropsInterface {
    orderObj: OrderObj;
}

const OrderItem = ({ orderObj }: OrderItemPropsInterface) => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { setTrigger, setAcceptCallback } =
        React.useContext(ConfirmationContext);
    const { userInfo, notifier } = global_state;
    const { id, created_at, orderInfo, comment, status, price } = orderObj;
    const handleCancelOrder = () => {
        setTrigger(true);
        const callback = (decision: boolean) => {
            if (decision) {
                deleteOrder(id, userInfo);
                setTimeout(() => {
                    dispatch({
                        type: "set",
                        field: "notifier",
                        payload: !notifier,
                    });
                }, 500);
            }
        };
        setAcceptCallback(() => callback);
    };
    return (
        <div className="relative flex flex-col rounded-lg border-2 shadow-md bg-gray-100">
            {status === statusArr[1] && (
                <XButton
                    closeCallback={handleCancelOrder}
                    className="absolute -top-2 -right-2"
                />
            )}
            <div
                className={`flex justify-evenly shadow-md bg-gradient-to-r
			    font-bold ${
                    orderObj.status === statusArr[0]
                        ? "from-green-400"
                        : orderObj.status === statusArr[1]
                        ? "from-yellow-400"
                        : "from-red-400"
                } to-blue-400 text-white rounded-md p-2`}
            >
                <div className="my-auto">ORDER ID: {id}</div>
                <div className="my-auto">
                    TIME: {format(new Date(created_at), "H:mm d/M/yyyy")}
                </div>
                <div className="my-auto">PRICE: ${price}</div>
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
            {comment.length !== 0 ? (
                <div className="text-neutral py-1">
                    Star's comment:
                    <span className="text-orange-600 mx-2">{comment}</span>
                </div>
            ) : null}
        </div>
    );
};

export default OrderItem;

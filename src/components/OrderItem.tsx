import React from "react";
import { OrderObj, OrderType } from "../types";
import { convertUSDtoRobux, getProductColor } from "../lib/utilities";
import format from "date-fns/format";
import XButton from "./XButton";
import { deleteOrder } from "../lib/api";
import { GlobalContext } from "../states";
import { cancelOrderMessage, statusArr } from "../lib/default";
import { ConfirmationContext } from "../confirmation";
import useElementSize from "../hooks/useElementSize";
interface OrderItemPropsInterface {
    orderObj: OrderObj;
}

const OrderItem = ({ orderObj }: OrderItemPropsInterface) => {
    //const { global_state, dispatch } = React.useContext(GlobalContext);
    //const { setTrigger, setAcceptCallback, setMessage } = React.useContext(ConfirmationContext);
    //const { userInfo, notifier } = global_state;
    const { id, created_at, orderInfo, comment, status, price } = orderObj;
    const orderItemSize = useElementSize("order-item");
    /*const handleCancelOrder = () => {
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
        setMessage(cancelOrderMessage);
        setAcceptCallback(() => callback);
    };*/
    return (
        <div className="relative flex flex-col rounded-lg border-2 shadow-md bg-gray-100">
            {/*status === statusArr[1] && (
                <XButton
                    closeCallback={handleCancelOrder}
                    className="absolute -top-2 -right-2"
                />
            )*/}
            <div
                id="order-item"
                className={`flex justify-evenly shadow-md bg-gradient-to-r
			    font-bold lg:text-base text-sm ${
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
                <div className="my-auto">
                    PRICE: ${price}/⏣{convertUSDtoRobux(price)}
                </div>
            </div>
            <div className="my-auto p-3 drop-shadow-sm">
                <div
                    className="grid grid-cols-5 gap-2 text-sm lg:text-base font-semibold border-b
                 border-black py-1 break-words"
                >
                    <div>Product Type</div>
                    <div>Resolution</div>
                    <div>Model Limit</div>
                    <div>Additional Files</div>
                    <div>Amount</div>
                </div>
                {orderInfo.map((order: OrderType, index: number) => {
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-5 border-b py-1 text-sm lg:text-base"
                        >
                            <div
                                className={`${getProductColor(
                                    order.orderType
                                )} flex rounded-full text-white shadow-md break-words text-2xs md:text-xs lg:text-sm h-fit w-[120%] lg:w-full`}
                            >
                                <div className="m-auto p-1">
                                    {order.orderType
                                        .toLocaleUpperCase()
                                        .replace("AD", "")}
                                </div>
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
                <div className="bg-orange-100 rounded-md">
                    <div className="font-semibold">Star's comment:</div>
                    <div
                        style={{ width: orderItemSize.width }}
                        className="lg:text-base text-sm py-1"
                    >
                        <span className="text-orange-600 mx-2 break-words select-text">
                            {comment}
                        </span>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default OrderItem;

import React from "react";
import { OrderObj, OrderType } from "../types";
interface OrderItemPropsInterface {
    orderObj: OrderObj;
}

const OrderItem = ({ orderObj }: OrderItemPropsInterface) => {
    const { id, created_at, orderInfo } = orderObj;
    return (
        <div className="flex flex-col rounded-lg border-[1px] border-black p-5">
            <div className="flex justify-between font-bold">
                ORDER #{id}
                <span className="">PRICE: 0</span>
                <span className="">{created_at}</span>
            </div>

            <div className="">
                <div className="grid grid-cols-4 font-bold">
                    <div>Product Type</div>
                    <div>Resolution</div>
                    <div>Model Limit</div>
                    <div>Amount</div>
                </div>
                {orderInfo.map((order: OrderType) => {
                    return (
                        <div className="grid grid-cols-4">
                            <div>{order.orderType}</div>
                            <div>{order.resolution}</div>
                            <div>{order.modelLimit}</div>
                            <div>{order.number}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrderItem;

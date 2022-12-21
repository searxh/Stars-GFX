import React from "react";
import { OrderObj, StatusObjType } from "../../../types";
import { initialStatusObj } from "../../../lib/default";
import { cloneDeep } from "lodash";
import OrderItemAdmin from "../OrderItemAdmin";
import { getOrderList } from "../../../lib/api";

const OrderPage = () => {
    const [orders, setOrders] = React.useState<StatusObjType>();
    const processOrders = (orderObjArray: Array<OrderObj>) => {
        const statusObj: StatusObjType = cloneDeep(initialStatusObj);
        const checkSet = new Set(orderObjArray.map((orderObj) => orderObj.id));
        const filtered = orderObjArray.filter((orderObj) => {
            return checkSet.has(orderObj.id);
        });
        console.log(filtered, checkSet);
        filtered.forEach((orderObj) => {
            console.log(orderObj);
            statusObj[orderObj.status].push(orderObj);
        });
        console.log(statusObj);
        setOrders(statusObj);
    };
    React.useLayoutEffect(() => {
        getOrderList().then((res: any) => processOrders(res));
        const periodicFetch = setInterval(
            () => getOrderList().then((res: any) => processOrders(res)),
            10000000
        );
        return () => clearInterval(periodicFetch);
    }, []);
    return (
        <div className="flex justify-between p-5">
            <div className="basis-1/3">
                <div
                    className="text-xl text-green-600 text-center font-bold 
                px-5 pt-5 drop-shadow-sm border-b"
                >
                    Active Orders
                </div>
                <div className="grid grid-flow-row gap-2 p-5">
                    {orders?.active.map((order: OrderObj) => (
                        <OrderItemAdmin orderObj={order} />
                    ))}
                </div>
            </div>
            <div className="basis-1/3">
                <div
                    className="text-xl text-yellow-600 text-center font-bold 
                px-5 pt-5 drop-shadow-sm border-b"
                >
                    Pending Orders
                </div>
                <div className="grid grid-flow-row gap-2 p-5">
                    {orders?.pending.map((order: OrderObj) => (
                        <OrderItemAdmin orderObj={order} />
                    ))}
                </div>
            </div>
            <div className="basis-1/3">
                <div
                    className="text-xl text-red-600 text-center font-bold 
                px-5 pt-5 drop-shadow-sm border-b"
                >
                    Declined Orders
                </div>
                <div className="grid grid-flow-row gap-2 p-5">
                    {orders?.declined.map((order: OrderObj) => (
                        <OrderItemAdmin orderObj={order} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderPage;

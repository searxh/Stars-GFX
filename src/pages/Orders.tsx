import React from "react";
import OrderItem from "../components/OrderItem";
import { GlobalContext } from "../states";
import { OrderObj, StatusObjType } from "../types";
import { getOrder } from "../lib/api";
import { initialStatusObj } from "../lib/default";
import { cloneDeep } from "lodash";
import Text from "../components/Text";

const Orders = () => {
    const [orders, setOrders] = React.useState<StatusObjType>();
    const { global_state } = React.useContext(GlobalContext);
    const { userInfo, notifier } = global_state;
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
        if (Object.keys(userInfo).length !== 0) {
            getOrder(userInfo).then((orderObjArray: any) =>
                processOrders(orderObjArray)
            );
        } else {
            setOrders(cloneDeep(initialStatusObj));
        }
    }, [userInfo, notifier]);
    return (
        <div
            className="flex flex-col pt-12 w-full min-h-screen h-full
        font-nunito bg-neutral-100 text-center"
        >
            {orders?.active.length !== 0 ||
            orders?.pending.length !== 0 ||
            orders?.declined.length !== 0 ? (
                <>
                    <div className="text-3xl text-left font-bold px-5 pt-5 drop-shadow-sm">
                        {userInfo.username + "#" + userInfo.discriminator}'s
                        Orders
                    </div>
                    {orders?.active.length !== 0 && (
                        <>
                            <div className="text-xl text-green-600 text-left font-bold px-5 pt-5 drop-shadow-sm border-b">
                                Active Orders
                            </div>
                            <div className="grid grid-flow-row gap-2 p-5">
                                {orders?.active.map((order: OrderObj) => (
                                    <OrderItem orderObj={order} />
                                ))}
                            </div>
                        </>
                    )}
                    {orders?.pending.length !== 0 && (
                        <>
                            <div className="text-xl text-yellow-600 text-left font-bold px-5 pt-5 drop-shadow-sm border-b">
                                Pending Orders
                            </div>
                            <div className="grid grid-flow-row gap-2 p-5">
                                {orders?.pending.map((order: OrderObj) => (
                                    <OrderItem orderObj={order} />
                                ))}
                            </div>
                        </>
                    )}

                    {orders?.declined.length !== 0 && (
                        <>
                            <div className="text-xl text-red-600 text-left font-bold px-5 pt-5 drop-shadow-sm border-b">
                                Declined Orders
                            </div>
                            <div className="grid grid-flow-row gap-2 p-5">
                                {orders?.declined.map((order: OrderObj) => (
                                    <OrderItem orderObj={order} />
                                ))}
                            </div>
                        </>
                    )}
                </>
            ) : (
                <Text
                    text="You don't have any orders yet, head over to the commissions page to start ordering!"
                    color="text-black"
                />
            )}
        </div>
    );
};

export default Orders;

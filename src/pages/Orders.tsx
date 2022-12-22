/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import OrderItem from "../components/OrderItem";
import { GlobalContext } from "../states";
import { OrderObj, StatusObjType } from "../types";
import { getOrder } from "../lib/api";
import { initialStatusObj } from "../lib/default";
import { cloneDeep } from "lodash";
import Text from "../components/Text";

const Orders = () => {
    const [ordersInfo, setOrdersInfo] = React.useState<StatusObjType>();
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { userInfo, notifier, orders } = global_state;
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
        setOrdersInfo(statusObj);
    };
    React.useEffect(() => {
        if (ordersInfo) {
            dispatch({
                type: "set",
                field: "orders",
                payload: ordersInfo.pending.length,
            });
        }
    }, [ordersInfo]);
    React.useLayoutEffect(() => {
        if (Object.keys(userInfo).length !== 0) {
            getOrder(userInfo).then((orderObjArray: any) => {
                processOrders(orderObjArray);
            });
        } else {
            setOrdersInfo(cloneDeep(initialStatusObj));
        }
    }, [userInfo, notifier]);
    return (
        <div
            className="flex flex-col pt-12 w-full min-h-screen h-full
        font-nunito bg-neutral-100 text-center"
        >
            {ordersInfo?.active.length !== 0 ||
            ordersInfo?.pending.length !== 0 ||
            ordersInfo?.declined.length !== 0 ? (
                <>
                    <div className="text-3xl text-center font-bold px-5 pt-5 drop-shadow-sm">
                        {userInfo.username + "#" + userInfo.discriminator}'s
                        Orders
                    </div>
                    <div
                        className={`text-xl ${
                            orders === 3 ? "text-red-500" : "text-green-500"
                        } font-bold`}
                    >
                        ({orders}/3 Pending Orders)
                    </div>
                    {ordersInfo?.active.length !== 0 && (
                        <>
                            <div className="text-xl text-green-600 text-center font-bold px-5 pt-5 mt-5 drop-shadow-sm border-t">
                                Active Orders
                            </div>
                            <div className="grid grid-flow-row gap-2 p-5">
                                {ordersInfo?.active.map((order: OrderObj) => (
                                    <OrderItem orderObj={order} />
                                ))}
                            </div>
                        </>
                    )}
                    {ordersInfo?.pending.length !== 0 && (
                        <>
                            <div className="text-xl text-yellow-600 text-center font-bold px-5 pt-5 mt-5 drop-shadow-sm border-t">
                                Pending Orders
                            </div>
                            <div className="grid grid-flow-row gap-2 p-5">
                                {ordersInfo?.pending.map((order: OrderObj) => (
                                    <OrderItem orderObj={order} />
                                ))}
                            </div>
                        </>
                    )}

                    {ordersInfo?.declined.length !== 0 && (
                        <>
                            <div className="text-xl text-red-600 text-left font-bold px-5 pt-5 mt-5 drop-shadow-sm border-t">
                                Declined Orders
                            </div>
                            <div className="grid grid-flow-row gap-2 p-5">
                                {ordersInfo?.declined.map((order: OrderObj) => (
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

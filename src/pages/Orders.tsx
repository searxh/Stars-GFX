/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import OrderItem from "../components/OrderItem";
import { GlobalContext } from "../states";
import { OrderObj, StatusObjType } from "../types";
import { getOrder } from "../lib/api";
import { initialStatusObj, userRate } from "../lib/default";
import { cloneDeep } from "lodash";
import Text from "../components/Text";
import Footer from "../components/Footer";

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
        filtered.forEach((orderObj) => {
            statusObj[orderObj.status].push(orderObj);
        });
        setOrdersInfo(statusObj);
    };
    const getObjects = () => {
        getOrder(userInfo).then((orderObjArray: any) => {
            processOrders(orderObjArray);
        });
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
            getObjects();
            const periodicFetch = setInterval(() => {
                getObjects();
            }, userRate);
            return () => clearInterval(periodicFetch);
        } else {
            setOrdersInfo(cloneDeep(initialStatusObj));
        }
    }, [userInfo, notifier]);
    return (
        <div
            className="flex flex-col py-12 w-full min-h-screen h-full
        font-nunito bg-neutral-100 text-center"
        >
            {ordersInfo?.active.length !== 0 ||
            ordersInfo?.pending.length !== 0 ||
            ordersInfo?.declined.length !== 0 ? (
                <>
                    <div className="text-4xl text-center font-bold px-5 pt-5 drop-shadow-sm">
                        {userInfo.username + "#" + userInfo.discriminator}
                    </div>
                    <div
                        className={`text-xl ${
                            orders === 3 ? "text-red-600" : "text-green-600"
                        } font-semibold`}
                    >
                        ({orders}/3 Pending Orders)
                    </div>
                    {ordersInfo?.active.length !== 0 && (
                        <>
                            <div className="text-2xl text-green-600 text-center font-semibold px-5 pt-5 mt-5 drop-shadow-sm border-t">
                                Active Orders
                            </div>
                            <div className="grid grid-flow-row gap-2 p-5">
                                {ordersInfo?.active.map(
                                    (order: OrderObj, index: number) => (
                                        <OrderItem
                                            key={index}
                                            orderObj={order}
                                        />
                                    )
                                )}
                            </div>
                        </>
                    )}
                    {ordersInfo?.pending.length !== 0 && (
                        <>
                            <div className="text-2xl text-yellow-600 text-center font-semibold px-5 pt-5 mt-5 drop-shadow-sm border-t">
                                Pending Orders
                            </div>
                            <div className="grid grid-flow-row gap-2 p-5">
                                {ordersInfo?.pending.map(
                                    (order: OrderObj, index: number) => (
                                        <OrderItem
                                            key={index}
                                            orderObj={order}
                                        />
                                    )
                                )}
                            </div>
                        </>
                    )}

                    {ordersInfo?.declined.length !== 0 && (
                        <>
                            <div className="text-2xl text-red-600 text-center font-semibold px-5 pt-5 mt-5 drop-shadow-sm border-t">
                                Declined Orders
                            </div>
                            <div className="grid grid-flow-row gap-2 p-5">
                                {ordersInfo?.declined.map(
                                    (order: OrderObj, index: number) => (
                                        <OrderItem
                                            key={index}
                                            orderObj={order}
                                        />
                                    )
                                )}
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
            <Footer />
        </div>
    );
};

export default Orders;

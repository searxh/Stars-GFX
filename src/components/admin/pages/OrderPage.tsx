/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { OrderObj, StatusObjType, OwnerStatusType } from "../../../types";
import { adminRate, initialStatusObj } from "../../../lib/default";
import { cloneDeep } from "lodash";
import OrderItemAdmin from "../OrderItemAdmin";
import {
    getOrderList,
    getOwnerStatus,
    updateOwnerStatus,
} from "../../../lib/api";
import { GlobalContext } from "../../../states";

const OrderPage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { notifier } = global_state;
    const [orders, setOrders] = React.useState<StatusObjType>();
    const [selected, setSelected] = React.useState<boolean>(false);
    const [ownerStatus, setOwnerStatus] =
        React.useState<OwnerStatusType | null>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const processOrders = (orderObjArray: Array<OrderObj>) => {
        const statusObj: StatusObjType = cloneDeep(initialStatusObj);
        const checkSet = new Set(orderObjArray.map((orderObj) => orderObj.id));
        const filtered = orderObjArray.filter((orderObj) => {
            return checkSet.has(orderObj.id);
        });
        filtered.forEach((orderObj) => {
            statusObj[orderObj.status].push(orderObj);
        });
        setOrders(statusObj);
    };
    const handleOnSelect = () => {
        setSelected(!selected);
    };
    const handleOnSaveChange = () => {
        if (inputRef.current !== null && ownerStatus !== null) {
            updateOwnerStatus(
                selected ? !ownerStatus.status : ownerStatus.status,
                Number(inputRef.current.value)
            );
            setTimeout(() => {
                dispatch({
                    type: "set",
                    field: "notifier",
                    payload: !notifier,
                });
                setSelected(false);
            }, 500);
        }
    };
    const getObjects = () => {
        getOrderList().then((res: any) => processOrders(res));
        getOwnerStatus().then((res) => {
            setOwnerStatus(res as OwnerStatusType);
        });
    };
    React.useEffect(() => {
        getOwnerStatus().then((res) => {
            setOwnerStatus(res as OwnerStatusType);
        });
    }, []);
    React.useEffect(() => {
        getObjects();
        const periodicFetch = setInterval(() => {
            getObjects();
        }, adminRate);
        return () => clearInterval(periodicFetch);
    }, [notifier]);
    return (
        <div className="flex flex-col drop-shadow-sm text-sm lg:text-base">
            <div className="flex m-auto mt-5 px-5 py-2 bg-neutral-100 shadow-md border-2 rounded-full w-fit">
                <div className="flex flex-col px-2">
                    Commission Status:
                    <div
                        className={` ${
                            ownerStatus?.status
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {ownerStatus?.status ? "Open" : "Close"} (
                        {ownerStatus?.num}/3)
                    </div>
                </div>
                <div className="m-auto mx-2 bg-neutral-200 py-2 px-2 rounded-xl shadow-md">
                    <input
                        ref={inputRef}
                        min={0}
                        max={3}
                        defaultValue={ownerStatus?.num}
                        className="rounded-full w-10 text-center"
                        type="number"
                    />{" "}
                    / 3
                </div>
                <button
                    onClick={handleOnSelect}
                    className={`text-white px-2 m-auto py-2 shadow-md ${
                        ownerStatus?.status
                            ? selected
                                ? "bg-red-700 shadow-red-700 brightness-150"
                                : "bg-red-700"
                            : selected
                            ? "bg-green-700 shadow-green-700 brightness-150"
                            : "bg-green-700"
                    } rounded-xl transition duration-100`}
                >
                    {ownerStatus?.status ? "Set to close" : "Set to open"}
                </button>
                <button
                    onClick={handleOnSaveChange}
                    className="md:hover:scale-105 md:hover:brightness-150 transition duration-300 rounded-xl 
                    m-auto text-white mx-2 bg-pink-500 px-3 py-2 md:hover:shadow-pink-500 shadow-md"
                >
                    Save changes
                </button>
            </div>
            <div className="flex-col lg:flex-row flex justify-between p-5 pt-0">
                <div className="basis-1/3">
                    <div
                        className="text-xl text-green-600 text-center font-bold 
                px-5 pt-5 drop-shadow-sm border-b"
                    >
                        Active Orders
                    </div>
                    <div className="grid grid-flow-row gap-2 p-5">
                        {orders?.active.map(
                            (order: OrderObj, index: number) => (
                                <OrderItemAdmin key={index} orderObj={order} />
                            )
                        )}
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
                        {orders?.pending.map(
                            (order: OrderObj, index: number) => (
                                <OrderItemAdmin key={index} orderObj={order} />
                            )
                        )}
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
                        {orders?.declined.map(
                            (order: OrderObj, index: number) => (
                                <OrderItemAdmin key={index} orderObj={order} />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;

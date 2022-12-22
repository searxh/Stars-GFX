/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OrderObj, OrderType } from "../../../types";
import { getProductColor } from "../../../lib/utilities";
import format from "date-fns/format";
import FormInfoAdmin from "../FormInfoAdmin";
import { deleteOrder, updateOrder } from "../../../lib/api";
import { statusArr } from "../../../lib/default";
import { ConfirmationContext } from "../../../confirmation";

const InfoPage = () => {
    const { setTrigger, setAcceptCallback } =
        React.useContext(ConfirmationContext);
    const { orderObj } = useParams();
    const navigate = useNavigate();
    const [order] = React.useState<OrderObj>(() => {
        const regex = new RegExp(
            process.env.REACT_APP_SECRET_CHAR as string,
            "g"
        );
        const str = orderObj?.replace(regex, "/") as string;
        return JSON.parse(str);
    });
    const [selectedStatus, setSelectedStatus] = React.useState<number>(-1);
    const inputRef = React.useRef<HTMLTextAreaElement>(null);
    const handleOnSelect = (index: number) => {
        if (index === selectedStatus) {
            setSelectedStatus(-1);
        } else {
            setSelectedStatus(index);
        }
    };
    const handleOnSaveChanges = () => {
        const newComment =
            inputRef.current !== null ? inputRef.current.value : "";
        updateOrder({
            ...order,
            comment: newComment,
            status: statusArr[selectedStatus],
        });
        setTimeout(() => navigate(-1), 1000);
    };
    const handleOnDeleteOrder = () => {
        setTrigger(true);
        const callback = (decision: boolean) => {
            if (decision) {
                deleteOrder(order.id, order.userInfo);
                setTimeout(() => navigate(-1), 1000);
            }
        };
        setAcceptCallback(() => callback);
    };
    React.useEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.value = order.comment;
        }
    }, []);
    return (
        <div className="relative p-5 drop-shadow-sm">
            <button
                onClick={() => navigate(-1)}
                className="absolute flex top-5 left-5 p-2 px-5 rounded-full bg-neutral-400
                shadow-md hover:scale-105 transition hover:bg-neutral-600"
            >
                <svg
                    className="w-8 h-8 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    {`<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->`}
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
            </button>
            <div className="text-3xl text-center font-bold">
                ORDER {order.id}
            </div>
            <div className="text-xl text-center">
                By {order.userInfo.name}#{order.userInfo.discriminator}
            </div>
            <div className="grid grid-cols-3 p-3 my-3 rounded-xl bg-neutral-200 shadow-md">
                <div>
                    <div className="font-bold">CURRENT STATUS:</div>
                    <div>{order.status}</div>
                </div>
                <div>
                    <div className="font-bold">PRICE:</div>
                    <div>${order.price}</div>
                </div>
                <div>
                    <div className="font-bold">CREATED AT:</div>
                    <div>
                        {format(new Date(order.created_at), "H:mm d/M/yyyy")}
                    </div>
                </div>
            </div>
            <div className="flex justify-between h-80">
                <div className="flex flex-col basis-1/2 bg-neutral-100 rounded-xl shadow-md mx-1">
                    <div
                        className="text-lg font-bold text-center py-1 w-full bg-neutral-200 
                        rounded-xl shadow-md"
                    >
                        Order Information
                    </div>
                    <div className="flex-1 my-auto p-3 drop-shadow-sm overflow-y-scroll">
                        <div className="grid grid-cols-5 font-bold border-b border-black py-2">
                            <div>Product Type</div>
                            <div>Resolution</div>
                            <div>Model Limit</div>
                            <div>Additional Files</div>
                            <div>Amount</div>
                        </div>
                        {order.orderInfo.map(
                            (order: OrderType, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="grid grid-cols-5 border-b py-1"
                                    >
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
                            }
                        )}
                    </div>
                </div>
                <div className="flex flex-col basis-1/2 bg-neutral-100 rounded-xl shadow-md mx-1">
                    <div
                        className="text-lg font-bold text-center py-1 w-full bg-neutral-200 
                        rounded-xl shadow-md"
                    >
                        Form Information
                    </div>
                    <div className="flex-1 p-3 overflow-y-scroll drop-shadow-sm">
                        <FormInfoAdmin formObj={order.formInfo} />
                    </div>
                </div>
            </div>
            <div className="text-center text-neutral py-3 shadow-md bg-neutral-200 my-3 rounded-xl">
                <div className="font-bold pb-2">Change Status:</div>
                <div className="flex w-1/2 justify-evenly mx-auto">
                    <button
                        onClick={() => handleOnSelect(0)}
                        disabled={order.status === statusArr[0]}
                        className={`${
                            selectedStatus === 0
                                ? "shadow-green-700 brightness-150 bg-green-700"
                                : "bg-neutral-500"
                        } ${
                            order.status === statusArr[0]
                                ? "opacity-30"
                                : "hover:scale-[102%]"
                        } 
                        basis-1/3 mx-1  p-2 rounded-xl duration-300
                        text-white shadow-md transition`}
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => handleOnSelect(1)}
                        disabled={order.status === statusArr[1]}
                        className={`${
                            selectedStatus === 1
                                ? "shadow-yellow-700 brightness-150 bg-yellow-700"
                                : "bg-neutral-500"
                        } ${
                            order.status === statusArr[1]
                                ? "opacity-30"
                                : "hover:scale-[102%]"
                        } 
                        basis-1/3 mx-1 p-2 rounded-xl duration-300
                        text-white shadow-md transition`}
                    >
                        Pending
                    </button>
                    <button
                        onClick={() => handleOnSelect(2)}
                        disabled={order.status === statusArr[2]}
                        className={`${
                            selectedStatus === 2
                                ? "shadow-red-700 brightness-150 bg-red-700"
                                : "bg-neutral-500"
                        } ${
                            order.status === statusArr[2]
                                ? "opacity-30"
                                : "hover:scale-[102%]"
                        } 
                        basis-1/3 mx-1 p-2 rounded-xl duration-300
                        text-white shadow-md transition`}
                    >
                        Decline
                    </button>
                </div>
            </div>
            <div className="text-center text-neutral px-5 py-2 bg-neutral-200 shadow-md rounded-xl my-3">
                <div className="font-bold pb-2">Star's Comments:</div>
                <textarea
                    rows={2}
                    ref={inputRef}
                    className="hide-scrollbar rounded-2xl py-2 px-5 text-lg shadow-md border-2 resize-none w-full"
                />
            </div>
            <div className="flex w-full justify-evenly mx-auto py-5 font-bold">
                <button
                    onClick={handleOnSaveChanges}
                    className="w-56 mx-1 bg-pink-500 rounded-full text-white
                    shadow-md p-3 px-5 hover:scale-105 transition duration-300 
                    hover:shadow-pink-500 hover:brightness-150"
                >
                    SAVE CHANGES
                </button>
                <button
                    onClick={handleOnDeleteOrder}
                    className="w-56 mx-1 bg-red-500 rounded-full text-white
                    shadow-md p-3 px-5 hover:scale-105 transition duration-300
                    hover:shadow-red-500 hover:brightness-150"
                >
                    DELETE ORDER
                </button>
            </div>
        </div>
    );
};

export default InfoPage;

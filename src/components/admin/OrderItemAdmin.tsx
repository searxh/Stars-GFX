/* eslint-disable no-lone-blocks */
/* eslint-disable no-useless-escape */
import React from "react";
import { OrderObj } from "../../types";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import { statusArr } from "../../lib/default";
interface OrderItemPropsInterface {
    orderObj: OrderObj;
}

const OrderItemAdmin = ({ orderObj }: OrderItemPropsInterface) => {
    const navigate = useNavigate();
    const { id, created_at, userInfo } = orderObj;
    const handleNavigate = () => {
        console.log(orderObj);
        const stringified = JSON.stringify(orderObj);
        navigate(
            "/dashboard/" +
                stringified.replace(
                    /\/+/g,
                    process.env.REACT_APP_SECRET_CHAR as string
                )
        );
    };
    return (
        <button
            onClick={handleNavigate}
            className="relative flex flex-col rounded-lg border-2
            shadow-md hover:scale-[102%] transition duration-300 w-full"
        >
            <div
                className={`justify-evenly shadow-md bg-gradient-to-r w-full
			    font-bold  ${
                    orderObj.status === statusArr[0]
                        ? "from-green-400"
                        : orderObj.status === statusArr[1]
                        ? "from-yellow-400"
                        : "from-red-400"
                } to-blue-400 text-white rounded-md p-2`}
            >
                <div className="my-auto text-xl">
                    {userInfo.name}#{userInfo.discriminator}
                </div>
            </div>
            <div className="grid grid-cols-3 text-center w-full p-1">
                <div className="my-auto">
                    <div className="font-bold">ORDER ID:</div> {id}
                </div>
                <div className="my-auto">
                    <div className="font-bold">TIME:</div>{" "}
                    {format(new Date(created_at), "H:mm d/M/yyyy")}
                </div>
                <div className="my-auto">
                    <div className="font-bold">PRICE:</div> $0
                </div>
            </div>
        </button>
    );
};

export default OrderItemAdmin;

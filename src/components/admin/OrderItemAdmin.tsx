/* eslint-disable no-lone-blocks */
/* eslint-disable no-useless-escape */
import React from "react";
import { OrderObj } from "../../types";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import { statusArr } from "../../lib/default";
import { convertUSDtoRobux, encrypt } from "../../lib/utilities";
interface OrderItemPropsInterface {
    orderObj: OrderObj;
}

const OrderItemAdmin = ({ orderObj }: OrderItemPropsInterface) => {
    const navigate = useNavigate();
    const { id, created_at, userInfo, price } = orderObj;
    const handleNavigate = () => {
        const stringified = JSON.stringify(orderObj);
        const encrypted = encrypt(stringified);
        // const postRegex = encrypted.replace(
        //     /\/+/g,
        //     process.env.REACT_APP_SECRET_CHAR as string
        // );
        //console.log(postRegex);
        navigate("/dashboard/" + encodeURIComponent(encrypted));
    };
    return (
        <button
            onClick={handleNavigate}
            className="relative flex flex-col rounded-lg border-2
            shadow-md md:hover:scale-[102%] transform-gpu duration-300 w-full"
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
                    <div className="font-bold">PRICE:</div> ${price}/⏣
                    {convertUSDtoRobux(price)}
                </div>
            </div>
        </button>
    );
};

export default OrderItemAdmin;

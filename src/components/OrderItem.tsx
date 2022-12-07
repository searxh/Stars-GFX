import React from "react";
import { OrderType } from "../types";
interface OrderItemPropsInterface {
	orderInfo: OrderType;
}

const OrderItem = ({ orderInfo }: OrderItemPropsInterface) => {
	const { title } = orderInfo;
	return <div>{title}</div>;
};

export default OrderItem;

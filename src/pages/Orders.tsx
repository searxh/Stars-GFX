import React from "react";
import axios from "axios";
import OrderItem from "../components/OrderItem";
import { GlobalContext } from "../states";
import { createOrder } from "../lib/api";
import { OrderObj } from "../types";

const Orders = () => {
    const [orders, setOrders] = React.useState<Array<OrderObj>>([]);
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { formInfo, projInfo, userInfo } = global_state;
    const addNewOrders = (orderObjArray: Array<OrderObj>) => {
        const newArray = [...orders];
        orderObjArray.forEach((orderObj) => {
            const find = orders.findIndex(
                (orderItem: OrderObj) => orderObj.id === orderItem.id
            );
            if (find === -1) {
                newArray.push(orderObj);
            }
        });
        setOrders(newArray);
    };
    const handleOnClick = () => {
        createOrder(formInfo, projInfo, userInfo);
    };
    const handleOnClick1 = () => {
        /*axios.put(process.env.REACT_APP_API_URL + "/v2/orders/" + 4, {
            title: "Beyond Set",
            status: "Waiting for review",
            discord: "Nice#2344",
            orderid: UUID(0).uuid(),
            comment: "hello",
        });*/
    };
    const handleOnClick2 = () => {
        axios.delete(process.env.REACT_APP_API_URL + "/v2/orders/" + 4);
    };
    React.useEffect(() => {
        if (Object.keys(userInfo).length !== 0) {
            axios({
                method: "get",
                url: `${process.env.REACT_APP_API_URL}/v2/users/${userInfo.id}/orders`,
            }).then((res) => {
                addNewOrders(
                    res.data.map((orderItem: any) => {
                        return {
                            ...orderItem,
                            orderInfo: JSON.parse(orderItem.orderInfo),
                        };
                    })
                );
            });
        } else {
            setOrders([]);
        }
    }, [userInfo]);
    return (
        <div
            className="flex flex-col pt-12 w-full min-h-screen h-full
        font-nunito bg-neutral-100 text-center"
        >
            <div className="text-2xl text-left font-bold px-5 pt-5">
                {userInfo.username + "#" + userInfo.discriminator}'s Orders
            </div>
            <div className="grid grid-flow-row gap-2 p-5">
                {orders.map((order: OrderObj) => (
                    <OrderItem orderObj={order} />
                ))}
            </div>
            <button className="" onClick={handleOnClick}>
                Submit Order
            </button>
            <button className="" onClick={handleOnClick1}>
                Update Order
            </button>
            <button className="" onClick={handleOnClick2}>
                Delete Order
            </button>
        </div>
    );
};

export default Orders;

import React from "react";
import axios from "axios";
import OrderItem from "../components/OrderItem";
import { v4 as uuidv4 } from "uuid";

const Orders = () => {
    const [orders, setOrders] = React.useState<any>([]);
    const handleOnClick = () => {
        axios.post(process.env.REACT_APP_API_URL + "/v1.1/orderlists/", {
            title: "Beyond Set",
            status: "Waiting for review",
            discord: "Nice#2344",
            orderid: uuidv4(),
        });
    };
    const handleOnClick1 = () => {
        axios.put(process.env.REACT_APP_API_URL + "/v1.1/orderlists/" + 4, {
            title: "Beyond Set",
            status: "Waiting for review",
            discord: "Nice#2344",
            orderid: uuidv4(),
            comment: "hello",
        });
    };
    const handleOnClick2 = () => {
        axios.delete(process.env.REACT_APP_API_URL + "/v1.1/orderlists/" + 4);
    };
    React.useEffect(() => {
        axios({
            method: "get",
            url: process.env.REACT_APP_API_URL + "/v1.1/orderlists/",
        }).then((res) => {
            console.log(res.data);
            console.log(uuidv4());
            setOrders(res.data);
        });
    }, []);
    return (
        <div className="pt-12 w-full h-full bg-red-400">
            {orders.map((order: any) => (
                <OrderItem orderInfo={order} />
            ))}
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

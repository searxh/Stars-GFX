import React from "react";
import axios from "axios";
import OrderItem from "../components/OrderItem";

const Orders = () => {
    const [orders, setOrders] = React.useState<any>([]);
    const handleOnClick = () => {};
    React.useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:3000/api/v1/orderlists",
        }).then((res) => {
            console.log(res.data);
            setOrders(res.data);
        });
    }, []);
    return (
        <div className="">
            {orders.map((order: any) => (
                <OrderItem orderInfo={order} />
            ))}
            <button className="" onClick={handleOnClick}>
                Submit Order
            </button>
        </div>
    );
};

export default Orders;

import React from "react";
import axios from "axios";
import OrderItem from "../components/OrderItem";
import UUID from "uuid-int";
import { GlobalContext } from "../states";

const Orders = () => {
    const [orders, setOrders] = React.useState<any>([]);
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { formInfo, projInfo } = global_state;
    const handleOnClick = () => {
        const orderid = UUID(Math.ceil(Math.random() * 511)).uuid();
        const sendObj = Object.keys(formInfo).map((formInfoKey: string) => {
            return {
                ...formInfo[formInfoKey],
                orderType: formInfoKey,
            };
        });
        axios.post(process.env.REACT_APP_API_URL + "/v1.1/orders", {
            id: orderid,
            orderInfo: JSON.stringify(sendObj),
        });
        setTimeout(() => {
            axios.post(
                process.env.REACT_APP_API_URL +
                    "/v1.1/orders/" +
                    orderid +
                    "/forminfos",
                {
                    discord: projInfo[0],
                    deadline: projInfo[1],
                    game: projInfo[2],
                    title: projInfo[3],
                    color: projInfo[4],
                    assets: projInfo[5],
                    ideas: projInfo[6],
                }
            );
        }, 1000);
    };
    const handleOnClick1 = () => {
        /*axios.put(process.env.REACT_APP_API_URL + "/v1.1/orders/" + 4, {
            title: "Beyond Set",
            status: "Waiting for review",
            discord: "Nice#2344",
            orderid: UUID(0).uuid(),
            comment: "hello",
        });*/
    };
    const handleOnClick2 = () => {
        axios.delete(process.env.REACT_APP_API_URL + "/v1.1/orders/" + 4);
    };
    React.useEffect(() => {
        axios({
            method: "get",
            url: process.env.REACT_APP_API_URL + "/v1.1/orders/",
        }).then((res) => {
            console.log(res.data);
            const obj = JSON.parse(res.data[0].orderInfo);
            console.log(obj);
            setOrders(obj);
        });
    }, []);
    return (
        <div className="pt-12 w-full min-h-screen h-full bg-red-400 font-nunito">
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

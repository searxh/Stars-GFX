/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { authUser } from "../lib/api";

const Dashboard = () => {
    const navigate = useNavigate();
    const [lock, setLock] = React.useState<boolean>(true);
    const [kick, setKick] = React.useState<boolean>(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        if (inputRef.current !== null) {
            console.log(inputRef.current.value);
            authUser(inputRef.current.value).then((res) => {
                if (res) setLock(false);
                else setKick(true);
            });
        }
    };
    React.useEffect(() => {
        if (!lock) navigate("list");
    }, [lock]);
    React.useEffect(() => {
        if (kick) navigate(-1);
    }, [kick]);
    return !lock ? (
        <div
            className="flex flex-col pt-12 w-full min-h-screen h-full
            font-nunito bg-neutral-100 text-center"
        >
            <Outlet />
        </div>
    ) : (
        <div
            className="flex pt-12 w-full min-h-screen h-full
            font-nunito bg-neutral-100 text-center"
        >
            <form className="flex flex-col m-auto w-56 drop-shadow-sm">
                <div className="text-3xl my-2 font-bold">
                    DASHBOARD VERIFICATION
                </div>
                <input
                    ref={inputRef}
                    className="border-2 shadow-md px-5 py-2 rounded-full my-5"
                    placeholder="Enter admin key"
                />
                <button
                    onClick={(e) => handleOnSubmit(e)}
                    className="rounded-full px-5 py-2 bg-green-500 text-white
                     hover:scale-105 transition shadow-md"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Dashboard;

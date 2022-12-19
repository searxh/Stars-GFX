/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { checkAdmin } from "../lib/utilities";

const Dashboard = () => {
    const navigate = useNavigate();
    const [lock, setLock] = React.useState<boolean>(true);
    const [kick, setKick] = React.useState<boolean>(false);
    React.useLayoutEffect(() => {
        checkAdmin().then((res) => {
            if (res) setLock(false);
            else setKick(true);
        });
    }, []);
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
    ) : null;
};

export default Dashboard;

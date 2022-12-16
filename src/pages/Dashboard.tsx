import React from "react";
import { useNavigate } from "react-router-dom";
import { sha256 } from "../lib/utilities";

const Dashboard = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = React.useState<boolean>(false);
    const [kick, setKick] = React.useState<boolean>(false);
    React.useLayoutEffect(() => {
        const a = JSON.parse(sessionStorage.getItem("a") as string);
        sha256(a).then((res) => {
            if (res === process.env.REACT_APP_ADMIN_KEY) {
                setVisible(true);
            } else {
                setKick(true);
            }
        });
    }, []);
    React.useEffect(() => {
        if (kick) navigate(-1);
    }, [kick]);
    return visible ? <div className="text-5xl m-auto">Dashboard</div> : null;
};

export default Dashboard;

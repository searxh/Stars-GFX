import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../states";
import { updateUserInfoFromSession } from "../lib/api";

const LoginSuccess = () => {
    const { dispatch } = React.useContext(GlobalContext);
    const navigate = useNavigate();
    React.useEffect(() => {
        const frag = new URLSearchParams(window.location.hash.slice(1));
        sessionStorage.setItem(
            "a",
            JSON.stringify(frag.get(process.env.REACT_APP_A_TYPE as string))
        );
        sessionStorage.setItem(
            "b",
            JSON.stringify(frag.get(process.env.REACT_APP_B_TYPE as string))
        );
        updateUserInfoFromSession(dispatch, navigate);
    }, []);
    return (
        <div
            className="flex flex-col pt-12 w-full min-h-screen h-full text-white font-nunito 
        bg-gradient-to-t from-orange-500 to-sky-400 brightness-110"
        >
            Congrats you have successfully signed in!
        </div>
    );
};

export default LoginSuccess;

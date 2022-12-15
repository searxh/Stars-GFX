import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../states";
import { updateUserInfoFromSession } from "../lib/api";

const LoginResult = () => {
    const { dispatch } = React.useContext(GlobalContext);
    const navigate = useNavigate();
    React.useEffect(() => {
        const frag = new URLSearchParams(window.location.hash.slice(1));
        const a = frag.get(process.env.REACT_APP_A_TYPE as string);
        const b = frag.get(process.env.REACT_APP_B_TYPE as string);
        if (a && b) {
            sessionStorage.setItem("a", JSON.stringify(a));
            sessionStorage.setItem("b", JSON.stringify(b));
            updateUserInfoFromSession(dispatch, navigate);
        } else {
            sessionStorage.removeItem("a");
            sessionStorage.removeItem("b");
            setTimeout(() => navigate("/"), 2000);
        }
    }, []);
    return (
        <div
            className="flex flex-col pt-12 w-full min-h-screen h-full text-white font-nunito 
        bg-gradient-to-t bg-neutral-100 brightness-110"
        >
            {sessionStorage.getItem("a") && sessionStorage.getItem("b") ? (
                <div className="text-green-500 m-auto text-3xl drop-shadow-sm">
                    Congrats, you have successfully signed in!
                </div>
            ) : (
                <div className="text-red-500 m-auto text-3xl drop-shadow-sm">
                    Failed to authorize
                </div>
            )}
        </div>
    );
};

export default LoginResult;

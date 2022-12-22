/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../states";
import { updateUserInfoFromSession } from "../lib/api";
import Text from "../components/Text";
import { encrypt, isSignedIn } from "../lib/utilities";
import { calculateHash } from "../lib/utilities";

const LoginResult = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const navigate = useNavigate();
    React.useLayoutEffect(() => {
        const frag = new URLSearchParams(window.location.hash.slice(1));
        const a = frag.get(process.env.REACT_APP_A_TYPE as string);
        const b = frag.get(process.env.REACT_APP_B_TYPE as string);
        if (a && b) {
            sessionStorage.setItem("a", JSON.stringify(encrypt(a)));
            sessionStorage.setItem("b", JSON.stringify(b));
            calculateHash(true);
            updateUserInfoFromSession(global_state, dispatch, navigate);
        } else {
            sessionStorage.removeItem("a");
            sessionStorage.removeItem("b");
            calculateHash(true);
            setTimeout(() => navigate("/"), 1500);
        }
    }, []);
    return (
        <div
            className="flex flex-col pt-12 w-full min-h-screen h-full text-white font-nunito 
         bg-neutral-100 brightness-110"
        >
            {isSignedIn() ? (
                <Text
                    text="Congrats! You are successfully signed in!"
                    color="text-green-600"
                />
            ) : (
                <Text text="Oops! Failed to authorize" color="text-red-600" />
            )}
        </div>
    );
};

export default LoginResult;

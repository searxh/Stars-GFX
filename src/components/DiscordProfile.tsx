import React from "react";
import { useNavigate } from "react-router-dom";
import { updateUserInfoFromSession } from "../lib/api";
import { calculateHash, isSignedIn } from "../lib/utilities";
import { GlobalContext } from "../states";
import Cookies from "js-cookie";
import { authLink } from "../lib/default";

const DiscordProfile = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { userInfo } = global_state;
    const { username, discriminator, avatar, id } = userInfo;
    const navigate = useNavigate();
    const nameDot = (user: string) => {
        if (user.length > 8) {
            return user.slice(0, 8) + "..";
        } else {
            return user;
        }
    };
    const handleOnLogin = () => {
        if (isSignedIn()) {
            updateUserInfoFromSession(global_state, dispatch, navigate);
        } else {
            const randomString = crypto.randomUUID();
            dispatch({
                type: "set",
                field: "stateId",
                payload: randomString,
            });
            window.location.href = authLink + "&state=" + randomString;
        }
    };
    const handleOnLogout = () => {
        Cookies.remove("a");
        Cookies.remove("b");
        Cookies.remove("c");
        //sessionStorage.removeItem("a");
        //sessionStorage.removeItem("b");
        calculateHash(true);
        updateUserInfoFromSession(global_state, dispatch, navigate);
    };
    return (
        <div className="text-lg my-auto">
            {Object.keys(userInfo).length !== 0 ? (
                <button
                    onClick={handleOnLogout}
                    className="group/discord flex p-0.5 m-1 mx-2 rounded-full md:hover:scale-105
                    bg-white md:hover:bg-red-500 pr-5 shadow-md w-fit max-w-[12rem] duration-300 transform-gpu"
                >
                    <img
                        className="w-8 h-8 rounded-full aspect-square"
                        src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`}
                        draggable={false}
                        alt=""
                    />
                    <div className="relative m-auto mx-2">
                        <div className="group-hover/discord:opacity-0 duration-300 text-black hover:text-white">
                            {nameDot(username)}
                        </div>
                        <div
                            className="group-hover/discord:opacity-100 opacity-0 transition whitespace-nowrap
                            duration-300 text-black hover:text-white absolute top-0 bottom-0 left-0 right-0"
                        >
                            Sign out
                        </div>
                    </div>
                </button>
            ) : (
                <button
                    onClick={handleOnLogin}
                    className="group/discord flex p-0.5 m-1 mx-2 rounded-full md:hover:scale-105
                    bg-gradient-to-r from-indigo-700 to-indigo-500 shadow-md w-fit max-w-[12rem] duration-300 transform-gpu text-white"
                >
                    <img
                        className="h-8 w-8 rounded-full invert p-1"
                        src="/images/contacts_logo/discord.png"
                        draggable={false}
                        alt=""
                    />
                    <div className="m-auto mx-2 text-sm leading-4 whitespace-nowrap">
                        Sign In With Discord
                    </div>
                </button>
            )}
        </div>
    );
};

export default DiscordProfile;

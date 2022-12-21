import React from "react";
import { useNavigate } from "react-router-dom";
import { updateUserInfoFromSession } from "../lib/api";
import { isSignedIn } from "../lib/utilities";
import { GlobalContext } from "../states";

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
            updateUserInfoFromSession(dispatch, navigate);
        } else {
            window.location.href = process.env.REACT_APP_AUTH as string;
        }
    };
    const handleOnLogout = () => {
        sessionStorage.removeItem("a");
        sessionStorage.removeItem("b");
        updateUserInfoFromSession(dispatch, navigate);
    };
    return (
        <>
            {Object.keys(userInfo).length !== 0 ? (
                <button
                    onClick={handleOnLogout}
                    className="group/discord flex p-0.5 m-1 mx-2 rounded-full hover:scale-105
                    bg-white hover:bg-red-500 pr-5 shadow-md w-fit max-w-[12rem] duration-300 transition"
                >
                    <img
                        className="h-full rounded-full aspect-square"
                        src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`}
                        alt=""
                    />
                    <div className="relative m-auto mx-2">
                        <div className="group-hover/discord:opacity-0 duration-300">
                            {nameDot(username)}#{discriminator}
                        </div>
                        <div
                            className="group-hover/discord:opacity-100 opacity-0 transition
                            duration-300 text-white absolute top-0 bottom-0 left-0 right-0"
                        >
                            Sign out
                        </div>
                    </div>
                </button>
            ) : (
                <button
                    onClick={handleOnLogin}
                    className="group/discord flex p-0.5 m-1 mx-2 rounded-full hover:scale-105
                    bg-indigo-400 shadow-md w-fit max-w-[12rem] duration-300 transition text-white"
                >
                    <img
                        className="h-full rounded-full invert p-1"
                        src="images/contacts_logo/discord.png"
                        alt=""
                    />
                    <div className="m-auto mx-2 text-sm leading-4">
                        Sign In With Discord
                    </div>
                </button>
            )}
        </>
    );
};

export default DiscordProfile;

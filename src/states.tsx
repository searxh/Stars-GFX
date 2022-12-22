import React from "react";
import { createContext } from "react";
import { initialState } from "./lib/default";
import { GlobalContextType, GlobalStateType, ActionType } from "./types";
import { calculateHash } from "./lib/utilities";
import { clientLink } from "./lib/option";

const getSessionData = () => {
    const state = sessionStorage.getItem("st-com-state");
    const storedHash = sessionStorage.getItem("check");
    if (state === null && storedHash === null) {
        save(initialState);
        return initialState;
    } else {
        return load();
    }
};

const save = (state: GlobalStateType) => {
    sessionStorage.setItem("st-com-state", JSON.stringify(state));
    calculateHash(true);
};

const load = () => {
    const res = JSON.parse(sessionStorage.getItem("st-com-state") as string);
    const storedHash = JSON.parse(sessionStorage.getItem("check") as string);
    if (storedHash === calculateHash()) {
        return res;
    } else {
        if (sessionStorage.getItem("a")) sessionStorage.removeItem("a");
        if (sessionStorage.getItem("b")) sessionStorage.removeItem("b");
        save(initialState);
        window.location.href = clientLink;
        return JSON.parse(sessionStorage.getItem("st-com-state") as string);
    }
};

export const GlobalContext = createContext<GlobalContextType>(
    {} as GlobalContextType
);

export function GlobalStateProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const reducer = (state: GlobalStateType, action: ActionType) => {
        const newState = { ...state };
        switch (action.type) {
            case "set":
                if (action.field !== undefined) {
                    newState[action.field as string] = action.payload;
                    save(newState);
                    return newState;
                } else {
                    return action.payload;
                }
            case "multi-set":
                if (action.field !== undefined) {
                    for (let i = 0; i < action.field.length; i++) {
                        newState[action.field[i]] = action.payload[i];
                    }
                    save(newState);
                    return newState;
                } else return state;
            default:
                return state;
        }
    };
    const [state, dispatch] = React.useReducer(reducer, getSessionData());
    return (
        <GlobalContext.Provider
            value={{
                global_state: state,
                dispatch: dispatch,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

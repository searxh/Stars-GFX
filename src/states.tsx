import React from "react";
import { createContext } from "react";
import { initialState } from "./lib/default";
import { GlobalContextType, GlobalStateType, ActionType } from "./types";

const getSessionData = () => {
    const state = sessionStorage.getItem("st-com-state");
    if (state === null) {
        save(initialState);
        return initialState;
    } else {
        return load();
    }
};

const save = (state: GlobalStateType) => {
    sessionStorage.setItem("st-com-state", JSON.stringify(state));
};

const load = () => {
    const res = JSON.parse(sessionStorage.getItem("st-com-state") as string);
    return res;
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

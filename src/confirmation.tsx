import Confirmation from "./components/Confirmation";
import { ConfirmationContextType } from "./types";
import React, { createContext } from "react";

export const ConfirmationContext = createContext<ConfirmationContextType>(
    {} as ConfirmationContextType
);

export function ConfirmationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [trigger, setTrigger] = React.useState<boolean>(false);
    const [acceptCallback, setAcceptCallback] = React.useState<
        (decision: boolean) => void
    >((decision: boolean) => {});
    return (
        <ConfirmationContext.Provider
            value={{
                setTrigger: setTrigger,
                setAcceptCallback: setAcceptCallback,
            }}
        >
            <Confirmation
                title="Confirmation"
                content="Are you sure you wish to cancel the order? It will be lost forever."
                trigger={trigger}
                decisionCallback={(decision: boolean) => {
                    if (decision) {
                        acceptCallback(decision);
                        setTrigger(false);
                        setAcceptCallback(() => {});
                    } else {
                        setTrigger(false);
                        setAcceptCallback(() => {});
                    }
                }}
            />
            {children}
        </ConfirmationContext.Provider>
    );
}

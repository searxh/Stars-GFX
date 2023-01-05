import Confirmation from "./components/Confirmation";
import { ConfirmationContextType, ConfirmationMessageType } from "./types";
import React, { createContext } from "react";

export const ConfirmationContext = createContext<ConfirmationContextType>(
    {} as ConfirmationContextType
);

export function ConfirmationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [message, setMessage] = React.useState<ConfirmationMessageType>({
        title: "",
        content: "",
    });
    const [trigger, setTrigger] = React.useState<boolean>(false);
    const [acceptCallback, setAcceptCallback] = React.useState<
        (decision: boolean) => void
    >((decision: boolean) => {});
    return (
        <ConfirmationContext.Provider
            value={{
                setTrigger: setTrigger,
                setAcceptCallback: setAcceptCallback,
                setMessage: setMessage,
            }}
        >
            <Confirmation
                title={message.title}
                content={message.content}
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

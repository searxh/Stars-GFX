import { ReactNode } from "react";

export default function GlassmorphismCard({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`h-fit w-fit ${
                className ?? "p-6"
            } bg-[#222222] rounded-3xl backdrop-blur-[100px] bg-opacity-[30%] border-[1px] border-neutral-800`}
        >
            {children}
        </div>
    );
}

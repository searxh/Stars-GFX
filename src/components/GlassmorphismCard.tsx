import { ReactNode } from "react";

export default function GlassmorphismCard({
    children,
    className,
    style,
}: {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}) {
    return (
        <div
            style={style}
            className={`${
                className ?? "p-6 h-fit w-fit"
            } bg-[#222222] rounded-3xl backdrop-blur-[100px] 
            backdrop-filter bg-clip-padding bg-opacity-[40%] border-[1px] border-neutral-800`}
        >
            {children}
        </div>
    );
}

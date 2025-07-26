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
            } rounded-3xl backdrop-blur-2xl border-[1px] border-neutral-800 bg-opacity-40 bg-[#222222]`}
        >
            {children}
        </div>
    );
}

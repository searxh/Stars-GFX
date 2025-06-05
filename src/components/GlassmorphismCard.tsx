import { ReactNode } from "react";

export default function GlassmorphismCard({
    children,
}: {
    children: ReactNode;
}) {
    return <div className="h-fit w-fit p-5 bg-[#222222] rounded-lg bg-clip-padding backdrop-filter backdrop-blur-[100px] bg-opacity-[30%]">{children}</div>;
}

import { ReactNode } from "react";

export default function GlassmorphismCard({
    children,
}: {
    children: ReactNode;
}) {
    return <div className="h-fit w-fit p-[24px] bg-[#222222] rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-[100px] bg-opacity-[30%]">{children}</div>;
}

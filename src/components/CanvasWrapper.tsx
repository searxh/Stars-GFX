import { CircularProgress } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

interface CanvasWrapperProps {
    children: React.ReactNode;
    className?: string;
    defaultFallbackSize?: { width: number; height: number };
}

const CanvasWrapper = ({
    children,
    className,
    defaultFallbackSize = { width: 120, height: 120 },
}: CanvasWrapperProps) => {
    const { width, height } = defaultFallbackSize;
    return (
        <Suspense
            fallback={
                <div
                    style={{ width, height }}
                    className="flex m-auto h-full w-full"
                >
                    <CircularProgress color="inherit" className="m-auto" />
                </div>
            }
        >
            <Canvas
                style={{ height: "100%", width: "100%" }}
                shadows={true}
                className={className}
            >
                {children}
            </Canvas>
        </Suspense>
    );
};

export default CanvasWrapper;

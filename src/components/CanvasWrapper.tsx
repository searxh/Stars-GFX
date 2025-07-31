import { LinearProgress } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";

interface CanvasWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const LoaderOverlay = () =>
    ReactDOM.createPortal(
        <div className="fixed top-0 flex h-screen w-screen bg-black text-white z-10 items-center justify-center">
            <div className="flex flex-col gap-2 w-36 m-auto">
                <div className="mx-auto text-sm">LOADING...</div>
                <LinearProgress color="inherit" />
            </div>
        </div>,
        document.body
    );

const CanvasWrapper = ({ children, className }: CanvasWrapperProps) => {
    return (
        <Suspense fallback={<LoaderOverlay />}>
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

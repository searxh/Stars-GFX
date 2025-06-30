import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import CanvasWrapper from "../CanvasWrapper";
import Galaxy3D from "./Galaxy3D";

interface BackgroundProps {
    progress: number;
}

const Background = ({ progress }: BackgroundProps) => {
    return (
        <div className="absolute top-0 w-screen h-screen -z-10">
            {/* <motion.svg width="100%" height="100%">
                <defs>
                    <motion.radialGradient
                        id="gradient1"
                        animate={{
                            gradientTransform: ["scale(2.5)", "scale(1.75)"],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        <stop
                            offset="0%"
                            stopColor={
                                scrollYProgress.get() === 0
                                    ? Colors.primary
                                    : Colors.secondary
                            }
                        />
                        <stop
                            offset="50%"
                            stopColor={
                                scrollYProgress.get() === 0
                                    ? Colors.secondary
                                    : Colors.primary
                            }
                        />
                        <stop offset="100%" stopColor="#000000" />
                    </motion.radialGradient>
                </defs>

                <rect width="100%" height="100%" fill="url(#gradient1)" />
            </motion.svg> */}
            <CanvasWrapper>
                <Galaxy3D progress={progress} />
            </CanvasWrapper>
        </div>
    );
};

export default Background;

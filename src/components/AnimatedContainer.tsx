import {
    AnimationControls,
    motion,
    TargetAndTransition,
    useInView,
    VariantLabels,
} from "framer-motion";
import React, { useRef } from "react";

interface AnimatedContainerProps {
    children: React.ReactNode;
    options?: {
        fadeIn?: boolean;
        blurIn?: boolean;
        zoomIn?: boolean;
        leftSlideIn?: boolean;
        rightSlideIn?: boolean;
        duration?: number;
    };
    className?: string;
}

const AnimatedContainer = ({
    children,
    options,
    className,
}: AnimatedContainerProps) => {
    const {
        fadeIn,
        blurIn,
        zoomIn,
        leftSlideIn,
        rightSlideIn,
        duration = 1,
    } = options || {};
    const ref = useRef(null);
    const section = useInView(ref, { once: true });

    const animateProps:
        | boolean
        | AnimationControls
        | TargetAndTransition
        | VariantLabels = {};

    if (fadeIn) animateProps.opacity = section ? 1 : 0;
    if (blurIn) animateProps.filter = section ? "blur(0px)" : "blur(20px)";
    if (zoomIn) animateProps.scale = section ? 1 : 0.9;
    if (leftSlideIn) animateProps.translateX = section ? 0 : -50;
    if (rightSlideIn) animateProps.translateX = section ? 0 : 50;

    return (
        <motion.div
            ref={ref}
            animate={animateProps}
            transition={{
                duration,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedContainer;

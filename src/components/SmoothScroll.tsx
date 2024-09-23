import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

export default function SmoothScroll({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    // Scroll progress (0 to 1) of the window
    const { scrollYProgress } = useScroll();

    // Use framer motion's useSpring() hook to smooth the scrollYProgress value
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.25,
        stiffness: 50,
        damping: 15,
    });

    // The height of the content in pixels
    const [contentHeight, setContentHeight] = useState(0);

    // The value to transform the content to
    const y = useTransform(
        smoothProgress,
        (v) => v * -(contentHeight - window.innerHeight)
    );

    // A reference to hold the value of the content
    const contentRef = useRef<HTMLDivElement>(null);

    // Reset the `contentHeight` value when the children change, or when the window resizes
    useLayoutEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
            }
        };

        // Call the resize handler once, initially
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [contentRef]);

    return (
        <>
            {/**
             * An invisible div with the actual height of the content.
             * This will expand the height of the body and trigger the default browser scrollbar.
             */}
            <div style={{ height: contentHeight }} />

            {/**
             * The content.  If it exceeds the height of the viewport, translate its y-position to the top.
             * Its position is fixed by default and moves when the user scrolls.
             */}
            <motion.div
                className={`fixed top-0 w-[100vw] ${className}`}
                style={{ y }}
                ref={contentRef}
            >
                {children}
            </motion.div>
        </>
    );
}

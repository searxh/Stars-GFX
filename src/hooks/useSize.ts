import { useCallback, useEffect, useRef, useState } from "react";

type Size = { width: number; height: number };

const useSize = <T extends HTMLElement>() => {
    const ref = useRef<T | null>(null);
    const [size, setSize] = useState<Size>({ width: 0, height: 0 });

    const updateSize = useCallback((el: HTMLElement) => {
        setSize({
            width: el.offsetWidth,
            height: el.offsetHeight,
        });
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Initial size update
        updateSize(element);

        // ResizeObserver for element size
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target === element) {
                    updateSize(entry.target as HTMLElement);
                }
            }
        });
        observer.observe(element);

        // Window resize fallback (optional if ResizeObserver is enough)
        const handleWindowResize = () => updateSize(element);
        window.addEventListener("resize", handleWindowResize);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [updateSize]);

    return { ref, size };
};

export default useSize;

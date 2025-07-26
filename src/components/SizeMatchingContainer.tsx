import React from "react";
import useSize from "../hooks/useSize";

interface SizeMatchingContainerProps {
    referenceChild: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    options?: {
        isDisabled?: boolean;
        childrenClassName?: string;
        referenceChildClassName?: string;
    };
}

const SizeMatchingContainer = ({
    referenceChild,
    children,
    className,
    options = {},
}: SizeMatchingContainerProps) => {
    const { ref, size } = useSize();
    const { height } = size;
    const { isDisabled, childrenClassName, referenceChildClassName } = options;
    return (
        <div
            className={className}
            style={{
                height: isDisabled ? undefined : height,
            }}
        >
            <div
                style={{ height: isDisabled ? undefined : height }}
                className={childrenClassName}
            >
                {children}
            </div>
            <div ref={ref as any} className={referenceChildClassName}>
                {referenceChild}
            </div>
        </div>
    );
};

export default SizeMatchingContainer;

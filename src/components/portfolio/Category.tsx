import React, { Dispatch, SetStateAction } from "react";
import { ListItemTypes } from "../../types";
import CategoryItem from "./CategoryItem";
interface CategoryPropsType {
    title: string;
    list: Array<any>;
    size: string;
    maxNameLength?: number;
    setInfo: Dispatch<SetStateAction<any>>;
}

const Category = ({
    title,
    list,
    size,
    maxNameLength,
    setInfo,
}: CategoryPropsType) => {
    const [lockPos, setLockPos] = React.useState<number>(0);
    const [isMobile, setIsMobile] = React.useState<boolean>(false);
    const [calculatedOffset, setCalculatedOffset] = React.useState<number>(0);
    const [itemWidth, setItemWidth] = React.useState<number>(10000);
    const [drag, setDrag] = React.useState<boolean>(false);
    const [disable, setDisable] = React.useState<boolean>(false);
    const handleMove = (e: any) => {
        if (!disable) {
            const x = e.clientX;
            if (drag) {
                const offset = (x - lockPos) * 2;
                let startTime = performance.now();
                const cb = (timestamp: number) => {
                    const elapsedTime = timestamp - startTime;
                    setLockPos(x);
                    if (elapsedTime < 300) {
                        requestAnimationFrame(cb);
                    }
                };
                cb(startTime);
                const widthCal =
                    -list.length * (12 * 2 + itemWidth) +
                    window.outerWidth -
                    36;
                if (widthCal > 0) {
                    setDisable(true);
                } else if (calculatedOffset + offset > 0) {
                    setCalculatedOffset(0);
                } else if (calculatedOffset + offset < widthCal) {
                    setCalculatedOffset(widthCal);
                } else {
                    setCalculatedOffset((prev) => prev + offset);
                }
            }
        }
    };
    const handleDrag = (isDrag: boolean, e: any) => {
        if (isDrag && !disable) {
            setLockPos(e.clientX);
            setIsMobile(false);
        }
        setDrag(isDrag);
    };
    return (
        <div className="h-[350px] w-full p-5 text-black my-1 drop-shadow-sm overflow-hidden">
            <div className="font-semibold text-2xl text-left">{title}</div>
            <div
                className="relative w-full h-full overflow-hidden"
                onMouseMove={(e) => handleMove(e)}
                onMouseDown={(e) => handleDrag(true, e)}
                onMouseUp={(e) => handleDrag(false, e)}
                onMouseLeave={() => setDrag(false)}
                onTouchStart={() => setIsMobile(true)}
            >
                <div
                    style={{
                        transform:
                            !disable && !isMobile
                                ? `translateX(${calculatedOffset}px)`
                                : "",
                        overflowX: isMobile ? "scroll" : undefined,
                    }}
                    className={`${
                        isMobile ? "hide-scrollbar" : null
                    } absolute w-full p-5 flex transform-gpu ease-linear`}
                >
                    {list.map((listItem: ListItemTypes, index: number) => {
                        return (
                            <CategoryItem
                                key={index}
                                listItem={listItem}
                                index={index}
                                category={title}
                                size={size}
                                maxNameLength={maxNameLength}
                                setItemWidth={setItemWidth}
                                setInfo={setInfo}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Category;

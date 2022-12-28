/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction } from "react";
import { ListItemTypes } from "../../types";
import CategoryItem from "./CategoryItem";
interface CategoryPropsType {
    title: string;
    list: Array<any>;
    size: string;
    setInfo: Dispatch<SetStateAction<any>>;
}

const Category = ({ title, list, size, setInfo }: CategoryPropsType) => {
    const [lockPos, setLockPos] = React.useState<number>(0);
    const [isMobile, setIsMobile] = React.useState<boolean>(false);
    const [offset, setOffset] = React.useState<number>(0);
    const [calculatedOffset, setCalculatedOffset] = React.useState<number>(0);
    const [itemWidth, setItemWidth] = React.useState<number>(10000);
    const [drag, setDrag] = React.useState<boolean>(false);
    const [disable, setDisable] = React.useState<boolean>(false);
    const handleMove = (e: any) => {
        if (!disable) {
            const x = e.clientX;
            if (drag) {
                setOffset((x - lockPos) * 2);
                let startTime = performance.now();
                const cb = (timestamp: number) => {
                    const elapsedTime = timestamp - startTime;
                    setLockPos(x);
                    if (elapsedTime < 300) {
                        requestAnimationFrame(cb);
                    }
                };
                cb(startTime);
            }
        }
    };
    const handleDrag = (isDrag: boolean, e: any) => {
        if (isDrag && !disable) {
            setLockPos(e.clientX);
        }
        setDrag(isDrag);
    };
    React.useEffect(() => {
        const widthCal =
            -list.length * (12 * 2 + itemWidth) - 36 + window.innerWidth;
        if (widthCal > 0) {
            setDisable(true);
        } else if (calculatedOffset + offset > 0) {
            setCalculatedOffset(0);
        } else if (calculatedOffset + offset < widthCal) {
            setCalculatedOffset(widthCal);
        } else {
            setCalculatedOffset((prev) => prev + offset);
        }
    }, [offset, itemWidth]);
    return (
        <div className="h-fit w-full text-black my-1 drop-shadow-sm">
            <div className="px-5 font-semibold text-2xl text-left">{title}</div>
            <div
                className="relative w-full overflow-hidden "
                onMouseMove={(e) => handleMove(e)}
                onMouseDown={(e) => handleDrag(true, e)}
                onMouseUp={(e) => handleDrag(false, e)}
                onMouseLeave={() => setDrag(false)}
                onTouchStart={() => (!isMobile ? setIsMobile(true) : null)}
            >
                <div
                    style={{
                        transform:
                            !disable && !isMobile
                                ? `translateX(${calculatedOffset}px)`
                                : "",
                    }}
                    className={`${
                        isMobile ? "overflow-x-scroll hide-scrollbar" : null
                    } w-full p-5 flex transform-gpu ease-linear`}
                >
                    {list.map((listItem: ListItemTypes, index: number) => {
                        return (
                            <CategoryItem
                                key={index}
                                listItem={listItem}
                                index={index}
                                category={title}
                                size={size}
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

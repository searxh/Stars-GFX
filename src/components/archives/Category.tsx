/* eslint-disable react-hooks/exhaustive-deps */
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ListItemTypes } from "../../types";
import CategoryItem from "./CategoryItem";
interface CategoryPropsType {
    title: string;
    list: Array<any>;
    size: string;
    setInfo: Dispatch<SetStateAction<any>>;
}

const Category = ({ title, list, size, setInfo }: CategoryPropsType) => {
    const isLargerThanMedium = useMediaQuery("(min-width: 786px)");
    const [calculatedOffset, setCalculatedOffset] = React.useState<number>(0);
    const [itemWidth, setItemWidth] = React.useState<number>(10000);
    const [disable, setDisable] = React.useState<boolean>(false);
    const widthCal =
        -list.length * (12 * 2 + itemWidth) - 36 + window.innerWidth;
    const calculateOffset = (isForward: boolean) => {
        const offset = isForward
            ? -window.innerWidth / 1.2
            : window.innerWidth / 1.2;
        if (widthCal > 0) {
            setDisable(true);
        } else if (calculatedOffset + offset > 0) {
            setCalculatedOffset(0);
        } else if (calculatedOffset + offset < widthCal) {
            setCalculatedOffset(widthCal);
        } else {
            setCalculatedOffset((prev) => prev + offset);
        }
    };
    return (
        <div className="h-fit w-full text-black my-1 drop-shadow-sm">
            <div className="px-5 font-semibold text-2xl text-left">{title}</div>
            <div className="relative w-full overflow-hidden">
                {isLargerThanMedium ? (
                    <>
                        {calculatedOffset !== 0 ? (
                            <button
                                onClick={() => calculateOffset(false)}
                                className="absolute left-0 top-0 bottom-0 h-full z-10 group px-2"
                            >
                                <FontAwesomeIcon
                                    className="text-white drop-shadow-sm w-10 h-10 group-hover:opacity-100 group-hover:scale-110 duration-500 transform-gpu opacity-60"
                                    icon={faChevronCircleLeft}
                                />
                            </button>
                        ) : null}
                        {calculatedOffset !== widthCal ? (
                            <button
                                onClick={() => calculateOffset(true)}
                                className="absolute right-0 top-0 bottom-0 z-10 group px-2"
                            >
                                <FontAwesomeIcon
                                    className="text-white drop-shadow-sm w-10 h-10 group-hover:opacity-100 hover:scale-110 duration-500 transform-gpu opacity-60"
                                    icon={faChevronCircleRight}
                                />
                            </button>
                        ) : null}
                    </>
                ) : null}
                <div
                    style={{
                        transform:
                            !disable && isLargerThanMedium
                                ? `translateX(${calculatedOffset}px)`
                                : "",
                    }}
                    className={`${
                        !isLargerThanMedium
                            ? "overflow-x-scroll hide-scrollbar"
                            : null
                    } w-full p-5 flex transform-gpu duration-500`}
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

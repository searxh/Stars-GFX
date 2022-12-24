import React, { Dispatch, SetStateAction } from "react";

interface CategoryItemPropsType {
    src: string;
    size: string;
    name?: string;
    desc?: string;
    maxNameLength?: number;
    setItemWidth: Dispatch<SetStateAction<number>>;
    setInfo: Dispatch<SetStateAction<any>>;
}

const CategoryItem = ({
    src,
    size,
    name,
    desc,
    maxNameLength,
    setItemWidth,
    setInfo,
}: CategoryItemPropsType) => {
    const getName = (name: string | undefined) => {
        if (name && maxNameLength && name.length > maxNameLength) {
            return name.slice(0, maxNameLength - 1) + "..";
        } else if (name) {
            return name;
        } else {
            return "";
        }
    };
    const [displayName] = React.useState<string>(getName(name));
    const ref = React.useRef<any>(null);
    const handleOnClick = () => {
        setInfo({
            src: src,
            name: name,
            desc: desc,
        });
    };
    React.useEffect(() => {
        if (ref.current) {
            setItemWidth(ref.current.offsetWidth);
        }
    }, [ref.current]);
    return (
        <button
            onDoubleClick={handleOnClick}
            className="relative shrink-0 mx-[12px] my-auto transition duration-300 hover:scale-105"
        >
            <div
                className="flex absolute top-8 bottom-0 right-0 left-0 w-full h-full z-20 opacity-0 
                hover:opacity-100 hover:animate-double-tap m-auto"
            >
                <div className="w-8 h-8 bg-white rounded-full m-auto text-2xl opacity-50" />
            </div>
            <div
                className={`font-semibold pb-2 text-neutral-700 text-lg text-left`}
            >
                {displayName}
            </div>
            <img
                ref={ref}
                className={`${size} object-cover object-center rounded-xl drop-shadow-md`}
                src={src}
                draggable={false}
                alt=""
            />
        </button>
    );
};

export default CategoryItem;

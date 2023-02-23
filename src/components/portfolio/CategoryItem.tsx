/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction } from "react";
import { projects, portfolio } from "../../lib/portfolio";
import { ListItemTypes } from "../../types";
//import { ref, getDownloadURL } from "firebase/storage";
//import { storage } from "../../firebase";

interface CategoryItemPropsType {
    listItem: any;
    category: string;
    size: string;
    index: number;
    setItemWidth: Dispatch<SetStateAction<number>>;
    setInfo: Dispatch<SetStateAction<any>>;
}

const keyMapper: { [key: string]: number } = {
    "Roblox GFX": 0,
    "Graphics & Art": 1,
    Projects: 2,
    Photography: 3,
};

const CategoryItem = ({
    listItem,
    category,
    size,
    index,
    setItemWidth,
    setInfo,
}: CategoryItemPropsType) => {
    const { name, desc, arr } = listItem;
    const [src, setSrc] = React.useState<string>();
    const [displayName] = React.useState<string>(name);
    const [tapTime, setTapTime] = React.useState<number>(Date.now());
    const imageRef = React.useRef<HTMLImageElement>(null);
    const nameRef = React.useRef<HTMLDivElement>(null);
    const getSrc = () => {
        const type = ".webp";
        const imageName =
            String.fromCharCode(97 + keyMapper[category]) +
            (portfolio[keyMapper[category]].length - index) +
            type;
        /*const imageRef = ref(storage, "Portfolio/" + imageName);
        getDownloadURL(imageRef).then((url: string) => {
            setSrc(url);
        });*/
        setSrc("/images/portfolio/" + imageName);
    };
    const handleOnClick = () => {
        setInfo({
            src: src,
            name: name,
            desc: desc,
            isProject: projects
                .map((proj: ListItemTypes) => proj.name)
                .includes(name)
                ? true
                : undefined,
            arr: arr,
            timestamp: Date.now(),
        });
    };
    const handleOnTap = () => {
        const timesince = Date.now() - tapTime;
        if (timesince < 400 && timesince > 0) {
            handleOnClick();
        }
        setTapTime(Date.now());
    };
    React.useEffect(() => {
        getSrc();
        if (imageRef.current && imageRef.current.offsetWidth) {
            setItemWidth(imageRef.current.offsetWidth);
        }
        window.addEventListener("resize", () => {
            if (imageRef.current && imageRef.current.offsetWidth) {
                setItemWidth(imageRef.current.offsetWidth);
            }
        });
        return () =>
            window.removeEventListener("reisze", () => {
                if (imageRef.current && imageRef.current.offsetWidth) {
                    setItemWidth(imageRef.current.offsetWidth);
                }
            });
    }, []);
    return (
        <button
            onClick={handleOnClick}
            onTouchStart={handleOnTap}
            className="relative shrink-0 mx-[12px] my-auto transform-gpu duration-300 md:hover:scale-105"
        >
            {name ? (
                <div
                    ref={nameRef}
                    className={`${size} max-h-9 font-semibold pb-2 text-neutral-700 text-sm lg:text-lg text-left 
                    w-full overflow-hidden leading-10 break-words`}
                >
                    {displayName}
                </div>
            ) : null}
            <img
                ref={imageRef}
                className={`${size} object-cover object-center rounded-xl drop-shadow-md`}
                src={src}
                draggable={false}
                alt=""
            />
        </button>
    );
};

export default CategoryItem;

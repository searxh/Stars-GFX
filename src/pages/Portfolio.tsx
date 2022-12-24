import React from "react";
import Category from "../components/portfolio/Category";
import StandardCard from "../components/portfolio/StandardCard";
import { portfolio } from "../lib/portfolio";

const Portfolio = () => {
    const [info, setInfo] = React.useState<any>({
        src: "",
        name: "",
        desc: "",
    });
    return (
        <div
            className="flex flex-col pt-12 w-full min-h-screen h-full
            font-nunito bg-neutral-100 text-center"
        >
            <StandardCard
                src={info.src}
                name={info.name}
                desc={info.desc}
                callback={() => {
                    setInfo({
                        src: "",
                        name: "",
                        desc: "",
                    });
                }}
            />
            <Category
                title="Roblox GFX"
                list={portfolio.gfx}
                size="h-[224px]"
                setInfo={setInfo}
            />
            <Category
                title="Graphics & Art"
                list={portfolio.art}
                size="w-[192px] h-[192px]"
                maxNameLength={21}
                setInfo={setInfo}
            />
            <Category
                title="Projects"
                list={portfolio.projects}
                size="h-[224px]"
                setInfo={setInfo}
            />
            <Category
                title="Photography"
                list={portfolio.photos}
                size="w-[192px] h-[192px]"
                setInfo={setInfo}
            />
        </div>
    );
};

export default Portfolio;

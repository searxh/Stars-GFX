import React from "react";
import Footer from "../components/Footer";
import Category from "../components/portfolio/Category";
import ItemWindow from "../components/portfolio/ItemWindow";
import { portfolio } from "../lib/portfolio";

const Portfolio = () => {
    const [info, setInfo] = React.useState<any>({
        src: "",
        name: "",
        desc: "",
        isProject: false,
        arr: undefined,
    });
    return (
        <div
            className="relative flex flex-col py-12 w-full min-h-screen h-full
            font-nunito bg-neutral-100 text-center"
        >
            <ItemWindow
                src={info.src}
                name={info.name}
                desc={info.desc}
                arr={info.arr}
                isProject={info.isProject}
                callback={() => {
                    setInfo({
                        src: "",
                        name: "",
                        desc: "",
                        isProject: false,
                        arr: undefined,
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
            <Footer />
        </div>
    );
};

export default Portfolio;

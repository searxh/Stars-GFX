import React from "react";
import Footer from "../components/Footer";
import Category from "../components/portfolio/Category";
import ItemWindow from "../components/portfolio/ItemWindow";
import { portfolio } from "../lib/portfolio";

const Portfolio = () => {
    const [info, setInfo] = React.useState<any>({});
    return (
        <div
            className="relative flex flex-col py-12 w-full min-h-screen h-full
            font-nunito bg-neutral-100 text-center"
        >
            <ItemWindow
                listItem={info}
                callback={() => {
                    setInfo({});
                }}
            />
            <Category
                title="Roblox GFX"
                list={portfolio[0]}
                size="h-[160px] w-[284px] lg:w-[398px] lg:h-[224px]"
                setInfo={setInfo}
            />
            <Category
                title="Graphics & Art"
                list={portfolio[1]}
                size="w-[140px] h-[140px] lg:w-[192px] lg:h-[192px]"
                setInfo={setInfo}
            />
            <Category
                title="Projects"
                list={portfolio[2]}
                size="h-[160px] w-[284px] lg:w-[398px] lg:h-[224px]"
                setInfo={setInfo}
            />
            <Category
                title="Photography"
                list={portfolio[3]}
                size="h-[140px] w-[140px] lg:w-[192px] lg:h-[192px]"
                setInfo={setInfo}
            />
            <Footer />
        </div>
    );
};

export default Portfolio;

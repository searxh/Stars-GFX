import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import Background from "../components/web/Background";
import useMediaQuery from "../hooks/useMediaQuery";
import LogoSection from "../components/web/sections/LogoSection";
import PropositionSection from "../components/web/sections/PropositionSection";
import TimelineSection from "../components/web/sections/TimelineSection";
import EndingSection from "../components/web/sections/EndingSection";
import FAQSection from "../components/web/sections/FAQSection";
import isIOS from "../utils/isIOS";
import ClientReviewSection from "../components/web/sections/ClientReviewSection";
import SupportPlanSection from "../components/web/sections/SupportPlanSection";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import MainServiceSection from "../components/web/sections/MainServiceSection";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlined from "@mui/icons-material/InfoOutlined";

const WebServicePage = () => {
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");

    const ref = useRef(null);
    const propositionRef = useRef<HTMLDivElement>(null);

    const [scrollProgress, setScrollProgress] = useState(0);
    const { scrollYProgress } = useScroll({ container: ref });

    const scrollToProposition = () => {
        propositionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollProgress(latest);
    });

    return (
        <>
            {isSmallerThanMedium || isIOS() ? (
                <>
                    <div
                        className={`relative flex flex-col h-screen w-screen text-white font-nunito brightness-100`}
                    >
                        <Tooltip
                            title={`This work is based on "big galaxy" (https://sketchfab.com/3d-models/big-galaxy-5df1d9343bb645d3ac15334c02da049e) by Clockman (1266shin) (https://sketchfab.com/1266shin) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/). This work is based on "Realistic galaxy Skybox HDRI panorama" (https://sketchfab.com/3d-models/realistic-galaxy-skybox-hdri-panorama-36305db19f5a43bc805e023ad0f4a6c4) by Aliaksandr.melas (https://sketchfab.com/alexandr.melas) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)`}
                        >
                            <InfoOutlined className="fixed bottom-12 right-12 text-neutral-500 z-[9999]" />
                        </Tooltip>
                        <Background progress={scrollProgress} />
                        <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-black bg-opacity-20"></div>
                        <div
                            ref={ref}
                            className="relative mt-12 w-screen h-full overflow-y-scroll overflow-x-hidden"
                        >
                            <LogoSection onClickStart={scrollToProposition} />

                            <PropositionSection ref={propositionRef} />
                            <ClientReviewSection />

                            <SupportPlanSection />

                            <MainServiceSection />
                            <TimelineSection />
                            <EndingSection />
                            <FAQSection />
                            <Footer isAbsolute={false} />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div
                        className={`relative flex flex-col h-screen w-screen text-white font-nunito brightness-100`}
                    >
                        <Tooltip
                            title={`This work is based on "big galaxy" (https://sketchfab.com/3d-models/big-galaxy-5df1d9343bb645d3ac15334c02da049e) by Clockman (1266shin) (https://sketchfab.com/1266shin) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/). This work is based on "Realistic galaxy Skybox HDRI panorama" (https://sketchfab.com/3d-models/realistic-galaxy-skybox-hdri-panorama-36305db19f5a43bc805e023ad0f4a6c4) by Aliaksandr.melas (https://sketchfab.com/alexandr.melas) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)`}
                        >
                            <InfoOutlined className="fixed bottom-12 right-12 text-neutral-500 z-[9999]" />
                        </Tooltip>
                        <Background progress={scrollProgress} />
                        <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-black bg-opacity-20"></div>
                        <div
                            ref={ref}
                            className="relative mt-12 w-screen h-full overflow-y-scroll overflow-x-hidden"
                        >
                            <LogoSection onClickStart={scrollToProposition} />

                            <PropositionSection ref={propositionRef} />
                            <ClientReviewSection />

                            <SupportPlanSection />

                            <MainServiceSection />
                            <TimelineSection />
                            <EndingSection />
                            <FAQSection />
                            <Footer isAbsolute={false} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default WebServicePage;

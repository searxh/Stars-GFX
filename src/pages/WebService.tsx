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

const WebServicePage = () => {
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");

    const ref = useRef(null);

    const [scrollProgress, setScrollProgress] = useState(0);
    const { scrollYProgress } = useScroll({ container: ref });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollProgress(latest);
    });

    return (
        <>
            {isSmallerThanMedium || isIOS() ? (
                <>
                    {/* <div
                        className={`flex flex-col justify-evenly py-12 pb-0 w-screen min-h-screen 
                        h-full text-white font-nunito brightness-100`}
                    >
                        <LogoSection />

                        <PropositionSection />
                        <ClientReviewSection />
                        <SupportPlanSection />

                        <TimelineSection />
                        <EndingSection />
                        <FAQSection />
                        <Footer />
                    </div>
                    <Background /> */}
                </>
            ) : (
                <>
                    <div
                        className={`relative flex flex-col h-screen w-screen text-white font-nunito brightness-100`}
                    >
                        <Background progress={scrollProgress} />
                        <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-black bg-opacity-20"></div>
                        <div
                            ref={ref}
                            className="relative mt-12 w-screen h-full overflow-y-scroll overflow-x-hidden"
                        >
                            <LogoSection />

                            <PropositionSection />
                            <ClientReviewSection />

                            <SupportPlanSection />

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

import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import Background from "../components/web/Background";
import useMediaQuery from "../hooks/useMediaQuery";
import LogoSection from "../components/web/sections/LogoSection";
import PropositionSection from "../components/web/sections/PropositionSection";
import MainServiceSection from "../components/web/sections/MainServiceSection";
import AdditionalServiceSection from "../components/web/sections/AdditionalServiceSection";
import TimelineSection from "../components/web/sections/TimelineSection";
import EndingSection from "../components/web/sections/EndingSection";
import FAQSection from "../components/web/sections/FAQSection";
import MaintenanceSection from "../components/web/sections/MaintenanceSection";

const WebServicePage = () => {
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");
    const isIOS = () => {
        return (
            (/iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !(window as any).MSStream) ||
            !!navigator.userAgent.match(/Version\/[\d.]+.*Safari/)
        );
    };
    return (
        <div className="relative h-full overflow-hidden">
            {isSmallerThanMedium || isIOS() ? (
                <>
                    <div
                        className={`flex flex-col justify-evenly py-12 pb-0 w-screen min-h-screen 
                        h-full text-white font-nunito brightness-100`}
                    >
                        <LogoSection />

                        <PropositionSection />
                        <MainServiceSection />
                        <AdditionalServiceSection />
                        <MaintenanceSection />

                        <TimelineSection />
                        <EndingSection />
                        <FAQSection />
                        <Footer />
                    </div>
                    <Background />
                </>
            ) : (
                <>
                    <SmoothScroll>
                        <div
                            className={`flex flex-col justify-evenly py-12 pb-0 w-screen min-h-screen 
                        h-full text-white font-nunito brightness-100`}
                        >
                            <LogoSection />

                            <PropositionSection />
                            <MainServiceSection />
                            <AdditionalServiceSection />
                            <MaintenanceSection />

                            <TimelineSection />
                            <EndingSection />
                            <FAQSection />
                            <Footer />
                        </div>
                    </SmoothScroll>
                    <Background />
                </>
            )}
        </div>
    );
};

export default WebServicePage;

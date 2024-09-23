import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import FirstSection from "../components/web/sections/FirstSection";
import SecondSection from "../components/web/sections/SecondSection";
import ThirdSection from "../components/web/sections/ThirdSection";
import FourthSection from "../components/web/sections/FourthSection";
import FifthSection from "../components/web/sections/FifthSection";
import SixthSection from "../components/web/sections/SixthSection";
import SeventhSection from "../components/web/sections/SeventhSection";
import Background from "../components/web/Background";

const WebServicePage = () => {
    return (
        <div className="bg-black">
            <SmoothScroll className="z-[1]">
                <div
                    className={`flex flex-col justify-evenly py-12 pb-0 w-full min-h-screen 
                        h-full text-white font-nunito brightness-100`}
                >
                    <FirstSection />

                    <SecondSection />
                    <div className="flex flex-col gap-5 w-full h-full p-10">
                        <ThirdSection />
                        <FourthSection />
                    </div>

                    <FifthSection />
                    <SixthSection />
                    <SeventhSection />
                    <Footer />
                </div>
            </SmoothScroll>
            <Background />
        </div>
    );
};

export default WebServicePage;

import GlassmorphismCard from "../../GlassmorphismCard";
import AnimatedContainer from "../../AnimatedContainer";

const SupportPlanSection = () => {
    return (
        <AnimatedContainer
            options={{
                leftSlideIn: true,
            }}
            className="relative w-full flex flex-col gap-[72px] md:py-24 py-4"
        >
            <div className="flex flex-col gap-12 md:px-24 px-4">
                <div className="flex flex-col gap-6 text-center leading-tight drop-shadow-md mx-auto">
                    <div className="font-bold md:text-5xl text-4xl text-white">
                        <span className="text-primary">SUPPORT</span> PLAN
                    </div>
                    <div className="text-white text-lg max-w-lg">
                        Gain peace of mind with ongoing support designed to keep
                        your site fast, secure, and up-to-date.
                    </div>
                </div>
                <div className="flex md:flex-row flex-col md:gap-9 gap-4 md:max-w-[80%] w-full h-full mx-auto">
                    <GlassmorphismCard className="flex flex-col gap-4 p-6 w-full">
                        <GlassmorphismCard className="flex flex-col gap-2 p-6">
                            <div className="font-black md:text-3xl text-2xl leading-tight">
                                Unlimited Bug Fixes
                            </div>
                            <div className="text-secondary">
                                Fixes, forever.
                            </div>
                        </GlassmorphismCard>
                        <div className="text-sm">
                            We'll resolve bugs and unexpected issues on your
                            site as they arise — no cap, no surprise charges.
                        </div>
                    </GlassmorphismCard>
                    <GlassmorphismCard className="flex flex-col gap-4 p-6 w-full">
                        <GlassmorphismCard className="flex flex-col gap-2 p-6">
                            <div className="font-black md:text-3xl text-2xl leading-tight">
                                Security Updates
                            </div>
                            <div className="text-secondary">
                                Secure by default.
                            </div>
                        </GlassmorphismCard>
                        <div className="text-sm">
                            Regular updates to your stack and dependencies to
                            patch vulnerabilities and maintain compliance with
                            security standards.
                        </div>
                    </GlassmorphismCard>
                    <GlassmorphismCard className="flex flex-col gap-4 p-6 w-full">
                        <GlassmorphismCard className="flex flex-col gap-2 p-6">
                            <div className="font-black md:text-3xl text-2xl leading-tight">
                                Scaleable Data Transfer
                            </div>
                            <div className="text-secondary">
                                Powered by Firebase.
                            </div>
                        </GlassmorphismCard>
                        <div className="text-sm">
                            Includes Firebase's Spark Plan by default, giving
                            you a generous free tier. If your website scales and
                            exceeds usage limits, additional charges will apply
                            based on Firebase's pricing — we'll guide you when
                            you're ready.
                        </div>
                    </GlassmorphismCard>
                </div>
            </div>
            <div className="bg-black backdrop-blur-[100px] backdrop-filter bg-opacity-40 p-9 w-full h-full text-center text-white">
                <div className="font-black text-3xl leading-tight">
                    <span className="text-secondary">10 USD</span> / month
                </div>
                <div>Available in 6 months or annually</div>
            </div>
        </AnimatedContainer>
    );
};

export default SupportPlanSection;

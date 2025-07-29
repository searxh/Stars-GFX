import GlassmorphismCard from "../../GlassmorphismCard";
import AnimatedContainer from "../../AnimatedContainer";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const PropositionSection = () => {
    return (
        <AnimatedContainer
            options={{
                leftSlideIn: true,
            }}
            className="flex flex-col md:p-24 p-4 w-full"
        >
            <div className="grid gap-12 w-full place-items-center">
                <div className="flex flex-col gap-6 text-center leading-tight drop-shadow-md mx-auto">
                    <div className="font-bold md:text-5xl text-4xl text-white">
                        WHAT WE <span className="text-primary">OFFER</span>
                    </div>
                    <div className="text-white text-lg max-w-lg">
                        From custom UI/UX to long-term support, we build
                        scalable solutions tailored to your brand and goals.
                    </div>
                </div>
                <div className="flex flex-col gap-10 h-fit md:max-w-[80rem] w-full">
                    <GlassmorphismCard className="flex md:flex-row flex-col h-full md:p-8 p-4 place-content-end">
                        <img
                            src="/images/custom.webp"
                            alt="Custom UI/UX "
                            className="md:absolute md:left-8 md:w-[30%] w-full flex md:h-[90%] h-fit object-cover rounded-xl md:mb-0 mb-4"
                        />
                        <div className="md:w-[70%] w-full flex flex-col justify-between md:gap-12 gap-6 h-full md:p-4 p-2 md:pl-12 pl-0">
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-2 text-secondary">
                                    <DesignServicesIcon fontSize="large" />
                                    <div className="md:text-3xl text-2xl font-bold leading-tight">
                                        CUSTOM UX/UI DESIGN
                                    </div>
                                </div>

                                <div className="md:text-base text-sm text-neutral-300">
                                    We don't use templates. Every interface is
                                    designed from scratch to reflect your
                                    brand's identity and audience. Whether
                                    you're a game studio or a creative company,
                                    we craft intuitive, immersive, and visually
                                    striking experiences tailored to your
                                    vision.
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col md:gap-10 gap-5">
                                <GlassmorphismCard className="flex flex-col gap-5 p-6">
                                    <div className="font-bold md:text-2xl text-xl leading-tight">
                                        Brand-Focused <br />
                                        Web Development
                                    </div>
                                    <div className="md:text-base text-sm text-neutral-300">
                                        Your website is more than just a
                                        page—it's your digital flagship. We work
                                        closely with you to translate your
                                        brand's personality into web form,
                                        ensuring the tone, aesthetics, and
                                        layout match your unique identity and
                                        goals.
                                    </div>
                                </GlassmorphismCard>
                                <GlassmorphismCard className="flex flex-col gap-5 p-6">
                                    <div className="font-bold md:text-2xl text-xl leading-tight">
                                        Mobile-First <br />
                                        Responsive Sites
                                    </div>
                                    <div className="md:text-base text-sm text-neutral-300">
                                        Your users are everywhere, and your site
                                        should be too. We build all websites
                                        with a mobile-first mindset—ensuring
                                        lightning-fast performance, intuitive
                                        navigation, and pixel-perfect layouts on
                                        all screen sizes, from phones to
                                        desktops.
                                    </div>
                                </GlassmorphismCard>
                            </div>
                        </div>
                    </GlassmorphismCard>
                    <GlassmorphismCard className="flex md:flex-row flex-col h-full md:p-8 p-4">
                        <img
                            src="/images/archives/a27.webp"
                            alt="Custom UI/UX"
                            className="md:absolute md:right-8 md:w-[30%] w-full flex md:h-[90%] h-fit object-cover rounded-xl md:mb-0 mb-4"
                        />
                        <div className="md:w-[70%] w-full flex flex-col justify-between md:gap-12 gap-6 h-full md:p-4 p-2 md:pr-12 pr-0">
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-2 text-primary">
                                    <SupportAgentIcon fontSize="large" />
                                    <div className="md:text-3xl text-2xl font-bold leading-tight">
                                        TECHNOLOGY & LONG-TERM SUPPORT
                                    </div>
                                </div>
                                <div className="md:text-base text-sm text-neutral-300">
                                    The systems behind your site matter. We
                                    build on modern, secure architecture and
                                    offer continuous care to keep your digital
                                    presence fast, reliable, and future-proof.
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col md:gap-10 gap-5">
                                <GlassmorphismCard className="flex flex-col gap-5 p-6">
                                    <div className="font-bold md:text-2xl text-xl leading-tight">
                                        Secure & Scalable <br />
                                        Tech Stack
                                    </div>
                                    <div className="md:text-base text-sm text-neutral-300">
                                        We use modern, battle-tested
                                        technologies like Next.js, TailwindCSS,
                                        Firebase, and Vercel to build fast,
                                        scalable, and secure web applications.
                                        Whether you're launching your first
                                        landing page or preparing for major
                                        traffic spikes, your site will be ready.
                                    </div>
                                </GlassmorphismCard>
                                <GlassmorphismCard className="flex flex-col gap-5 p-6">
                                    <div className="font-bold md:text-2xl text-xl leading-tight">
                                        Ongoing Support & <br />
                                        Maintenance
                                    </div>
                                    <div className="md:text-base text-sm text-neutral-300">
                                        The web evolves—and so should your site.
                                        We offer optional monthly maintenance
                                        plans that cover security patches,
                                        performance updates, content edits, and
                                        feature enhancements, so you never have
                                        to worry about staying current or
                                        secure.
                                    </div>
                                </GlassmorphismCard>
                            </div>
                        </div>
                    </GlassmorphismCard>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default PropositionSection;

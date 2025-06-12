import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
            className="flex flex-col p-24 w-full"
        >
            <div className="grid w-full place-items-center">
                <div className="font-bold text-5xl text-center md:text-left mb-[36px] drop-shadow-md">
                    WHAT WE <span className="text-[#5CC9FF]">OFFER</span>
                </div>
                <div className="flex flex-col gap-10 h-fit max-w-[80rem]">
                    <GlassmorphismCard className="relative flex p-8 gap-6 place-items-center">
                        <img
                            src="/images/custom_UI.png"
                            alt="Custom UI/UX "
                            className="w-[25%] object-cover"
                        />
                        <div className="w-[75%] flex flex-col justify-between gap-12 h-full p-4">
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-2 text-secondary">
                                    <DesignServicesIcon fontSize="large" />
                                    <div className=" text-3xl font-bold leading-tight">
                                        CUSTOM UX/UI DESIGN
                                    </div>
                                </div>

                                <div className="text-base">
                                    We don't use templates. Every interface is
                                    designed from scratch to reflect your
                                    brand's identity and audience. Whether
                                    you're a game studio or a creative company,
                                    we craft intuitive, immersive, and visually
                                    striking experiences tailored to your
                                    vision.
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <GlassmorphismCard className="flex flex-col gap-5 p-6">
                                    <div className="font-bold text-2xl leading-tight">
                                        Brand-Focused <br />
                                        Web Development
                                    </div>
                                    <div className="text-base">
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
                                    <div className="font-bold text-2xl leading-tight">
                                        Mobile-First <br />
                                        Responsive Sites
                                    </div>
                                    <div className="text-base">
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
                    <GlassmorphismCard className="flex gap-6 p-8 place-items-center flex-row-reverse">
                        <img
                            src="/images/woman.png"
                            alt="Custom UI/UX"
                            className="w-[30%] object-cover"
                        />
                        <div className="w-[70%] flex flex-col justify-between gap-12 h-full p-4">
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-2 text-primary">
                                    <SupportAgentIcon fontSize="large" />
                                    <div className=" text-3xl font-bold leading-tight">
                                        TECHNOLOGY & <br />
                                        LONG-TERM SUPPORT
                                    </div>
                                </div>
                                <div className="text-base">
                                    The systems behind your site matter. We
                                    build on modern, secure architecture and
                                    offer continuous care to keep your digital
                                    presence fast, reliable, and future-proof.
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <GlassmorphismCard className="flex flex-col gap-5 p-6">
                                    <div className="font-bold text-2xl leading-tight">
                                        Secure & Scalable <br />
                                        Tech Stack
                                    </div>
                                    <div className="text-base">
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
                                    <div className="font-bold text-2xl leading-tight">
                                        Ongoing Support & <br />
                                        Maintenance
                                    </div>
                                    <div className="text-base">
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

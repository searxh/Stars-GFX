import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import GlassmorphismCard from "../../GlassmorphismCard";

const PropositionSection = () => {
    const ref = useRef(null);
    const section = useInView(ref);
    return (
        <motion.div
            ref={ref}
            animate={{
                translateX: section ? 0 : -50,
                opacity: section ? 1 : 0,
                filter: section ? "blur(0px)" : "blur(20px)",
            }}
            transition={{
                duration: 1,
            }}
            className="flex flex-col md:flex-row w-full max-w-[25rem] md:max-w-full h-[100rem] my-[10rem] mx-auto"
        >
            <div className="absolute -z-10 translate-x-24 translate-y-96 blur-lg">
                <img src="/images/wwo_bg.png" alt="wwo_bg" />
            </div>

            <div className="grid w-full place-items-center p-[107px]">
                <div className="font-bold text-lg md:text-[64px] text-center md:text-left mb-[36px]">
                    WHAT WE <span className="text-[#5CC9FF]">OFFER</span>
                </div>
                <div className="flex-col flex gap-10">
                    <GlassmorphismCard>
                        <div className="flex gap-6 h-full place-items-center">
                            <img
                                src="/images/custom_UI.png"
                                alt="Custom UI/UX "
                                className="w-full"
                            />
                            <div className="flex flex-col gap-12 p-4">
                                <div className="flex flex-col gap-6">
                                    <div className="text-[#FF4388] text-4xl font-bold leading-tight">
                                        CUSTOM UX/UI DESIGN
                                    </div>
                                    <div className="text-base">
                                        We don't use templates. Every interface
                                        is designed from scratch to reflect your
                                        brand's identity and audience. Whether
                                        you're a game studio or a creative
                                        company, we craft intuitive, immersive,
                                        and visually striking experiences
                                        tailored to your vision.
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div className="flex flex-col gap-5">
                                        <div className="font-bold text-2xl leading-tight">
                                            Brand-Focused Web Development
                                        </div>
                                        <div className="text-base">
                                            Your website is more than just a
                                            page—it's your digital flagship. We
                                            work closely with you to translate
                                            your brand's personality into web
                                            form, ensuring the tone, aesthetics,
                                            and layout match your unique
                                            identity and goals.
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5 ">
                                        <div className="font-bold text-2xl leading-tight">
                                            Mobile-First Responsive Sites
                                        </div>
                                        <div className="text-base">
                                            Your users are everywhere, and your
                                            site should be too. We build all
                                            websites with a mobile-first
                                            mindset—ensuring lightning-fast
                                            performance, intuitive navigation,
                                            and pixel-perfect layouts on all
                                            screen sizes, from phones to
                                            desktops.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassmorphismCard>
                    <GlassmorphismCard>
                        <div className="flex gap-6 h-full place-items-center flex-row-reverse">
                            <img src="/images/woman.png" alt="Custom UI/UX" />
                            <div className="flex flex-col gap-12 p-4">
                                <div className="flex flex-col gap-6">
                                    <div className="text-[#5CC9FF] text-4xl font-bold leading-tight">
                                        TECHNOLOGY & LONG-TERM SUPPORT
                                    </div>
                                    <div className="text-base">
                                        The systems behind your site matter. We
                                        build on modern, secure architecture and
                                        offer continuous care to keep your
                                        digital presence fast, reliable, and
                                        future-proof.
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div className="flex flex-col gap-5">
                                        <div className="font-bold text-2xl leading-tight">
                                            Secure & Scalable Tech Stack
                                        </div>
                                        <div className="text-base">
                                            We use modern, battle-tested
                                            technologies like Next.js,
                                            TailwindCSS, Firebase, and Vercel to
                                            build fast, scalable, and secure web
                                            applications. Whether you're
                                            launching your first landing page or
                                            preparing for major traffic spikes,
                                            your site will be ready.
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5 ">
                                        <div className="font-bold text-2xl leading-tight">
                                            Ongoing Support & Maintenance
                                        </div>
                                        <div className="text-base">
                                            The web evolves—and so should your
                                            site. We offer optional monthly
                                            maintenance plans that cover
                                            security patches, performance
                                            updates, content edits, and feature
                                            enhancements, so you never have to
                                            worry about staying current or
                                            secure.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassmorphismCard>
                </div>
            </div>
        </motion.div>
    );
};

export default PropositionSection;

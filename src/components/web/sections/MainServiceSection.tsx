import { CheckRounded } from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MainServiceSelectCard from "../../MainServiceSelectCard";

const MainServiceSection = () => {
    const ref = useRef(null);
    const section = useInView(ref);

    return (
        <motion.div
            ref={ref}
            animate={{
                translateX: section ? 0 : 50,
                opacity: section ? 1 : 0,
                filter: section ? "blur(0px)" : "blur(20px)",
            }}
            transition={{
                duration: 0.5,
            }}
            className="flex flex-col gap-2 m-auto my-[10rem] "
        >
            <div className="grid w-full place-items-center p-[96px]">
                <div className="flex flex-col">
                    <div className="flex flex-col items-start">
                        <div className="font-bold text-lg md:text-[64px] text-center md:text-left ">
                            BUILD YOUR{" "}
                            <span className="text-[#FF4388]">WEBSITE</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[36px] font-semibold">
                                STARTING AT{" "}
                                <span className="text-[#5CC9FF]"> $699</span>
                            </div>
                            <div>(Custom assets not included)</div>
                        </div>
                        <div className="mt-[36px] text-lg">
                            Select your preferred add-ons. Your price will
                            update as you build.
                        </div>
                    </div>
                    <div className="flex gap-[42px] mt-[72px]">
                        <img
                            src="/images/mainService1.png"
                            alt="a1"
                            className="w-[642px] h-[592px]"
                        />

                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 items-center">
                                <img
                                    src="/images/star_logo.png"
                                    alt="logo"
                                    width={"80"}
                                    height={"80"}
                                    className="h-[80px] w-[80px]"
                                />
                                <div className="flex flex-col gap-2">
                                    <div className="text-[40px] font-bold p-0">
                                        UI DESIGN
                                    </div>
                                    <div className="text-xl">
                                        Choose the visual complexity of your
                                        site
                                    </div>
                                    <div className="text-md text-[#FFA9EA]">
                                        Select one or more items
                                    </div>
                                </div>
                            </div>
                            <MainServiceSelectCard
                                price={"20"}
                                serviceName={"Animations"}
                                detail={
                                    "Smooth transitions and motion effects for a more engaging experience."
                                }
                            />
                            <MainServiceSelectCard
                                price={"100"}
                                serviceName={"Responsive Design"}
                                detail={
                                    "Tailored layouts for seamless experience across all screen sizes."
                                }
                            />
                            <MainServiceSelectCard
                                price={"100"}
                                serviceName={"3D Design"}
                                detail={
                                    "Add depth and motion with subtle 3D elements and shadows."
                                }
                            />
                        </div>
                    </div>

                    <div className="flex gap-[32px] mt-[72px] flex-row-reverse">
                        <img
                            src="/images/mainService2.png"
                            alt="a1"
                            className="w-[603px] h-[640px]"
                        />

                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 items-center">
                                <img
                                    src="/images/star_logo.png"
                                    alt="logo"
                                    width={"80"}
                                    height={"80"}
                                    className="h-[80px] w-[80px]"
                                />
                                <div className="flex flex-col gap-2 ">
                                    <div className="text-[40px] font-bold p-0">
                                        CORE FEATURE
                                    </div>
                                    <div className="text-xl">
                                        Add the functionality you need to power
                                        your website.
                                    </div>
                                    <div className="text-md text-[#FFA9EA]">
                                        Select one or more items
                                    </div>
                                </div>
                            </div>
                            <MainServiceSelectCard
                                price={"100"}
                                serviceName={"Form Submission"}
                                detail={
                                    "Basic contact or feedback form with up to three custom fields. Includes simple backend handling."
                                }
                            />
                            <MainServiceSelectCard
                                price={"250"}
                                serviceName={"API Integration"}
                                detail={
                                    "Fetch game data, player stats, badges, or inventory from ROBLOX’s public endpoints or other APIs."
                                }
                            />
                            <MainServiceSelectCard
                                price={"500"}
                                serviceName={"Payment System"}
                                detail={
                                    "Accept payments securely using Stripe, PayPal, or other platforms."
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mt-[72px] gap-4">
                        <div className="flex gap-4 items-center">
                            <img
                                src="/images/star_logo.png"
                                alt="logo"
                                width={"80"}
                                height={"80"}
                                className="h-[80px] w-[80px]"
                            />
                            <div className="flex flex-col gap-2 ">
                                <div className="text-[40px] font-bold p-0">
                                    PROJECT ADD-ONS
                                </div>
                                <div className="text-xl">
                                    Fine-tune the functionality and ownership
                                </div>
                                <div className="text-md text-[#FFA9EA]">
                                    Select one or more items
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <MainServiceSelectCard
                                price={"20"}
                                serviceName={"Custom Domain Setup"}
                                detail={
                                    "Fetch game data, player stats, badges, or inventory from ROBLOX’s public endpoints or other APIs."
                                }
                            />
                            <MainServiceSelectCard
                                price={"50"}
                                serviceName={"Basic SEO Optimiazation"}
                                detail={
                                    "Clean URLs, proper metadata, and index-friendly structure for search engines."
                                }
                            />
                            <MainServiceSelectCard
                                price={"500"}
                                serviceName={"Admin Dashboard"}
                                detail={
                                    "Manage content, users, and data with an easy-to-use backend panel without having to contact us for changes."
                                }
                            />

                            <MainServiceSelectCard
                                price={"50% of total"}
                                serviceName={
                                    "Source Code + Basic Documentation"
                                }
                                detail={
                                    "Full code ownership with a detailed step-by-step hosting tutorial."
                                }
                            />
                            <MainServiceSelectCard
                                price={"(Custom Pricing)"}
                                serviceName={"Advanced Custom Features"}
                                detail={
                                    "Need advanced dashboards, AI tools, or custom integrations? We’ll assess and quote based on complexity."
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MainServiceSection;

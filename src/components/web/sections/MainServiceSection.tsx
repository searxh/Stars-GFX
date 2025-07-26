import { isNaN } from "lodash";
import { useState } from "react";
import MainServiceSelectCard from "../../MainServiceSelectCard";
import AnimatedContainer from "../../AnimatedContainer";
import GlassmorphismCard from "../../GlassmorphismCard";
import SizeMatchingContainer from "../../SizeMatchingContainer";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainServiceSection = () => {
    const isSmallerThanMedium = useMediaQuery("(max-width: 786px)");
    const [price, setPrice] = useState<number>(699);
    const [isPercentagePrice, setIsPercentagePrice] = useState<boolean>(false);

    const modifyPrice = (
        priceModification: number,
        isAdd: boolean,
        isPercentage?: boolean
    ) => {
        if (isPercentage) {
            setIsPercentagePrice(false);
        }
        if (isPercentage !== undefined && !isPercentage)
            setIsPercentagePrice(true);
        if (isNaN(priceModification)) return;
        if (!isAdd) setPrice(price + priceModification);
        else {
            setPrice(price - priceModification);
        }
    };

    return (
        <AnimatedContainer
            options={{
                leftSlideIn: true,
            }}
            className="flex flex-col gap-2 md:p-24 p-4"
        >
            <div className="flex flex-col md:gap-12 gap-6">
                <div className="flex flex-col items-start text-center mx-auto">
                    <div className="font-bold md:text-5xl text-4xl text-center leading-tight">
                        BUILD YOUR
                        <span className="text-[#FF4388]"> WEBSITE</span>
                    </div>
                    <div className="text-lg">
                        Select your preferred add-ons. Your price will update as
                        you build.
                    </div>
                    <div className="flex flex-col w-full mt-4">
                        <div className="md:text-3xl text-2xl font-bold">
                            STARTING AT
                            <span className="text-primary"> $699</span>
                        </div>
                        <div>(Custom assets not included)</div>
                    </div>
                </div>
                <GlassmorphismCard className="relative flex h-fit w-full md:p-8 p-4">
                    <SizeMatchingContainer
                        className="flex md:flex-row flex-col md:gap-8 gap-4 w-full md:overflow-hidden"
                        options={{
                            isDisabled: isSmallerThanMedium,
                            referenceChildClassName:
                                "w-full flex flex-col gap-4 w-full h-fit",
                        }}
                        referenceChild={
                            <>
                                <div className="flex gap-4 items-center">
                                    <img
                                        src="/images/star_logo.webp"
                                        alt="logo"
                                        width={"80"}
                                        height={"80"}
                                        className="md:h-[80px] md:w-[80px] h-[40px] w-[40px]"
                                    />
                                    <div className="flex flex-col gap-4">
                                        <div className="leading-tight">
                                            <div className="md:text-3xl text-2xl font-bold p-0">
                                                UI DESIGN
                                            </div>
                                            <div className="md:text-xl text-lg">
                                                Choose the visual complexity of
                                                your site
                                            </div>
                                        </div>
                                        <div className="text-secondary">
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
                                    modifyService={modifyPrice}
                                />
                                <MainServiceSelectCard
                                    price={"100"}
                                    serviceName={"Responsive Design"}
                                    detail={
                                        "Tailored layouts for seamless experience across all screen sizes."
                                    }
                                    modifyService={modifyPrice}
                                />
                                <MainServiceSelectCard
                                    price={"100"}
                                    serviceName={"3D Design"}
                                    detail={
                                        "Add depth and motion with subtle 3D elements and shadows."
                                    }
                                    modifyService={modifyPrice}
                                />
                            </>
                        }
                    >
                        <img
                            src="/images/archives/a38.webp"
                            alt="a1"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </SizeMatchingContainer>
                </GlassmorphismCard>

                <GlassmorphismCard className="relative flex h-fit w-full md:p-8 p-4">
                    <SizeMatchingContainer
                        className="flex md:flex-row-reverse flex-col gap-8 w-full md:overflow-hidden"
                        options={{
                            isDisabled: isSmallerThanMedium,
                            referenceChildClassName:
                                "w-full flex flex-col gap-4 w-full h-fit",
                        }}
                        referenceChild={
                            <>
                                <div className="flex gap-4 items-center">
                                    <img
                                        src="/images/star_logo.webp"
                                        alt="logo"
                                        width={"80"}
                                        height={"80"}
                                        className="md:h-[80px] md:w-[80px] h-[40px] w-[40px]"
                                    />
                                    <div className="flex flex-col gap-4">
                                        <div className="leading-tight">
                                            <div className="md:text-3xl text-2xl font-bold p-0">
                                                CORE FEATURE
                                            </div>
                                            <div className="md:text-xl text-lg">
                                                Add the functionality you need
                                                to power your website.
                                            </div>
                                        </div>
                                        <div className="text-secondary">
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
                                    modifyService={modifyPrice}
                                />
                                <MainServiceSelectCard
                                    price={"150"}
                                    serviceName={"API Integration"}
                                    detail={
                                        "Fetch game data, player stats, badges, or inventory from ROBLOX's public endpoints or other APIs."
                                    }
                                    modifyService={modifyPrice}
                                />
                                <MainServiceSelectCard
                                    price={"500"}
                                    serviceName={"Payment System"}
                                    detail={
                                        "Accept payments securely using Stripe, PayPal, or other platforms."
                                    }
                                    modifyService={modifyPrice}
                                />
                            </>
                        }
                    >
                        <img
                            src="/images/archives/a20.webp"
                            alt="a1"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </SizeMatchingContainer>
                </GlassmorphismCard>
                <GlassmorphismCard className="relative flex flex-col gap-8 h-fit w-full md:p-8 p-4">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex gap-4 items-center">
                            <img
                                src="/images/star_logo.webp"
                                alt="logo"
                                width={"80"}
                                height={"80"}
                                className="md:h-[80px] md:w-[80px] h-[40px] w-[40px]"
                            />
                            <div className="flex flex-col gap-4">
                                <div className="leading-tight">
                                    <div className="md:text-3xl text-2xl font-bold p-0">
                                        PROJECT ADD-ONS
                                    </div>
                                    <div className="md:text-xl text-lg">
                                        Fine-tune the functionality and
                                        ownership
                                    </div>
                                </div>
                                <div className="text-secondary">
                                    Select one or more items
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <MainServiceSelectCard
                                price={"20"}
                                serviceName={"Custom Domain Setup"}
                                detail={
                                    "Fetch game data, player stats, badges, or inventory from ROBLOX's public endpoints or other APIs."
                                }
                                modifyService={modifyPrice}
                            />
                            <MainServiceSelectCard
                                price={"50"}
                                serviceName={"Basic SEO Optimization"}
                                detail={
                                    "Clean URLs, proper metadata, and index-friendly structure for search engines."
                                }
                                modifyService={modifyPrice}
                            />
                            <MainServiceSelectCard
                                price={"500"}
                                serviceName={"Admin Dashboard"}
                                detail={
                                    "Manage content, users, and data with an easy-to-use backend panel without having to contact us for changes."
                                }
                                modifyService={modifyPrice}
                            />

                            <MainServiceSelectCard
                                price={"50% of total"}
                                serviceName={
                                    "Source Code + Basic Documentation"
                                }
                                detail={
                                    "Full code ownership with a detailed step-by-step hosting tutorial."
                                }
                                modifyService={modifyPrice}
                            />
                            <MainServiceSelectCard
                                price={"(Custom Pricing)"}
                                serviceName={"Advanced Custom Features"}
                                detail={
                                    "Need advanced dashboards, AI tools, or custom integrations? We'll assess and quote based on complexity."
                                }
                                modifyService={modifyPrice}
                            />
                        </div>
                    </div>
                    <GlassmorphismCard className="flex flex-col w-full md:p-8 p-4 items-center">
                        <div className="md:text-xl text-lg">
                            Estimated price:
                        </div>
                        <div className="md:text-5xl text-4xl text-[#FF4388] font-bold">{`${price} USD ${
                            isPercentagePrice ? "+ 50%" : ""
                        }`}</div>
                    </GlassmorphismCard>
                </GlassmorphismCard>
            </div>
        </AnimatedContainer>
    );
};

export default MainServiceSection;

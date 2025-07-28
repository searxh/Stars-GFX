import AnimatedContainer from "../../AnimatedContainer";
import GlassmorphismCard from "../../GlassmorphismCard";

const EndingSection = () => {
    return (
        <AnimatedContainer
            options={{
                rightSlideIn: true,
            }}
            className="flex w-screen md:p-24 p-4"
        >
            <GlassmorphismCard className="flex md:flex-row flex-col md:gap-12 gap-6 m-auto md:p-12 p-6">
                <div
                    className="relative my-auto md:h-[25rem] h-fit md:w-[22rem] w-full object-center shadow-md 
                rounded-lg overflow-hidden"
                >
                    <img
                        className="md:absolute -top-8 bottom-0 w-full h-full scale-[130%]"
                        src="/images/landing.webp"
                        draggable={false}
                        alt=""
                    />
                </div>
                <div className="flex flex-col text-center md:text-left text-sm md:text-base gap-5 max-w-[25rem] mr-auto my-auto">
                    <div className="font-bold md:text-5xl text-4xl leading-tight">
                        LET'S GET <span className="text-primary">STARTED!</span>
                    </div>
                    <p>
                        Take your web presence to the next level with STAR GFX
                        WEB DEV.
                    </p>
                    <p>
                        Ready to start your project or have any questions?
                        Contact us now through discord to discuss your web
                        requirements and get a free quote!
                    </p>
                    <div className="flex flex-col md:gap-1 md:flex-row font-semibold text-sm md:text-base bg-gradient-to-r from-indigo-700 to-indigo-500 text-white rounded-lg p-2 px-3 text-center">
                        <div className="flex gap-1 mx-auto md:mr-0 md:ml-auto">
                            Contact
                            <span className="font-bold text-sky-300 px-0.5">
                                'star5732'
                            </span>
                        </div>
                        <div className="flex gap-1 text-xs md:text-sm w-fit mx-auto md:ml-0 md:mr-auto my-auto">
                            via Discord
                            <img
                                className="h-5 w-5 rounded-full invert"
                                src="/images/contacts_logo/discord.png"
                                draggable={false}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </GlassmorphismCard>
        </AnimatedContainer>
    );
};

export default EndingSection;

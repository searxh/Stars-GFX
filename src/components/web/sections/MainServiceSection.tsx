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
            className="flex flex-col gap-2 m-auto my-[10rem] p-5"
        >
            <div className="grid w-full place-items-center p-[107px]">
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
                    <MainServiceSelectCard
                        price={"10"}
                        serviceName={"Animations"}
                        detail={"Smooth transitions and motion effects for a more engaging experience."}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default MainServiceSection;

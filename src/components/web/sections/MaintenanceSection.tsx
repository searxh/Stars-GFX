import { CheckRounded } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const MaintenanceSection = () => {
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
            className="flex flex-col gap-3 w-full p-10 my-[10rem]"
        >
            <div className="font-bold text-2xl md:text-5xl mx-auto text-center">
                MAINTENANCE AND SUPPORT
            </div>
            <div className="text-sm md:text-base m-auto w-full md:max-w-2xl mb-5 text-center">
                Our maintenance and support plans are designed to ensure your
                software stays secure and your data backed up and rolled back in
                the case of data loss.
            </div>
            <div className="flex flex-col md:flex-row gap-3 drop-shadow-md text-base max-w-5xl mx-auto">
                <motion.div
                    animate={{
                        transform: section
                            ? "translateY(0)"
                            : "translateY(50%)",
                        opacity: section ? 1 : 0,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.5,
                    }}
                    style={{
                        background: "radial-gradient(#222222, #111111 80%)",
                    }}
                    className="basis-1/4 flex flex-col border-[1px] border-neutral-800 gap-3 rounded-xl p-5 md:p-10 py-12 flex-1 bg-neutral-900 shadow-[#c2788d] shadow-sm"
                >
                    <div className="flex flex-col text-sm md:text-base m-auto w-fit h-full text-center text-neutral-300">
                        <div className="font-bold mb-3 text-[#c2788d]">
                            <div className="text-xl md:text-3xl text-[#c2788d]">
                                FREE
                            </div>
                            TIER
                        </div>
                        <p className="max-w-[90%] mx-auto text-sm">
                            Ideal for low maintenance sites needing minimal
                            support
                        </p>
                        <ol className="text-start py-10 text-white">
                            <li className="flex gap-2">
                                <CheckRounded />
                                Critical bug fixing (up to 3 months after
                                launch)
                            </li>
                        </ol>
                        <div className="text-[#c2788d] mt-auto">
                            <div className="flex gap-2 font-bold text-xl md:text-3xl w-fit mx-auto">
                                FREE
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    animate={{
                        transform: section
                            ? "translateY(0)"
                            : "translateY(-50%)",
                        opacity: section ? 1 : 0,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.5,
                    }}
                    style={{
                        background: "radial-gradient(#222222, #111111 80%)",
                    }}
                    className="basis-1/4 flex flex-col border-[1px] border-neutral-800 gap-3 rounded-xl p-5 md:p-10 py-12 flex-1 bg-neutral-900 shadow-[#c2788d] shadow-md"
                >
                    <div className="flex flex-col text-sm md:text-base m-auto w-fit h-full text-center text-neutral-300 brightness-105">
                        <div className="font-bold mb-3 text-[#b8506e]">
                            <div className="text-xl md:text-3xl text-[#b8506e]">
                                STANDARD
                            </div>
                            TIER
                        </div>
                        <p className="max-w-[90%] mx-auto text-sm">
                            Ideal for sites needing essential maintenance with
                            no additional support
                        </p>
                        <ol className="text-start py-10 text-white">
                            <li className="flex gap-2">
                                <CheckRounded />
                                All free tier benefits
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Breaking changes guarantee
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Security updates
                            </li>
                        </ol>
                        <div className="text-[#b8506e] mt-auto">
                            <div className="flex gap-2 font-bold text-xl md:text-3xl w-fit mx-auto">
                                $10
                            </div>
                            per month
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    animate={{
                        transform: section
                            ? "translateY(0)"
                            : "translateY(50%)",
                        opacity: section ? 1 : 0,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.5,
                    }}
                    style={{
                        background: "radial-gradient(#222222, #111111 80%)",
                    }}
                    className="basis-1/4 flex flex-col border-[1px] border-neutral-800 gap-3 rounded-xl p-5 md:p-10 py-12 flex-1 bg-neutral-900 shadow-[#c2788d] shadow-lg"
                >
                    <div className="flex flex-col text-sm md:text-base m-auto w-fit h-full text-center text-neutral-300 brightness-[115%]">
                        <div className="font-bold mb-3 text-[#c2375e]">
                            <div className="text-xl md:text-3xl text-[#c2375e]">
                                PRO
                            </div>
                            TIER
                        </div>
                        <p className="max-w-[90%] mx-auto text-sm">
                            Ideal for more advanced sites with needs for data
                            backups and recovery
                        </p>
                        <ol className="text-start py-10 text-white">
                            <li className="flex gap-2">
                                <CheckRounded />
                                All standard tier benefits
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Data backup schedules
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Data rollbacks
                            </li>
                        </ol>
                        <div className="text-[#c2375e] mt-auto">
                            <div className="flex gap-2 font-bold text-xl md:text-3xl w-fit mx-auto">
                                $25
                            </div>
                            per month
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    animate={{
                        transform: section
                            ? "translateY(0)"
                            : "translateY(-50%)",
                        opacity: section ? 1 : 0,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.5,
                    }}
                    style={{
                        background: "radial-gradient(#222222, #111111 80%)",
                    }}
                    className="basis-1/4 flex flex-col border-[1px] border-neutral-800 gap-3 rounded-xl p-5 md:p-10 py-12 flex-1 bg-neutral-900 shadow-[#c2788d] shadow-xl"
                >
                    <div className="flex flex-col text-sm md:text-base m-auto w-fit h-full text-center text-neutral-300 brightness-125">
                        <div className="font-bold mb-3 text-gradient bg-gradient-to-r from-[#c06c84] to-[#355c7d]">
                            <div className="text-xl md:text-3xl">PREMIUM</div>
                            TIER
                        </div>
                        <p className="max-w-[90%] mx-auto text-sm">
                            Ideal for complex sites or highly dynamic sites that
                            require more maintenance.
                        </p>
                        <ol className="text-start py-10 text-white">
                            <li className="flex gap-2">
                                <CheckRounded />
                                All pro tier benefits
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Priority service
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Free unlimited bug fixes
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Free one monthly feature expansion quota
                            </li>
                            <li className="flex gap-2">
                                <CheckRounded />
                                Any benefits we may add in the future
                            </li>
                        </ol>
                        <div className="text-gradient bg-gradient-to-r from-[#c06c84] to-[#355c7d] mt-auto">
                            <div className="flex gap-2 font-bold text-xl md:text-3xl w-fit mx-auto">
                                $50
                            </div>
                            per month
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MaintenanceSection;

import { motion, useScroll } from "framer-motion";
import { Colors } from "../../lib/colors";

const Background = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            className="fixed top-0 w-[100vw] h-[100vh] overflow-hidden -z-10"
            animate={{
                opacity: scrollYProgress.get() !== 0 ? "50%" : "30%",
            }}
        >
            <div className="text-white">{scrollYProgress.get()}</div>
            <motion.svg width="100%" height="100%">
                <defs>
                    <motion.radialGradient
                        id="gradient1"
                        animate={{
                            gradientTransform: ["scale(2.5)", "scale(1.75)"],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        <stop
                            offset="0%"
                            stopColor={
                                scrollYProgress.get() === 0
                                    ? Colors.primary
                                    : Colors.secondary
                            }
                        />
                        <stop
                            offset="50%"
                            stopColor={
                                scrollYProgress.get() === 0
                                    ? Colors.secondary
                                    : Colors.primary
                            }
                        />
                        <stop offset="100%" stopColor="#000000" />
                    </motion.radialGradient>
                </defs>

                <rect width="100%" height="100%" fill="url(#gradient1)" />
            </motion.svg>
            {/* <motion.img
                src="/images/bg.png"
                animate={{
                    rotate: [0, 360, 0],
                }}
                transition={{
                    duration: 500,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute top-0 left-0 right-0 bottom-0 h-[100vh] m-auto brightness-[200%]"
                draggable={false}
                alt=""
            /> */}
        </motion.div>
    );
};

export default Background;

import { motion, useScroll } from "framer-motion";

const Background = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            className="fixed top-0 w-full h-[100vh]"
            animate={{
                opacity: scrollYProgress.get() !== 0 ? "50%" : "30%",
            }}
        >
            <motion.svg width="100%" height="100%">
                <defs>
                    <motion.radialGradient
                        id="gradient1"
                        gradientTransform="scale(1.5)"
                        animate={{
                            gradientTransform: ["scale(2.5)", "scale(1.5)"],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        <stop offset="0%" stopColor="#3c2b6b" />
                        <stop offset="50%" stopColor="#6c5b7b" />
                        <stop offset="100%" stopColor="#000000" />
                    </motion.radialGradient>
                </defs>

                <rect width="100%" height="100%" fill="url(#gradient1)" />
            </motion.svg>
            <motion.img
                src="/images/bg.png"
                animate={{
                    rotate: [0, 360, 0],
                }}
                transition={{
                    duration: 500,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute top-0 left-0 right-0 bottom-0 h-[100vh] m-auto brightness-[200%] blur-[1px]"
                draggable={false}
                alt=""
            />
        </motion.div>
    );
};

export default Background;

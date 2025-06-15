import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FAQItem from "../../FAQItem";

const faq: { question: string; answer: string }[] = [
    {
        question: "How is the project payment structured?",
        answer: "Project payment is divided into two parts:\n- The first half is due upon signing the contract.\n- The second half is due upon project completion and handover.",
    },
    {
        question: "Can I cancel the project after signing the contract?",
        answer: "It depends on many factors such as the workload of our team, the response time of our clients during feedbacks, the complexity of the project, etc. But in general you can expect around:",
    },
    {
        question: "What happens if I don't respond during the project?",
        answer: "It depends on many factors such as the workload of our team, the response time of our clients during feedbacks, the complexity of the project, etc. But in general you can expect around:",
    },
    {
        question: "What if the developers (us) need to cancel the project?",
        answer: "In rare cases, we may need to cancel or reschedule a project due to unforeseen circumstances (e.g., illness, emergencies, force majeure). If this happens:\n- You will be offered a full refund, or\n- You may choose to reschedule the project.",
    },
];

const FAQSection = () => {
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
            className="relative flex flex-col gap-12 m-24"
        >
            <div className="text-center leading-tight">
                <div className="font-bold text-6xl text-secondary">FAQ</div>
                <div className="text-white">Frequently Asked Questions</div>
            </div>
            <div className="flex flex-col">
                {faq.map((item) => {
                    const { question, answer } = item;
                    return (
                        <FAQItem
                            key={question}
                            question={question}
                            answer={answer}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
};

export default FAQSection;

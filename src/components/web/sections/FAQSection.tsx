import FAQItem from "../../FAQItem";
import AnimatedContainer from "../../AnimatedContainer";

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
    return (
        <AnimatedContainer
            options={{
                leftSlideIn: true,
            }}
            className="relative flex flex-col gap-12 md:m-24 m-4"
        >
            <div className="flex flex-col gap-4 text-center leading-tight">
                <div className="font-bold md:text-6xl text-5xl text-primary">
                    FAQ
                </div>
                <div className="text-white text-lg">
                    Frequently Asked Questions
                </div>
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
        </AnimatedContainer>
    );
};

export default FAQSection;

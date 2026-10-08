import { useState } from "react";

import {
    Box,
    Container,
    Typography,
} from "@mui/material";

import SectionLabel from "../../common/SectionLabel";
import FAQItem from "./FAQItem";

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(-1);

    const faqs = [
        {
            question: "How does the AI interviewer work?",
            answer:
                "Evalify runs role-specific written, recorded video, or live voice and video interviews. Your team sets the questions and criteria; the platform organizes responses and produces an evaluation for people to review.",
        },
        {
            question:
                "Can we customize the questions and assessment rounds?",
            answer:
                "Yes. You can customize questions and configure assessment rounds based on the role and the skills you want to evaluate.",
        },
        {
            question: "How does Evalify support fair proctoring?",
            answer:
                "Evalify provides integrity signals alongside the assessment results, helping teams review candidate activity and make informed decisions.",
        },
        {
            question: "Can we use our own AI provider keys?",
            answer:
                "Yes. Teams can use their own AI provider keys and configure AI features according to their organization's requirements.",
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <Box
            id="faq"
            component="section"
            sx={{
                backgroundColor: "#F8F6FB",
                 py: { xs: 4, md: 5},
            }}
        >
            <Container maxWidth="x1">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "0.85fr 1.5fr",
                        },
                        gap: {
                            xs: 6,
                            md: 10,
                        },
                    }}
                >
                    {/* LEFT SIDE */}

                    <Box>
                        <SectionLabel>
                            GOOD QUESTIONS
                        </SectionLabel>

                        <Typography
                            sx={{
                                color: "#20203D",
                                fontSize: {
                                    xs: "2.8rem",
                                    md: "4rem",
                                },
                                fontWeight: 500,
                                lineHeight: 1.05,
                                letterSpacing: "-0.045em",
                            }}
                        >
                            Clarity before
                        </Typography>

                        <Typography
                            sx={{
                                color: "primary.main",
                                fontSize: {
                                    xs: "2.8rem",
                                    md: "4rem",
                                },
                                fontStyle: "italic",
                                fontFamily: "Georgia, serif",
                                lineHeight: 1.05,
                                letterSpacing: "-0.045em",
                            }}
                        >
                            the first invite.
                        </Typography>

                        <Typography
                            sx={{
                                color: "text.secondary",
                                maxWidth: 330,
                                mt: 3,
                                fontSize: "1rem",
                                lineHeight: 1.6,
                            }}
                        >
                            Here are a few things teams often want to know
                            before getting started.
                        </Typography>
                    </Box>

                    {/* RIGHT SIDE */}

                    <Box>
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={faq.question}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                                isLast={index === faqs.length - 1}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default FAQSection;
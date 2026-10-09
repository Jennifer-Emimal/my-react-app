
import { useState } from "react";
import {
    Box,
    Collapse,
    Container,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(-1);

    const faqs = [
        {
            question: "How does the AI interview work?",
            answer:
                "Our AI asks role-specific questions, analyses video, audio and coding responses, and provides detailed evaluations with scores and feedback.",
        },
        {
            question: "Can I integrate with my existing ATS?",
            answer:
                "Evalify is designed to fit into your hiring workflow. Contact our team to discuss integrations for your applicant tracking system.",
        },
        {
            question: "Is candidate data secure?",
            answer:
                "Candidate data should be handled with appropriate access controls and security measures. Contact the Evalify team for specific security and compliance details.",
        },
        {
            question: "Which roles and skills are supported?",
            answer:
                "You can configure assessments around the roles, technical skills and evaluation criteria relevant to your hiring needs.",
        },
        {
            question: "Can I customize the questions?",
            answer:
                "Yes. Configure role-specific questions and assessment rounds to suit your hiring requirements.",
        },
    ];

    return (
        <Box
            id="faq"
            component="section"
            sx={{
                background: (theme) => theme.gradients.hero,
                py: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "0.9fr 1.1fr",
                        },
                        gap: { xs: 4, md: 8 },
                        alignItems: "start",
                    }}
                >
                    {/* Left heading */}
                    <Box>
                        <Typography
                            sx={{
                                color: "secondary.dark",
                                fontSize: "0.65rem",
                                fontWeight: 800,
                                letterSpacing: "0.12em",
                                mb: 1.5,
                            }}
                        >
                            FAQ
                        </Typography>

                        <Typography
                            component="h2"
                            sx={{
                                color: "text.primary",
                                fontSize: { xs: "2.1rem", md: "2.7rem" },
                                fontWeight: 800,
                                lineHeight: 1.08,
                                letterSpacing: "-0.045em",
                            }}
                        >
                            Questions teams ask
                            <br />
                            before{" "}
                            <Box
                                component="span"
                                sx={{
                                    background: (theme) =>
                                        theme.gradients.tealBlue,
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                switching.
                            </Box>
                        </Typography>
                    </Box>

                    {/* Right accordion */}
                    <Stack spacing={0.7}>
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <Box
                                    key={faq.question}
                                    sx={{
                                        backgroundColor: "background.paper",
                                        border: 1,
                                        borderColor: "divider",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Box
                                        component="button"
                                        onClick={() =>
                                            setOpenIndex(
                                                isOpen ? -1 : index
                                            )
                                        }
                                        aria-expanded={isOpen}
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: 2,
                                            textAlign: "left",
                                            border: 0,
                                            backgroundColor: "transparent",
                                            color: "text.primary",
                                            cursor: "pointer",
                                            px: 2,
                                            py: 1.2,
                                            fontFamily: "inherit",
                                            fontSize: "0.85rem",
                                            fontWeight: 600,
                                            "&:hover": {
                                                color: "primary.main",
                                            },
                                        }}
                                    >
                                        {faq.question}

                                        <IconButton
                                            component="span"
                                            disableRipple
                                            tabIndex={-1}
                                            sx={{
                                                p: 0,
                                                color: "text.primary",
                                            }}
                                        >
                                            {isOpen ? (
                                                <RemoveIcon fontSize="small" />
                                            ) : (
                                                <AddIcon fontSize="small" />
                                            )}
                                        </IconButton>
                                    </Box>

                                    <Collapse in={isOpen}>
                                        <Typography
                                            sx={{
                                                color: "text.secondary",
                                                fontSize: "0.78rem",
                                                lineHeight: 1.55,
                                                px: 2.5,
                                                pb: 1.5,
                                                pr: 5,
                                            }}
                                        >
                                            {faq.answer}
                                        </Typography>
                                    </Collapse>
                                </Box>
                            );
                        })}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}

export default FAQSection;

import { useState } from "react";
import {
    Box,
    Button,
    Collapse,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import SectionLabel from "./common/SectionLabel";
import GradientText from "./common/GradientText";

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(-1);

    const faqs = [
        {
            question: "How does the AI interview work?",
            answer:
                "Evalify asks role-specific questions, analyzes video, audio, and coding responses, then provides detailed evaluations with scores and feedback.",
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
    py: { xs: 5, md: 7 },
    overflow: "hidden",
}}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "0.95fr 1.05fr",
                        },
                        gap: { xs: 4, md: 5 },
                        alignItems: "start",
                    }}
                >
                    {/* Left column */}
                    <Box
                        sx={{
                            position: "relative",
                            isolation: "isolate",
                            minWidth: 0,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {/* Heading and description */}
                        <Box sx={{ position: "relative", zIndex: 1 }}>
                            <SectionLabel align="left">
                                FAQ
                            </SectionLabel>

                            <Typography
                                component="h2"
                                variant="h2"
                                sx={{
                                    color: "text.primary",
                                    fontSize: {
                                        xs: "2rem",
                                        sm: "2.4rem",
                                        md: "2.65rem",
                                    },
                                    lineHeight: 1.18,
                                    maxWidth: 480,
                                }}
                            >
                                Questions teams ask
                                <br />
                                before{" "}
                                 <GradientText>switching.</GradientText>
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: "text.secondary",
                                    mt: 1.5,
                                    maxWidth: 440,
                                }}
                            >
                                Get answers about AI interviews, candidate
                                evaluations, integrations and hiring workflows.
                            </Typography>
                        </Box>

                        {/* Support card */}
                        <Box
                            sx={{
                                position: "relative",
                                zIndex: 1,
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 2,
                                mt: 6,
                                p: { xs: 1.5, md: 2 },
                                borderRadius: 2,
                                background: (theme) => theme.gradients.cta,
                                border: 1,
                                borderColor: "divider",
                            }}
                        >
                            <Box sx={{ minWidth: 0 }}>
                                <Typography
                                    variant="h3"
                                    sx={{ color: "text.primary" }}
                                >
                                    Still have questions?
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "text.secondary",
                                        mt: 0.5,
                                    }}
                                >
                                    Our team can help you understand the
                                    platform.
                                </Typography>

                                {/* Shared CTA button */}
                                <Button
                                    variant="contained"
                                    endIcon={<ArrowForwardRoundedIcon />}
                                    sx={{ mt: 1.5 }}
                                >
                                    Contact support
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    {/* Right column: FAQ list */}
                    <Stack
                        spacing={0}
                        sx={{
                            borderTop: 1,
                            borderColor: "divider",
                            minWidth: 0,
                        }}
                    >
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <Box
                                    key={faq.question}
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: "divider",
                                    }}
                                >
                                    <Box
                                        component="button"
                                        type="button"
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
                                            bgcolor: "transparent",
                                            color: "text.primary",
                                            cursor: "pointer",
                                            px: 0,
                                            py: { xs: 2, md: 2.25 },
                                            fontFamily: "inherit",
                                            fontSize: {
                                                xs: "0.85rem",
                                                md: "1rem",
                                            },
                                            fontWeight: 600,
                                            "&:hover": {
                                                color: "primary.main",
                                            },
                                        }}
                                    >
                                        {faq.question}

                                        <Box
                                            component="span"
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                flexShrink: 0,
                                                display: "grid",
                                                placeItems: "center",
                                                borderRadius: "50%",
                                                bgcolor: isOpen
                                                    ? "background.accent"
                                                    : "background.paper",
                                                color: isOpen
                                                    ? "secondary.dark"
                                                    : "text.secondary",
                                            }}
                                        >
                                            {isOpen ? (
                                                <KeyboardArrowUpIcon />
                                            ) : (
                                                <KeyboardArrowDownIcon />
                                            )}
                                        </Box>
                                    </Box>

                                    <Collapse in={isOpen}>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "text.secondary",
                                                pb: 2.5,
                                                pr: { xs: 1, md: 4 },
                                                lineHeight: 1.8,
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

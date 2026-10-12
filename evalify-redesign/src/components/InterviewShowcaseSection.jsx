import { Box, Button, Container, Stack, Typography } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import SectionLabel from "./common/SectionLabel";
import interviewDashboard from "../assets/interview-dashboard.png";

function InterviewShowcaseSection() {
    const benefits = [
        "AI-generated questions",
        "Real-time speech & code analysis",
        "Bias-free and consistent evaluations",
        "Detailed reports & scorecards",
    ];

    return (
        <Box
            id="interview-showcase"
            component="section"
            sx={{
                background: (theme) => theme.gradients.hero,
                py: { xs: 6, md: 8 },
                overflow: "hidden",
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "0.8fr 1.2fr",
                        },
                        alignItems: "center",
                        gap: { xs: 4, md: 3 },
                    }}
                >
                    {/* Left content */}
                    <Box
                        sx={{
                            maxWidth: 470,
                            textAlign: { xs: "centre", md: "center" },
                        }}
                    >
                        <SectionLabel>
                            Powerful AI Interviews
                        </SectionLabel>

                        {/* Section heading */}
                        <Typography
                            component="h2"
                            variant="h2"
                            sx={{
                                color: "text.primary",
                                fontSize: {
                                    xs: "2.4rem",
                                    md: "3rem",
                                },
                            }}
                        >
                            Hire faster,
                            <br />
                            hire fairer, hire{" "}
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
                                better.
                            </Box>
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                fontSize: "0.95rem",
                                mt: 2,
                            }}
                        >
                            Evalify combines AI, automation and real-time
                            analysis to give you a complete hiring solution
                            in one platform.
                        </Typography>

                        {/* Benefits list */}
                        <Stack spacing={1.5} sx={{ mt: 3 }}>
                            {benefits.map((benefit) => (
                                <Stack
                                    key={benefit}
                                    direction="row"
                                    alignItems="center"
                                    justifyContent={{
                                        xs: "center",
                                        md: "flex-start",
                                    }}
                                    spacing={1.2}
                                >
                                    <CheckCircleIcon
                                        sx={{
                                            color: "secondary.main",
                                            fontSize: 20,
                                            flexShrink: 0,
                                        }}
                                    />

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: "0.82rem",
                                        }}
                                    >
                                        {benefit}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>

                        {/* CTA button */}
                        <Button
                            variant="contained"
                            sx={{
                                mt: 3.5,
                                backgroundColor: "primary.main",
                                color: "primary.contrastText",
                                px: 2.5,
                                py: 1.2,
                                boxShadow: (theme) =>
                                    theme.customShadows.button,
                                "&:hover": {
                                    backgroundColor: "primary.dark",
                                },
                            }}
                        >
                            Explore features
                        </Button>
                    </Box>

                    {/* Right dashboard illustration */}
                    <Box
                        sx={{
                            width: "100%",
                            minWidth: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src={interviewDashboard}
                            alt="AI video interview with speech analysis and candidate scorecards"
                            sx={{
                                display: "block",
                                width: "100%",
                                maxWidth: 760,
                                height: "auto",
                                objectFit: "contain",
                                WebkitMaskImage:
                                    "radial-gradient(ellipse at center, black 55%, transparent 100%)",
                                maskImage:
                                    "radial-gradient(ellipse at center, black 55%, transparent 100%)",
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default InterviewShowcaseSection;

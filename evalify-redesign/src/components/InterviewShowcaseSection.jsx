
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import SectionLabel from "./common/SectionLabel";
import GradientText from "./common/GradientText";
import interviewDashboard from "../assets/interview-dashboard.png";

const BENEFITS = [
    "AI-generated questions",
    "Real-time speech & code analysis",
    "Bias-free and consistent evaluations",
    "Detailed reports & scorecards",
];

function InterviewShowcaseSection() {

    return (
        <Box
            id="interview-showcase"
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
                            md: "0.8fr 1.2fr",
                        },
                        alignItems: "center",
                        gap: { xs: 4, md: 3 },
                    }}
                >
                    {/* Left content */}
                    <Box
                        sx={{
                            maxWidth: 400,
                            textAlign: "left",
                        }}
                    >
                        <SectionLabel align="left">
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
                            <GradientText>better.</GradientText>
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
                            {BENEFITS.map((benefit) => (
                                <Stack
                                    key={benefit}
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="flex-start"
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
                            endIcon={<ArrowForwardIcon />}
                            sx={{ mt: 3.5 }}
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
                            className="dashboard-image"
                            sx={{ maxWidth: 760 }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default InterviewShowcaseSection;

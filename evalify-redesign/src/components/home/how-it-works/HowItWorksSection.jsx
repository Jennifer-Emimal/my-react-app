
import { Box, Container, Stack, Typography } from "@mui/material";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function HowItWorksSection() {
    const steps = [
        {
            number: "01",
            title: "Create a role",
            description: "Define the job, skills and preferences in minutes.",
            Icon: DescriptionOutlinedIcon,
            color: "accent.blue",
            background: "background.soft",
        },
        {
            number: "02",
            title: "AI interviews",
            description: "Candidates take AI-driven interviews, anytime, anywhere.",
            Icon: VideocamOutlinedIcon,
            color: "accent.purple",
            background: "background.soft",
        },
        {
            number: "03",
            title: "Get evaluations",
            description: "AI analyses responses and generates detailed reports.",
            Icon: InsightsOutlinedIcon,
            color: "accent.orange",
            background: "background.soft",
        },
        {
            number: "04",
            title: "Make the hire",
            description: "Shortlist the best-fit candidates with confidence.",
            Icon: GroupsOutlinedIcon,
            color: "accent.orange",
            background: "background.soft",
        },
    ];

    return (
        <Box
            id="how-it-works"
            component="section"
            sx={{
    background: (theme) => theme.gradients.hero,
    py: { xs: 6, md: 8 },
    width: "100%",
    alignItems: "center",
    textAlign: "center",
}}
        >
            <Container maxWidth="xl">
                {/* Centered heading */}
                <Stack
                    alignItems="center"
                    textAlign="center"
                    sx={{ mb: { xs: 3.5, md: 4.5 } }}
                >
                    <Typography
                        sx={{
                            color: "secondary.dark",
                            fontSize: "0.65rem",
                            fontWeight: 800,
                            letterSpacing: "0.12em",
                            mb: 1.5,
                        }}
                    >
                        • HOW IT WORKS
                    </Typography>

                    <Typography
                        component="h2"
                        sx={{
                            color: "text.primary",
                            fontSize: { xs: "2rem", md: "2.65rem" },
                            fontWeight: 800,
                            lineHeight: 1.05,
                            letterSpacing: "-0.045em",
                        }}
                    >
                        Four simple steps.
                        <br />
                        From job to the{" "}
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
                            right hire.
                        </Box>
                    </Typography>

                    <Typography
                        sx={{
                            color: "text.secondary",
                            fontSize: "0.82rem",
                            mt: 1.5,
                        }}
                    >
                        Set up an interview in minutes and let AI handle the rest.
                    </Typography>
                </Stack>

                {/* Four step cards */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, minmax(0, 1fr))",
                            lg: "repeat(4, minmax(0, 1fr))",
                        },
                        gap: { xs: 2, md: 2.5 },
                    }}
                >
                    {steps.map(({ number, title, description, Icon, color }) => (
                        <Box
                            key={number}
                            sx={{
                                backgroundColor: "background.paper",
                                border: 1,
                                borderColor: "divider",
                                borderRadius: "16px",
                                p: { xs: 3, md: 3.2 },
                                minHeight: { xs: 190, md: 220 },
                                boxShadow: (theme) =>
                                    theme.customShadows.card,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 46,
                                    height: 46,
                                    display: "grid",
                                    placeItems: "center",
                                    borderRadius: "50%",
                                    backgroundColor: "background.soft",
                                    color,
                                    mb: 1.5,
                                }}
                            >
                                <Icon sx={{ fontSize: 25 }} />
                            </Box>

                            <Typography
                                sx={{
                                    color: "text.disabled",
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    mb: 0.3,
                                }}
                            >
                                {number}
                            </Typography>

                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                spacing={1}
                                sx={{ width: "100%" }}
                            >
                                <Typography
                                    sx={{
                                        color: "text.primary",
                                        fontSize: "1rem",
                                        fontWeight: 800,
                                        letterSpacing: "-0.025em",
                                    }}
                                >
                                    {title}
                                </Typography>

                            </Stack>

                            <Typography
                                sx={{
                                    color: "text.secondary",
                                    fontSize: "0.8rem",
                                    lineHeight: 1.5,
                                    mt: 0.8,
                                }}
                            >
                                {description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default HowItWorksSection;

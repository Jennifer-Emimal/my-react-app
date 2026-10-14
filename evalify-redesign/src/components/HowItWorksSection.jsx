import { Box, Container, Stack, Typography } from "@mui/material";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

import SectionLabel from "./common/SectionLabel";
import GradientText from "./common/GradientText";

function HowItWorksSection() {
    const steps = [
        {
            number: "01",
            title: "Create a role",
            description:
                "Define the job, skills and preferences in minutes.",
            Icon: DescriptionOutlinedIcon,
            color: "accent.blue",
        },
        {
            number: "02",
            title: "AI interviews",
            description:
                "Candidates take AI-driven interviews, anytime, anywhere.",
            Icon: VideocamOutlinedIcon,
            color: "accent.purple",
        },
        {
            number: "03",
            title: "Get evaluations",
            description:
                "AI analyses responses and generates detailed reports.",
            Icon: InsightsOutlinedIcon,
            color: "accent.orange",
        },
        {
            number: "04",
            title: "Make the hire",
            description:
                "Shortlist the best-fit candidates with confidence.",
            Icon: GroupsOutlinedIcon,
            color: "accent.orange",
        },
    ];

    return (
        <Box
            id="how-it-works"
            component="section"
            sx={{
                background: (theme) => theme.gradients.hero,
                py: { xs: 5, md: 7 },
                width: "100%",
                textAlign: "center",
            }}
        >
            <Container maxWidth="lg">
                {/* Section heading */}
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    sx={{
                        width: "100%",
                       mb: { xs: 3, md: 4 },
                    }}
                >
                    <SectionLabel>How it works</SectionLabel>

                    <Typography
                        component="h2"
                        variant="h2"
                        sx={{
                            color: "text.primary",
                            fontSize: { xs: "2rem", md: "2.65rem" },
                        }}
                    >
                        Four simple steps.
                        <br />
                        From job to the{" "}
                         <GradientText>right hire.</GradientText>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "text.secondary",
                            fontSize: "0.82rem",
                            mt: 1.5,
                        }}
                    >
                        Set up an interview in minutes and let AI handle the
                        rest.
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
                    {steps.map(
                        ({ number, title, description, Icon, color }) => (
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
                                    textAlign: "left",
                                }}
                            >
                                {/* Step icon */}
                                <Box
                                    sx={{
                                        width: 46,
                                        height: 46,
                                        display: "grid",
                                        placeItems: "center",
                                        borderRadius: "25%",
                                        backgroundColor: "background.soft",
                                        color,
                                        mb: 1.5,
                                    }}
                                >
                                    <Icon sx={{ fontSize: 25 }} />
                                </Box>

                                {/* Step number */}
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "text.disabled",
                                        fontSize: "1rem",
                                        fontWeight: 700,
                                        mb: 0.3,
                                    }}
                                >
                                    {number}
                                </Typography>

                                {/* Step title */}
                                <Typography
                                    component="h3"
                                    variant="h3"
                                    sx={{
                                        color: "text.primary",
                                        fontSize: "1rem",
                                    }}
                                >
                                    {title}
                                </Typography>

                                {/* Step description */}
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: "0.8rem",
                                        mt: 0.8,
                                    }}
                                >
                                    {description}
                                </Typography>
                            </Box>
                        )
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default HowItWorksSection;


import { Box, Container, Stack, Typography } from "@mui/material";

import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

import ctaDashboard from "./../assets/cta-dashboard.png";
import GradientText from "./common/GradientText";
import HeroCTAButtons from "./common/HeroCTAButtons";

const BENEFITS = [
    {
        label: "Faster hiring",
        icon: <BoltOutlinedIcon />,
    },
    {
        label: "More accurate evaluations",
        icon: <TrackChangesOutlinedIcon />,
    },
    {
        label: "Secure & reliable",
        icon: <VerifiedUserOutlinedIcon />,
    },
];

function CTASection() {

    return (
        <Box
            component="section"
            id="get-started"
            sx={{
                py: { xs: 5, md: 7 },
                background: (theme) => theme.gradients.hero,
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
                        alignItems: "center",
                        gap: { xs: 4, md: 2 },
                    }}
                >
                    {/* Left content */}
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            pl: { xs: 0, md: 2 },
                        }}
                    >
                        {/* Trust badge */}
                        <Box
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1,
                                px: 1.8,
                                py: 0.8,
                                mb: 2.5,
                                borderRadius: "30px",
                                backgroundColor: "rgba(20, 184, 166, 0.12)",
                                color: "primary.main",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    bgcolor: "#84CC16",
                                }}
                            />

                            <Typography
                                sx={{
                                    fontSize: "0.8rem",
                                    fontWeight: 700,
                                }}
                            >
                                Trusted by 1000+ teams
                            </Typography>
                        </Box>

                        {/* Heading */}
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
                            Stop scheduling.
                            <br />
                            <GradientText>Start hiring.</GradientText>
                        </Typography>

                        {/* Description */}
                        <Typography
                            sx={{
                                mt: 2,
                                maxWidth: 550,
                                color: "text.secondary",
                                fontSize: { xs: "0.95rem", md: "1.05rem" },
                                lineHeight: 1.7,
                            }}
                        >
                            Join thousands of teams already using Evalify to
                            find and hire top talent.
                        </Typography>

                        {/* CTA buttons */}
                        <HeroCTAButtons />

                        {/* Benefits */}
                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            alignItems="center"
                            sx={{
                                mt: { xs: 3.5, md: 5 },
                                rowGap: 1.5,
                                columnGap: { xs: 2, md: 0 },
                            }}
                        >
                            {BENEFITS.map((benefit, index) => (
                                <Box
                                    key={benefit.label}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        color: "text.secondary",
                                        pr: { xs: 0, md: 2 },
                                        mr: { xs: 0, md: 2 },
                                        borderRight: {
                                            xs: "none",
                                            md:
                                                index !== BENEFITS.length - 1
                                                    ? "1px solid"
                                                    : "none",
                                        },
                                        borderColor: "divider",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            color: "#8097AD",
                                        }}
                                    >
                                        {benefit.icon}
                                    </Box>

                                    <Typography
                                        sx={{
                                            fontSize: "0.8rem",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {benefit.label}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Box>

                    {/* Right dashboard illustration */}
                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 0,
                            isolation: "isolate",
                        }}
                    >
                        <Box
                            component="img"
                            src={ctaDashboard}
                            alt="Evalify hiring dashboard illustration"
                            className="dashboard-image"
                            sx={{ maxWidth: 800 }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default CTASection;

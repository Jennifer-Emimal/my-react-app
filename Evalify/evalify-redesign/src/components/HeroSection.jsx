
import { Box, Container, Stack, Typography } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import GradientText from "./common/GradientText";
import HeroCTAButtons from "./common/HeroCTAButtons";
import heroDashboard from "../assets/hero-dashboard.png";

const STATS = [
    { value: "70%", label: "Faster hiring" },
    { value: "4x", label: "More accurate evaluations" },
    { value: "50+", label: "Skills supported" },
];

function HeroSection() {
    return (
        <Box
            component="section"
            sx={{
                background: (theme) => theme.gradients.hero,
                overflow: "hidden",
                py: { xs: 5, md: 7 },
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1.2fr",
                            lg: "1fr 1.35fr",
                        },
                        alignItems: "center",
                        gap: { xs: 3, md: 2, lg: 3 },
                        pt: 0,
                        pb: 0,
                    }}
                >
                    {/* Left content */}
                    <Box sx={{ position: "relative", zIndex: 1 }}>
                        {/* Platform badge */}
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={0.8}
                            sx={{
                                display: "inline-flex",
                                px: 1.2,
                                py: 0.6,
                                borderRadius: "20px",
                                backgroundColor: "background.paper",
                                border: 1,
                                borderColor: "divider",
                                mb: 2,
                            }}
                        >
                            <CheckCircleIcon
                                sx={{
                                    fontSize: 12,
                                    color: "secondary.main",
                                    display: "block",
                                    flexShrink: 0,
                                    alignSelf: "center",
                                    transform: "none",
                                    m: 0,
                                }}
                            />

                            <Typography
                                variant="body2"
                                sx={{
                                    color: "text.secondary",
                                    fontSize: "0.76rem",
                                    fontWeight: 600,
                                }}
                            >
                                AI-Powered Interview Platform
                            </Typography>
                        </Stack>

                        {/* Main heading */}
                        <Typography
                            variant="h1"
                            sx={{
                                color: "text.primary",
                                fontSize: {
                                    xs: "2.7rem",
                                    sm: "3.3rem",
                                    lg: "3.9rem",
                                },
                                maxWidth: { xs: 520, lg: 560 },
                            }}
                        >
                            Interview Less.
                            <br />
                            <GradientText>Evaluate More.</GradientText>
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                fontSize: "0.95rem",
                                lineHeight: 1.7,
                                maxWidth: { xs: 450, lg: 500 },
                                mt: 2,
                            }}
                        >
                            AI-driven interviews, instant evaluations and
                            detailed insights to help you hire the right
                            talent faster.
                        </Typography>

                        {/* CTA buttons */}
                        <HeroCTAButtons />

                        {/* Statistics */}
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(3, minmax(0, 1fr))",
                                columnGap: { xs: 2, sm: 3 },
                                width: "100%",
                                maxWidth: 400,
                                mt: { xs: 4, md: 5 },
                            }}
                        >
                            {STATS.map((stat) => (
                                <Box
                                    key={stat.label}
                                    sx={{
                                        minWidth: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            color: "text.primary",
                                            fontSize: {
                                                xs: "1.4rem",
                                                sm: "1.65rem",
                                            },
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: "0.75rem",
                                            mt: 0.4,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {stat.label}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Right illustration */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 0,
                            width: "100%",
                        }}
                    >
                        <Box
                            component="img"
                            src={heroDashboard}
                            alt="Evalify AI interview dashboard with video interviews and candidate analytics"
                            className="dashboard-image"
                            sx={{ maxWidth: { xs: 680, lg: 760 } }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default HeroSection;

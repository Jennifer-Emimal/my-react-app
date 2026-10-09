
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import heroDashboard from "../../../assets/hero-dashboard.png";

function HeroSection() {
    const stats = [
        { value: "70%", label: "Faster hiring" },
        { value: "4x", label: "More accurate evaluations" },
        { value: "50+", label: "Skills supported" },
    ];

    return (
        <Box
            component="section"
            sx={{
    background: (theme) => theme.gradients.hero,
    overflow: "hidden",
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
                        alignItems: "center",
                        gap: { xs: 3, md: 1 },
                        pt: { xs: 5, md: 4 },
                        pb: { xs: 4, md: 3 },
                    }}
                >
                    {/* Left content */}
                    <Box sx={{ position: "relative", zIndex: 1 }}>
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
                                    fontSize: 13,
                                    color: "secondary.main",
                                }}
                            />
                            <Typography
                                sx={{
                                    color: "text.secondary",
                                    fontSize: "0.68rem",
                                    fontWeight: 600,
                                }}
                            >
                                AI-Powered Interview Platform
                            </Typography>
                        </Stack>

                        <Typography
                            component="h1"
                            sx={{
                                color: "text.primary",
                                fontSize: {
                                    xs: "2.8rem",
                                    sm: "3.5rem",
                                    lg: "4.2rem",
                                },
                                fontWeight: 800,
                                lineHeight: 0.99,
                                letterSpacing: "-0.055em",
                                maxWidth: 520,
                            }}
                        >
                            Interview Less.
                            <Box
                                component="span"
                                sx={{
                                    display: "block",
                                    background: (theme) =>
                                        theme.gradients.tealBlue,
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Evaluate More.
                            </Box>
                        </Typography>

                        <Typography
                            sx={{
                                color: "text.secondary",
                                fontSize: "0.9rem",
                                lineHeight: 1.7,
                                maxWidth: 450,
                                mt: 2,
                            }}
                        >
                            AI-driven interviews, instant evaluations and
                            detailed insights to help you hire the right
                            talent faster.
                        </Typography>

                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            spacing={1.2}
                            sx={{ mt: 3 }}
                        >
                            <Button
                                component="a"
                                href="#pricing"
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    backgroundColor: "primary.main",
                                    color: "primary.contrastText",
                                    boxShadow: (theme) =>
                                        theme.customShadows.button,
                                    "&:hover": {
                                        backgroundColor: "primary.dark",
                                    },
                                }}
                            >
                                Start free trial
                            </Button>

                            <Button
                                component="a"
                                href="#how-it-works"
                                startIcon={<PlayArrowIcon />}
                                sx={{
                                    backgroundColor: "background.paper",
                                    color: "text.primary",
                                    "&:hover": {
                                        backgroundColor: "background.soft",
                                    },
                                }}
                            >
                                Watch demo
                            </Button>
                        </Stack>

                        {/* Statistics */}
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                                gap: { xs: 1.5, sm: 3 },
                                mt: { xs: 4, md: 5 },
                                maxWidth: 470,
                            }}
                        >
                            {stats.map((stat) => (
                                <Box key={stat.label}>
                                    <Typography
                                        sx={{
                                            color: "text.primary",
                                            fontSize: {
                                                xs: "1.35rem",
                                                sm: "1.6rem",
                                            },
                                            fontWeight: 800,
                                            letterSpacing: "-0.04em",
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: "0.65rem",
                                            lineHeight: 1.5,
                                            mt: 0.4,
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
                            sx={{
                                display: "block",
                                width: "100%",
                                maxWidth: 680,
                                height: "auto",
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default HeroSection;

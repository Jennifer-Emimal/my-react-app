import {
    Box,
    Button,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import {
    PlayArrow,
    ArrowForward,
} from "@mui/icons-material";
import heroBg from "../../../assets/hero.png";

function HeroSection() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                position: "relative",
                overflow: "hidden",

                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

            {/* Main Container */}

            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    maxWidth: "1400px",
                    minHeight: "100vh",
                    margin: "0 auto",
                    padding: {
                        xs: 2,
                        sm: 3,
                        md: 4,
                    },
                    display: "flex",
                    flexDirection: "column",
                }}
            >

                {/* ================= NAVBAR ================= */}

                <Paper
                    elevation={0}
                    sx={{
                        minHeight: 58,
                        borderRadius: "18px",
                        backgroundColor:
                            "rgba(255,255,255,0.16)",
                        border:
                            "1px solid rgba(255,255,255,0.28)",
                        backdropFilter: "blur(18px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 10px 0 18px",
                    }}
                >

                    {/* Logo */}

                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                    >
                        <Box
                            sx={{
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                backgroundColor: "#8B72F5",
                            }}
                        />
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "1.1rem",
                                fontWeight: 700,
                            }}
                        >
                            Evalify
                        </Typography>
                    </Stack>

                    {/* Navigation */}

                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >
                        <Button
                            sx={{
                                color: "rgba(255,255,255,0.75)",
                                textTransform: "none",
                                fontSize: "0.85rem",
                                borderRadius: "10px",

                                "&:hover": {
                                    color: "#FFFFFF",
                                    backgroundColor: "rgba(108,76,241,0.55)",
                                    boxShadow: "0 4px 15px rgba(108,76,241,0.35)",
                                },
                            }}
                        >
                            Platform
                        </Button>

                        <Button
                            sx={{
                                color: "rgba(255,255,255,0.75)",
                                textTransform: "none",
                                fontSize: "0.85rem",
                                borderRadius: "10px",

                                "&:hover": {
                                    color: "#FFFFFF",
                                    backgroundColor: "rgba(108,76,241,0.55)",
                                    boxShadow: "0 4px 15px rgba(108,76,241,0.35)",
                                },
                            }}
                        >
                            Solutions
                        </Button>

                        <Button
                            sx={{
                                color: "rgba(255,255,255,0.75)",
                                textTransform: "none",
                                fontSize: "0.85rem",
                                borderRadius: "10px",

                                "&:hover": {
                                    color: "#FFFFFF",
                                    backgroundColor: "rgba(108,76,241,0.55)",
                                    boxShadow: "0 4px 15px rgba(108,76,241,0.35)",
                                },
                            }}
                        >
                            Resources
                        </Button>
                    </Stack>
                    {/* Navbar Button */}

                    <Button
                        variant="contained"
                        size="small"
                        endIcon={<ArrowForward />}
                        sx={{
                            borderRadius: "20px",
                            padding: "7px 16px",
                            backgroundColor: "#5140C7",
                            textTransform: "none",
                        }}
                    >
                        Get Started
                    </Button>
                </Paper>

                {/* ================= HERO CONTENT ================= */}

                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        padding: {
                            xs: "50px 0",
                            md: "30px 0",
                        },
                    }}
                >

                    {/* LEFT GLASS CARD */}

                    <Paper
                        elevation={0}
                        sx={{
                            position: "relative",
                            zIndex: 3,
                            width: {
                                xs: "100%",
                                md: "46%",
                            },
                            padding: {
                                xs: 3,
                                md: 3.5,
                            },
                            borderRadius: "18px",
                            backgroundColor:
                                "rgba(255,255,255,0.14)",
                            border:
                                "1px solid rgba(255,255,255,0.25)",
                            backdropFilter: "blur(20px)",
                        }}
                    >

                        {/* Small Label */}

                        <Typography
                            sx={{
                                color:
                                    "rgba(255,255,255,0.8)",
                                fontSize: "0.85rem",
                                marginBottom: 1,
                            }}
                        >
                            AI-Powered Hiring Platform
                        </Typography>

                        {/* Main Heading */}

                        <Typography
                            sx={{
                                color: "#111426",
                                fontWeight: 800,
                                fontSize: {
                                    xs: "2.6rem",
                                    sm: "3rem",
                                    md: "3.5rem",
                                },
                                lineHeight: 1.02,
                                letterSpacing: "-0.045em",
                            }}
                        >
                            Find the
                            <br />
                            Right People,
                            <br />
                            <Box
                                component="span"
                                sx={{
                                    color: "#7B4DFF",
                                }}
                            >
                                Faster.
                            </Box>
                        </Typography>

                        {/* Description */}

                        <Typography
                            sx={{
                                color:
                                    "rgba(17,20,38,0.78)",
                                fontSize: "0.9rem",
                                lineHeight: 1.45,
                                maxWidth: 500,
                                marginTop: 2,
                            }}
                        >
                            Conduct AI-driven interviews,
                            evaluate candidates instantly
                            and get deep insights — so you
                            can hire with confidence.
                        </Typography>

                        {/* CTA Buttons */}

                        <Stack
                            direction={{
                                xs: "column",
                                sm: "row",
                            }}
                            spacing={1.5}
                            sx={{
                                marginTop: 2.5,
                            }}
                        >
                            <Button
                                variant="contained"
                                endIcon={
                                    <ArrowForward />
                                }
                                sx={{
                                    borderRadius: "30px",
                                    padding: "10px 18px",
                                    textTransform: "none",
                                    backgroundColor:
                                        "#5140C7",
                                }}
                            >
                                Get Started Free
                            </Button>
                            <Button
                                variant="contained"
                                startIcon={
                                    <PlayArrow />
                                }
                                sx={{
                                    borderRadius: "30px",
                                    padding: "10px 18px",
                                    textTransform: "none",
                                    color: "#202338",
                                    backgroundColor:
                                        "rgba(255,255,255,0.72)",
                                }}
                            >
                                Watch Demo
                            </Button>
                        </Stack>

                        {/* STATS */}

                        <Stack
                            direction="row"
                            spacing={1.2}
                            sx={{
                                marginTop: 2.5,
                            }}
                        >
                            <StatCard
                                number="70%"
                                label="Faster hiring"
                            />
                            <StatCard
                                number="4x"
                                label="More accurate evaluations"
                            />
                            <StatCard
                                number="50+"
                                label="Skills supported"
                            />
                        </Stack>
                    </Paper>
                </Box>

                {/* ================= BOTTOM BRAND ================= */}

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: 1,
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                    >
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

/* ================= STAT CARD ================= */

function StatCard({ number, label }) {
    return (
        <Paper
            elevation={0}
            sx={{
                flex: 1,
                minWidth: 0,
                padding: {
                    xs: 1,
                    sm: 1.2,
                },
                borderRadius: "10px",
                backgroundColor:
                    "rgba(255,255,255,0.24)",
                border:
                    "1px solid rgba(255,255,255,0.55)",
            }}
        >
            <Typography
                sx={{
                    color: "#111426",
                    fontWeight: 800,
                    fontSize: {
                        xs: "1.3rem",
                        sm: "1.5rem",
                    },
                }}
            >
                {number}
            </Typography>
            <Typography
                sx={{
                    color:
                        "rgba(17,20,38,0.7)",
                    fontSize: "0.6rem",
                    lineHeight: 1.2,
                }}
            >
                {label}
            </Typography>
        </Paper>
    );
}

export default HeroSection;


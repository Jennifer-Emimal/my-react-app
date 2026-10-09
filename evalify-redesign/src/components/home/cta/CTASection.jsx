
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function CTASection() {
    return (
        <Box
            id="get-started"
            component="section"
            sx={{
                py: { xs: 3, md: 4 },
                background: (theme) => theme.gradients.hero,
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        minHeight: { xs: 300, md: 220 },
                        borderRadius: "22px",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 0.9fr",
                        },
                        alignItems: "center",
                        background:
                            "linear-gradient(110deg, #DDF5FF 0%, #FFFFFF 52%, #E4E6FF 100%)",
                        border: "1px solid",
                        borderColor: "divider",
                        px: { xs: 3, md: 5 },
                        py: { xs: 4, md: 3 },
                    }}
                >
                    {/* Decorative background shapes */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: 240,
                            height: 240,
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, #E4CFFF 0%, transparent 70%)",
                            right: "30%",
                            top: -90,
                            pointerEvents: "none",
                        }}
                    />

                    <Box sx={{ position: "relative", zIndex: 1 }}>
                        <Typography
                            component="h2"
                            sx={{
                                color: "text.primary",
                                fontSize: { xs: "2.2rem", md: "2.5rem" },
                                fontWeight: 800,
                                lineHeight: 1.05,
                                letterSpacing: "-0.045em",
                            }}
                        >
                            Stop scheduling.
                            <br />
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
                                Start hiring.
                            </Box>
                        </Typography>

                        <Typography
                            sx={{
                                color: "text.secondary",
                                fontSize: "0.85rem",
                                lineHeight: 1.6,
                                maxWidth: 390,
                                mt: 1.5,
                            }}
                        >
                            Join thousands of teams already using Evalify
                            to find and hire top talent.
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1.5,
                                mt: 2,
                            }}
                        >
                            <Button
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    backgroundColor: "primary.main",
                                    color: "primary.contrastText",
                                    borderRadius: "30px",
                                    px: 2.5,
                                    py: 1.1,
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "primary.dark",
                                    },
                                }}
                            >
                                Start free trial
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={
                                    <PlayArrowIcon sx={{ color: "success.main" }} />
                                }
                                sx={{
                                    backgroundColor: "background.paper",
                                    color: "text.primary",
                                    borderColor: "divider",
                                    borderRadius: "30px",
                                    px: 2.2,
                                    py: 1.1,
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "action.hover",
                                        borderColor: "divider",
                                    },
                                }}
                            >
                                Watch demo
                            </Button>
                        </Box>
                    </Box>

                    {/* Dashboard visual */}
                    <Box
                        sx={{
                            position: "relative",
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: 190,
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                width: 250,
                                height: 200,
                                borderRadius: "45%",
                                background:
                                    "linear-gradient(135deg, #F3D8FF, #FFDDB7, #BFD7FF)",
                                filter: "blur(18px)",
                                opacity: 0.8,
                            }}
                        />

                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                maxWidth: 380,
                                p: 2,
                                borderRadius: "18px",
                                backgroundColor: "rgba(255,255,255,0.72)",
                                border: "1px solid rgba(255,255,255,0.9)",
                                boxShadow: "0 18px 45px rgba(65,80,150,0.12)",
                                transform: "rotate(-5deg)",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mb: 2,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "text.primary",
                                        fontSize: "0.7rem",
                                        fontWeight: 800,
                                    }}
                                >
                                    Hiring overview
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "success.main",
                                        fontSize: "0.6rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    ● Live
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 1,
                                }}
                            >
                                {[
                                    ["Candidates", "248"],
                                    ["Interviews", "86"],
                                ].map(([label, value]) => (
                                    <Box
                                        key={label}
                                        sx={{
                                            p: 1.2,
                                            borderRadius: "9px",
                                            backgroundColor: "background.paper",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "text.secondary",
                                                fontSize: "0.6rem",
                                            }}
                                        >
                                            {label}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "text.primary",
                                                fontSize: "1.2rem",
                                                fontWeight: 800,
                                            }}
                                        >
                                            {value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "end",
                                    gap: 1,
                                    height: 55,
                                    mt: 2,
                                    px: 1,
                                }}
                            >
                                {[25, 42, 32, 55, 38, 48, 65, 45, 58, 75, 52, 68].map(
                                    (height, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                flex: 1,
                                                height: `${height}%`,
                                                borderRadius: "4px 4px 0 0",
                                                background: (theme) =>
                                                    theme.gradients.tealBlue,
                                                opacity: 0.85,
                                            }}
                                        />
                                    )
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default CTASection;

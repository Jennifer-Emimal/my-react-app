
import {
    Avatar,
    Box,
    Container,
    Stack,
    Typography,
} from "@mui/material";

function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Evalify has reduced our hiring time by 70%. The quality of candidates is significantly better.",
            name: "Sarah Chen",
            role: "Head of Talent, FintechCo",
            portraits: [
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
            ],
        },
        {
            quote: "The AI evaluations are incredibly accurate and save us hours of manual screening.",
            name: "James Wilson",
            role: "CTO, StartupX",
            portraits: [
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/men/75.jpg",
            ],
        },
        {
            quote: "A must-have for any modern recruiting team. Simple, powerful and reliable.",
            name: "Priya Sharma",
            role: "HR Director, SaaSFlow",
            portraits: [
                "https://randomuser.me/api/portraits/women/65.jpg",
                "https://randomuser.me/api/portraits/women/26.jpg",
            ],
        },
    ];

    return (
        <Box
            id="testimonials"
            component="section"
            sx={{
                background: (theme) => theme.gradients.hero,
                py: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="xl">
                {/* Centered heading */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        mb: { xs: 4, md: 5 },
                    }}
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
                        LOVED BY RECRUITERS
                    </Typography>

                    <Typography
                        component="h2"
                        sx={{
                            color: "text.primary",
                            fontSize: { xs: "2rem", md: "2.6rem" },
                            fontWeight: 800,
                            lineHeight: 1.08,
                            letterSpacing: "-0.045em",
                            width: "100%",
                            textAlign: "center",
                        }}
                    >
                        Recruiters are getting their
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
                            evenings back.
                        </Box>
                    </Typography>
                </Box>

                {/* Testimonial cards */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(3, minmax(0, 1fr))",
                        },
                        gap: { xs: 2, md: 2.5 },
                        width: "100%",
                        maxWidth: 1500,
                        mx: "auto",
                    }}
                >
                    {testimonials.map((item) => (
                        <Box
                            key={item.name}
                            sx={{
                                backgroundColor: "background.paper",
                                border: 1,
                                borderColor: "divider",
                                borderRadius: "14px",
                                p: { xs: 2.5, md: 2 },
                                minHeight: { xs: 170, md: 150 },
                                display: "flex",
                                alignItems: "center",
                                boxShadow: (theme) =>
                                    theme.customShadows.card,
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={1.5}
                                alignItems="flex-start"
                                sx={{ width: "100%" }}
                            >
                                {/* Two portrait avatars */}
                                <Stack spacing={1} flexShrink={0}>
                                    {item.portraits.map((portrait) => (
                                        <Avatar
                                            key={portrait}
                                            src={portrait}
                                            alt="Portrait"
                                            sx={{
                                                width: 42,
                                                height: 42,
                                            }}
                                        />
                                    ))}
                                </Stack>

                                {/* Quote and reviewer details */}
                                <Box sx={{ flex: 1, minWidth: 0 }}>
                                    <Typography
                                        sx={{
                                            color: "text.primary",
                                            fontSize: "0.78rem",
                                            lineHeight: 1.5,
                                            mb: 2,
                                        }}
                                    >
                                        “{item.quote}”
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "text.primary",
                                            fontSize: "0.7rem",
                                            fontWeight: 800,
                                        }}
                                    >
                                        {item.name}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: "0.62rem",
                                            mt: 0.3,
                                        }}
                                    >
                                        {item.role}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default TestimonialsSection;

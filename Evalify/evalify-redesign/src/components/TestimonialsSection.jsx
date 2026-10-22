import {
    Avatar,
    Box,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Divider from "@mui/material/Divider";

import SectionLabel from "./common/SectionLabel";
import GradientText from "./common/GradientText";

const TESTIMONIALS = [
        {
            quote: "Evalify has reduced our hiring time by 70%. The quality of candidates is significantly better.",
            name: "Sarah Chen",
            role: "Head of Talent, FintechCo",
            portrait: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            quote: "The AI evaluations are incredibly accurate and save us hours of manual screening.",
            name: "James Wilson",
            role: "CTO, StartupX",
            portrait: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            quote: "A must-have for any modern recruiting team. Simple, powerful and reliable.",
            name: "Priya Sharma",
            role: "HR Director, SaaSFlow",
            portrait: "https://randomuser.me/api/portraits/women/65.jpg",
        },
    ];

function TestimonialsSection() {
    
    return (
        <Box
            id="testimonials"
            component="section"
            sx={{
    background: (theme) => theme.gradients.hero,
    py: { xs: 5, md: 7 },
}}
        >
            <Container maxWidth="lg">
                {/* Section heading */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        mb: { xs: 3, md: 4 },
                    }}
                >
                    <SectionLabel>Loved by recruiters</SectionLabel>

                    <Typography
                        component="h2"
                        variant="h2"
                        sx={{
                            color: "text.primary",
                            fontSize: {
                                xs: "2.1rem",
                                md: "2.7rem",
                            },
                            width: "100%",
                            textAlign: "center",
                        }}
                    >
                        Recruiters are getting their
                        <br />
                         <GradientText>evenings back.</GradientText>
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
                        mx: "auto",
                    }}
                >
                    {TESTIMONIALS.map((item) => (
                        <Box
                            key={item.name}
                            sx={{
                                bgcolor: "background.paper",
                                border: 1,
                                borderColor: "divider",
                                borderRadius: 3,
                                p: { xs: 2.5, md: 3 },
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: (theme) =>
                                    theme.customShadows.card,
                            }}
                        >
                            {/* Star rating */}
                            <Stack
                                direction="row"
                                spacing={0.3}
                                sx={{ mb: 2 }}
                                aria-label="5 out of 5 stars"
                            >
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <StarRoundedIcon
                                        key={index}
                                        sx={{
                                            color: "secondary.main",
                                            fontSize: 15,
                                        }}
                                    />
                                ))}
                            </Stack>

                            {/* Quote */}
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "text.primary",
                                    fontWeight: 600,
                                    lineHeight: 1.55,
                                    mb: 3,
                                }}
                            >
                                “{item.quote}”
                            </Typography>

                            {/* Divider */}
                            <Divider
                                sx={{
                                    borderColor: "divider",
                                    mb: 2,
                                }}
                            />

                            {/* Customer details */}
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1.5}
                            >
                                <Avatar
                                    src={item.portrait}
                                    alt={item.name}
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        bgcolor: "background.soft",
                                        borderRadius: 2,
                                    }}
                                />

                                <Box sx={{ minWidth: 0 }}>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "text.primary",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {item.name}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: "0.77rem",
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

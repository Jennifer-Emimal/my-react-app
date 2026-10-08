import {
    Box,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import SectionLabel from "../../common/SectionLabel";
import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {
    const testimonials = [
        {
            text: "Evalify has reduced our hiring time by 70%. The quality of candidates is significantly better.",
            name: "Sarah Chen",
            role: "Head of Talent, FintechCo",
            initials: "SC",
            highlighted: true,
            avatarColor: "#F2D7C7",
        },
        {
            text: "The AI evaluations are incredibly accurate and save us hours of manual screening.",
            name: "James Wilson",
            role: "CTO, StartupX",
            initials: "JW",
            highlighted: false,
            avatarColor: "#DDE9D9",
        },
        {
            text: "A must-have for any modern recruiting team. Simple, powerful and reliable.",
            name: "Priya Sharma",
            role: "HR Director, SaaSFlow",
            initials: "PS",
            highlighted: false,
            avatarColor: "#E7DDF7",
        },
    ];

    return (
        <Box
            id="customer-stories"
            component="section"
            sx={{
                backgroundColor: "background.hero",
            }}
        >
            <Container maxWidth="x1">
                {/* HEADER */}

                <Stack
    direction={{ xs: "column", md: "row" }}
    justifyContent="space-between"
    alignItems={{ xs: "flex-start", md: "flex-end" }}
    sx={{ mb: 6 }}
>
    {/* LEFT */}
    <Box sx={{ flex: 1 }}>
        <SectionLabel>
            TEAMS SAY IT BEST
        </SectionLabel>

        <Typography
            sx={{
                color: "text.hero",
                fontSize: {
                    xs: "2.8rem",
                    sm: "3.5rem",
                    md: "4.2rem",
                },
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
            }}
        >
            Less guesswork.
        </Typography>

        <Typography
            sx={{
                color: "primary.main",
                fontSize: {
                    xs: "2.8rem",
                    sm: "3.5rem",
                    md: "4.2rem",
                },
                fontWeight: 400,
                fontStyle: "italic",
                fontFamily: "Georgia, serif",
                lineHeight: 1.05,
                letterSpacing: "-0.045em",
            }}
        >
            More confidence.
        </Typography>
    </Box>

    {/* RIGHT */}
    <Box
        sx={{
            width: { xs: "100%", md: "250px" },
            textAlign: { xs: "left", md: "left" },
            mt: { xs: 0, md: 19 },
        }}
    >
        <Typography
            sx={{
                color: "text.secondary",
                fontSize: "0.8rem",
                lineHeight: 1.5,
            }}
        >
            What hiring teams are saying about Evalify
        </Typography>
    </Box>
</Stack>

                {/* TESTIMONIAL CARDS */}

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1.1fr 1fr 1fr",
                        },
                        gap: 2,
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.name}
                            text={testimonial.text}
                            name={testimonial.name}
                            role={testimonial.role}
                            initials={testimonial.initials}
                            highlighted={testimonial.highlighted}
                            avatarColor={testimonial.avatarColor}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default TestimonialsSection;
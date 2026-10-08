import {
    Box,
    Typography,
} from "@mui/material";

import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import SectionLabel from "../../common/SectionLabel";
import FeatureCard from "./FeatureCard";

function FeatureSection() {
    const features = [
        {
            title: "Interviews",
            description:
                "Understand how candidates think, communicate and approach real situations.",
            backgroundColor: "#F1EDFC",
            borderColor: "#DDD5F1",
            icon: <GraphicEqIcon sx={{ fontSize: 19 }} />,
            chips: ["Video", "Voice", "Written"],
        },
        {
            title: "Coding assessments",
            description:
                "Evaluate practical technical skills with structured coding challenges.",
            backgroundColor: "#FAFAF7",
            borderColor: "#E3E0DA",
            icon: <CodeIcon sx={{ fontSize: 19 }} />,
            chips: ["Technical skills", "Real-world tasks"],
            lightIcon: true,
        },
        {
            title: "Proctoring",
            description:
                "Integrity signals help teams review candidate activity during assessments.",
            backgroundColor: "#F7F3FA",
            borderColor: "#E4DDEB",
            icon: <SecurityIcon sx={{ fontSize: 19 }} />,
            lightIcon: true,
        },
        {
            title: "AI grading",
            description:
                "Use AI to organize evaluation signals while keeping people in control of decisions.",
            backgroundColor: "#F2F7F4",
            borderColor: "#DCE5DF",
            icon: <AutoAwesomeIcon sx={{ fontSize: 19 }} />,
            lightIcon: true,
        },
    ];

    return (
        <Box
            id="toolkit"
            component="section"
            sx={{
                backgroundColor: "background.hero",
                py: {
                    xs: 5,
                    md: 6,
                },
                px: {
                    xs: 2,
                    sm: 4,
                    md: 6,
                },
            }}
        >
            {/* SECTION HEADER */}

            <Box
                sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    mb: 5,
                }}
            >
                <SectionLabel>
                    A THOUGHTFUL TOOLKIT
                </SectionLabel>

                <Typography
                    sx={{
                        color: "#17152D",
                        fontSize: {
                            xs: "2.2rem",
                            sm: "2.8rem",
                            md: "3.2rem",
                        },
                        fontWeight: 500,
                        lineHeight: 1.05,
                        letterSpacing: "-0.04em",
                    }}
                >
                    Everything you need to
                </Typography>

                <Typography
                    sx={{
                        color: "primary.main",
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        fontSize: {
                            xs: "2.2rem",
                            sm: "2.8rem",
                            md: "3.2rem",
                        },
                        fontWeight: 400,
                        lineHeight: 1.05,
                        letterSpacing: "-0.04em",
                    }}
                >
                    see the whole person.
                </Typography>

                <Typography
                    sx={{
                        color: "#6B6980",
                        maxWidth: 600,
                        mt: 2,
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                    }}
                >
                    Bring interviews, technical assessments,
                    proctoring and AI-powered evaluation together
                    in one thoughtful hiring toolkit.
                </Typography>
            </Box>

            {/* FEATURE CARDS */}

            <Box
                sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "1.25fr 1fr",
                    },
                    gap: 1.5,
                }}
            >
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.title}
                        title={feature.title}
                        description={feature.description}
                        backgroundColor={feature.backgroundColor}
                        borderColor={feature.borderColor}
                        icon={feature.icon}
                        chips={feature.chips}
                        lightIcon={feature.lightIcon}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default FeatureSection;
import { useState } from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import SectionLabel from "../../common/SectionLabel";

function AssessmentSection() {
    const [showMore, setShowMore] = useState(false);

    const rounds = [
        ["Written", "MCQ, essay, reading", AssignmentOutlinedIcon, "#6F58D9"],
        ["Coding", "Real code execution", CodeOutlinedIcon, "#75B8E8"],
        ["Video interview", "Recorded responses", VideocamOutlinedIcon, "#FF7B68"],
        ["Live AI interview", "Voice and video", GraphicEqOutlinedIcon, "#76A985"],
        ["HR / behavioral", "Experience and fit", PeopleOutlineOutlinedIcon, "#F6B85F"],
        ["Feedback form", "Custom feedback", HelpOutlineOutlinedIcon, "#F6B85F"],
    ];

    const visibleRounds = showMore ? rounds : rounds.slice(0, 4);

    return (
        <Box
            id="platform"
            component="section"
            sx={{
    backgroundColor: "background.hero", 
}}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        backgroundColor: "#F4F0FA",
                        borderRadius: "14px",
                        p: { xs: 3, md: 5 },
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" },
                        gap: { xs: 5, md: 8 },
                        alignItems: "center",
                    }}
                >
                    {/* LEFT */}
                    <Box>
                        <SectionLabel>DESIGNED AROUND YOUR ROLE</SectionLabel>

                        <Typography
                            sx={{
                                color: "text.hero",
                                fontSize: { xs: "3rem", md: "4.4rem" },
                                fontWeight: 500,
                                lineHeight: 0.94,
                                letterSpacing: "-0.06em",
                            }}
                        >
                            Build an
                            <br />
                            assessment that
                        </Typography>

                        <Typography
                            sx={{
                                color: "primary.main",
                                fontFamily: "Georgia, serif",
                                fontStyle: "italic",
                                fontSize: { xs: "3.3rem", md: "4.6rem" },
                                lineHeight: 0.9,
                            }}
                        >
                            fits.
                        </Typography>

                        <Typography
                            sx={{
                                color: "text.secondary",
                                maxWidth: 410,
                                mt: 3,
                                fontSize: "0.9rem",
                                lineHeight: 1.7,
                            }}
                        >
                            Bring the right rounds together, in the right
                            order. Your process can be structured without
                            feeling one-size-fits-all.
                        </Typography>

                        <Box sx={{ mt: 4 }}>
                            {[
                                "9 configurable assessment round types",
                                "6 question types, plus a large question bank",
                                "Role-based templates you can adapt",
                            ].map((text) => (
                                <Box
                                    key={text}
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        mb: 1.8,
                                    }}
                                >
                                    <Typography sx={{ color: "accent.coral" }}>
                                        ✓
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "text.muted",
                                            fontSize: "0.72rem",
                                        }}
                                    >
                                        {text}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Button
                            sx={{
                                p: 0,
                                color: "text.hero",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                textTransform: "none",
                                "&:hover": {
                                    backgroundColor: "transparent",
                                    color: "primary.main",
                                },
                            }}
                        >
                            Explore assessment builder 
                        </Button>
                    </Box>

                    {/* RIGHT CARD */}
                    <Paper
                        elevation={0}
                        sx={{
                            backgroundColor: "background.paper",
                            border: "1px solid #E5E0EB",
                            borderRadius: "12px",
                            p: { xs: 2.5, md: 3 },
                            boxShadow: "0 20px 45px rgba(70,55,110,.08)",
                            transform: { md: "rotate(1deg)" },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                pb: 2,
                                borderBottom: "1px solid #ECE9F0",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "text.hero",
                                    fontSize: "0.8rem",
                                    fontWeight: 700,
                                }}
                            >
                                Create assessment
                            </Typography>

                            <Typography
                                sx={{
                                    color: "text.subtle",
                                    fontSize: "0.5rem",
                                }}
                            >
                                Product Designer · Draft
                            </Typography>
                        </Box>

                        {/* Progress */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                py: 2,
                            }}
                        >
                            {["Details", "Configure rounds", "Review"].map(
                                (step, index) => (
                                    <Box
                                        key={step}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 0.6,
                                            flex: index === 1 ? 1 : "none",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 18,
                                                height: 18,
                                                borderRadius: "50%",
                                                display: "grid",
                                                placeItems: "center",
                                                backgroundColor:
                                                    index === 1
                                                        ? "primary.main"
                                                        : "transparent",
                                                border:
                                                    index === 1
                                                        ? "none"
                                                        : "1px solid #DDD8E5",
                                                color:
                                                    index === 1
                                                        ? "white"
                                                        : "text.subtle",
                                                fontSize: "0.45rem",
                                            }}
                                        >
                                            {index + 1}
                                        </Box>

                                        <Typography
                                            sx={{
                                                color:
                                                    index === 1
                                                        ? "primary.main"
                                                        : "text.subtle",
                                                fontSize: "0.48rem",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {step}
                                        </Typography>

                                        {index < 2 && (
                                            <Box
                                                sx={{
                                                    flex: 1,
                                                    height: "1px",
                                                    backgroundColor: "#E4E0EA",
                                                    ml: 1,
                                                }}
                                            />
                                        )}
                                    </Box>
                                )
                            )}
                        </Box>

                        <Typography
                            sx={{
                                color: "text.hero",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                mb: 1.5,
                            }}
                        >
                            Select round types
                        </Typography>

                        {/* Rounds */}
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    sm: "1fr 1fr",
                                },
                                gap: 1.2,
                            }}
                        >
                            {visibleRounds.map(
                                ([title, description, Icon, color], index) => {
                                    const selected =
                                        index === 0 ||
                                        index === 1 ||
                                        index === 3;

                                    return (
                                        <Box
                                            key={title}
                                            sx={{
                                                border: "1px solid",
                                                borderColor: selected
                                                    ? "primary.light"
                                                    : "#E5E1E9",
                                                borderRadius: "8px",
                                                p: 1.2,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                                backgroundColor: selected
                                                    ? "#FBF9FF"
                                                    : "background.paper",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 16,
                                                    height: 16,
                                                    borderRadius: "4px",
                                                    display: "grid",
                                                    placeItems: "center",
                                                    backgroundColor: selected
                                                        ? "primary.main"
                                                        : "white",
                                                    border: selected
                                                        ? "none"
                                                        : "1px solid #D8D3E0",
                                                    color: "white",
                                                    fontSize: "0.5rem",
                                                }}
                                            >
                                                {selected ? "✓" : ""}
                                            </Box>

                                            <Box
                                                sx={{
                                                    width: 28,
                                                    height: 28,
                                                    borderRadius: "7px",
                                                    display: "grid",
                                                    placeItems: "center",
                                                    color,
                                                    backgroundColor: `${color}18`,
                                                    "& svg": {
                                                        fontSize: 16,
                                                    },
                                                }}
                                            >
                                                <Icon />
                                            </Box>

                                            <Box>
                                                <Typography
                                                    sx={{
                                                        color: "text.hero",
                                                        fontSize: "0.6rem",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {title}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        color: "text.subtle",
                                                        fontSize: "0.43rem",
                                                    }}
                                                >
                                                    {description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    );
                                }
                            )}
                        </Box>

                        <Button
                            onClick={() => setShowMore(!showMore)}
                            sx={{
                                p: 0,
                                mt: 1.2,
                                color: "primary.main",
                                fontSize: "0.7rem",
                                textTransform: "none",
                            }}
                        >
                            {showMore
                                ? "− Show fewer rounds"
                                : "+ View more round types"}
                        </Button>

                        {/* Footer */}
                        <Box
                            sx={{
                                mt: 2,
                                pt: 2,
                                borderTop: "1px solid #ECE9F0",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "text.subtle",
                                    fontSize: "0.5rem",
                                }}
                            >
                                3 rounds selected
                            </Typography>

                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "primary.main",
                                    color: "text.light",
                                    borderRadius: "7px",
                                    textTransform: "none",
                                    fontSize: "0.55rem",
                                    fontWeight: 700,
                                    px: 1.8,
                                    py: 0.8,
                                    "&:hover": {
                                        backgroundColor: "primary.dark",
                                    },
                                }}
                            >
                                Continue →
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}

export default AssessmentSection;
import { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import SectionLabel from "../../common/SectionLabel";

const content = {
    candidate: {
        desc: "From the first invitation to the final conversation, every step is easier to follow and fairer to experience.",
        steps: [
            ["01", "A simple invitation", "Open one clear link and know what to expect."],
            ["02", "Show how you think", "Complete role-relevant written, video, or coding rounds."],
            ["03", "A conversation that listens", "Meet an AI interviewer shaped around the role."],
            ["04", "A fair review", "Your responses are assessed against clear criteria."],
        ],
        label: "YOUR APPLICATION",
        title: "Your next steps",
        status: "✓ On track",
        rows: [
            ["01", "Role questions", "Written · 12 min", "#F1DCCF"],
            ["02", "Portfolio conversation", "Live AI interview · 20 min", "#DCEBDC"],
            ["03", "Design exercise", "Assessment · 35 min", "#E5DDF5"],
        ],
    },
    recruiter: {
        desc: "From defining the role to making the final decision, every step is clearer for your hiring team.",
        steps: [
            ["01", "Shape the assessment", "Bring together the rounds and questions your role needs."],
            ["02", "Invite candidates", "Send a consistent assessment experience at scale."],
            ["03", "See the evidence", "Review answers, code, interview notes, and integrity signals."],
            ["04", "Make the call together", "Use AI summaries to focus on a human-led decision."],
        ],
        label: "OPEN ROLE · PRODUCT DESIGNER",
        title: "Assessment overview",
        status: "✓ In progress",
        rows: [
            ["AM", "Alex Morgan", "Completed all rounds", "86"],
            ["JR", "Jordan Rivers", "Live interview complete", "82"],
            ["SK", "Sam Kim", "Coding review pending", "—"],
        ],
    },
};

function JourneySection() {
    const [candidate, setCandidate] = useState(true);
    const data = candidate ? content.candidate : content.recruiter;

    return (
        <Box id="how-it-works" component="section" sx={{ backgroundColor: "background.hero" }}>
            <Container maxWidth="xl">
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: { xs: "flex-start", md: "flex-end" }, flexDirection: { xs: "column", md: "row" }, gap: 4, mb: 6 }}>
                    <Box>
                        <SectionLabel>A BETTER HIRING RHYTHM</SectionLabel>
                        <Typography sx={{ color: "text.hero", fontSize: { xs: "3rem", md: "4.4rem" }, fontWeight: 500, lineHeight: .95, letterSpacing: "-.055em" }}>
                            One clear journey.
                        </Typography>
                        <Typography sx={{ color: "primary.main", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: { xs: "3rem", md: "4.4rem" }, lineHeight: .95, letterSpacing: "-.055em" }}>
                            More room for people.
                        </Typography>
                        <Typography sx={{ color: "text.secondary", maxWidth: 470, mt: 3, fontSize: ".85rem", lineHeight: 1.7 }}>
                            {data.desc}
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", p: "4px", backgroundColor: "#F0EDF5", borderRadius: "9px" }}>
                        {[
                            ["For candidates", true],
                            ["For recruiters", false],
                        ].map(([label, value]) => (
                            <Button
                                key={label}
                                onClick={() => setCandidate(value)}
                                sx={{
                                    px: 2, py: 1, borderRadius: "6px", fontSize: ".65rem",
                                    fontWeight: 600, textTransform: "none",
                                    color: candidate === value ? "text.light" : "text.muted",
                                    backgroundColor: candidate === value ? "primary.main" : "transparent",
                                    "&:hover": { backgroundColor: candidate === value ? "primary.main" : "transparent" },
                                }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ position: "relative", overflow: "hidden", backgroundColor: "#F4F0FA", borderRadius: "14px", minHeight: { md: 495 }, p: { xs: 3, md: 5 } }}>
                    <Box sx={{ position: "absolute", width: 330, height: 330, borderRadius: "50%", backgroundColor: "rgba(111,88,217,.08)", right: -105, bottom: -175 }} />

                    <Box sx={{ position: "relative", zIndex: 1, minHeight: { md: 395 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1.08fr" }, gap: { xs: 5, md: 7 }, alignItems: "center" }}>
                        <Box>
                            {data.steps.map(([num, title, desc], i) => (
                                <Box key={num} sx={{ display: "flex", gap: 1.8, position: "relative", pb: i === 3 ? 0 : 3.2 }}>
                                    {i < 3 && (
                                        <Box sx={{ position: "absolute", left: 17, top: 36, bottom: 0, borderLeft: "1px dashed #CFC6DF" }} />
                                    )}

                                    <Box sx={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, display: "grid", placeItems: "center", position: "relative", zIndex: 1, backgroundColor: i === 0 ? "primary.main" : "transparent", border: i === 0 ? "none" : "1px solid #D4CDE1", color: i === 0 ? "text.light" : "text.subtle", fontSize: ".65rem" }}>
                                        {num}
                                    </Box>

                                    <Box sx={{ pt: .5 }}>
                                        <Typography sx={{ color: "text.hero", fontSize: ".82rem", fontWeight: i === 0 ? 600 : 500 }}>
                                            {title}
                                        </Typography>
                                        <Typography sx={{ color: "text.muted", fontSize: ".68rem", lineHeight: 1.55, mt: .4, maxWidth: 350 }}>
                                            {desc}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        <Box sx={{ backgroundColor: "background.paper", borderRadius: "12px", width: "100%", maxWidth: 580, minHeight: { xs: 360, md: 415 }, p: { xs: 2.5, md: 3.5 }, justifySelf: "center", boxShadow: "0 20px 45px rgba(70,55,110,.07)" }}>
                            <Typography sx={{ color: "text.subtle", fontSize: ".48rem", fontWeight: 700, letterSpacing: ".17em", mb: 2.2 }}>
                                {data.label}
                            </Typography>

                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pb: 2.5, borderBottom: "1px solid #ECE9F0" }}>
                                <Typography sx={{ color: "text.hero", fontSize: "1.05rem", fontWeight: 500 }}>
                                    {data.title}
                                </Typography>
                                <Box sx={{ backgroundColor: "#EDF6EE", color: "accent.green", borderRadius: "20px", px: 1.3, py: .7, fontSize: ".52rem" }}>
                                    {data.status}
                                </Box>
                            </Box>

                            {data.rows.map((row) => (
                                <Box key={row[0]} sx={{ display: "flex", alignItems: "center", gap: 1.5, py: 1.6, borderBottom: "1px solid #ECE9F0" }}>
                                    <Box sx={{ width: 36, height: 36, borderRadius: "9px", backgroundColor: candidate ? row[3] : "#E8E1F5", display: "grid", placeItems: "center", fontSize: ".5rem", flexShrink: 0 }}>
                                        {row[0]}
                                    </Box>

                                    <Box sx={{ flex: 1 }}>
                                        <Typography sx={{ color: "text.hero", fontSize: ".65rem", fontWeight: 700 }}>
                                            {row[1]}
                                        </Typography>
                                        <Typography sx={{ color: "text.subtle", fontSize: ".48rem", mt: .3 }}>
                                            {row[2]}
                                        </Typography>
                                    </Box>

                                    {candidate ? (
                                        <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "accent.green" }} />
                                    ) : (
                                        <Typography sx={{ color: "primary.main", fontSize: ".58rem", fontWeight: 700 }}>
                                            {row[3]}
                                        </Typography>
                                    )}
                                </Box>
                            ))}

                            <Box sx={{ mt: 2, pt: 2, display: "flex", justifyContent: "space-between" }}>
                                <Typography sx={{ color: "text.subtle", fontSize: ".5rem" }}>
                                    {candidate ? "Clear instructions before each round" : "Rubric-aligned evaluation"}
                                </Typography>
                                <Typography sx={{ color: "primary.main", fontSize: ".5rem", fontWeight: 600, textAlign: "right" }}>
                                    {candidate ? "Need help?" : "Open hiring summary"}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default JourneySection;

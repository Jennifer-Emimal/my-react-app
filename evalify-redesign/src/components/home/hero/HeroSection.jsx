import {
    Box,
    Container,
    Typography,
} from "@mui/material";

import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

import heroImage from "../../../assets/hero.png";

import SectionLabel from "../../common/SectionLabel";
import ActionButton from "../../common/ActionButton";
import LogoSquare from "../../common/LogoSquare";
import NavButton from "./NavButton";

function HeroSection() {
    return (
        <Box
            id="home"
            component="section"
            sx={{
                backgroundColor: "background.hero",
                color: "text.hero",
                minHeight: "100vh",
                
            }}
        >
            {/* NAVBAR */}

            <Container maxWidth="xl">
                <Box
                    sx={{
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* LOGO */}

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(2, 12px)",
                                gap: "3px",
                            }}
                        >
                            <LogoSquare color="#FF9B6A" />
                            <LogoSquare color="#F6B85F" />
                            <LogoSquare color="#6F58D9" />
                            <LogoSquare color="#75B8E8" />
                        </Box>

                        <Typography
                            sx={{
                                fontSize: "1.2rem",
                                fontWeight: 700,
                                letterSpacing: "-0.03em",
                            }}
                        >
                            evalify
                        </Typography>
                    </Box>

                    {/* NAVIGATION */}

                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                            alignItems: "center",
                            gap: 3,
                        }}
                    >
                        <NavButton href="#platform">
                            Platform
                        </NavButton>

                        <NavButton href="#how-it-works">
                            How it works
                        </NavButton>

                        <NavButton href="#customer-stories">
                            Customer stories
                        </NavButton>

                        <NavButton href="#faq">
                            FAQ
                        </NavButton>
                    </Box>

                    {/* NAV CTA */}

                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "flex",
                            },
                            alignItems: "center",
                            gap: 1.5,
                        }}
                    >
                        <ActionButton href="#home">
                            Get started
                        </ActionButton>

                        <ActionButton href="#login">
                            Log in
                        </ActionButton>
                    </Box>
                </Box>
            </Container>

            {/* HERO CONTENT */}

            <Container maxWidth="xl">
                <Box
                    sx={{
                        minHeight: {
                            xs: "calc(100vh - 80px)",
                            md: "calc(100vh - 80px)",
                        },
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr",
                        },
                        alignItems: "center",
                        gap: {
                            xs: 6,
                            md: 8,
                        },
                        py: {
                            xs: 7,
                            md: 5,
                        },
                    }}
                >
                    {/* LEFT */}

                    <Box>
                        <SectionLabel>
                            HIRING, WITH MORE SIGNAL
                        </SectionLabel>

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: "3.2rem",
                                    sm: "4.2rem",
                                    md: "5.5rem",
                                },
                                fontWeight: 500,
                                lineHeight: 0.92,
                                letterSpacing: "-0.055em",
                                maxWidth: 650,
                            }}
                        >
                            Find the
                            <br />
                            right people,
                            <br />
                            faster.
                        </Typography>

                        <Typography
                            sx={{
                                color: "text.secondary",
                                maxWidth: 520,
                                mt: 3,
                                fontSize: {
                                    xs: "0.95rem",
                                    md: "1rem",
                                },
                                lineHeight: 1.7,
                            }}
                        >
                            Evalify helps teams build thoughtful,
                            structured assessments that reveal what
                            candidates can actually do.
                        </Typography>

                        {/* ACTIONS */}

                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1.5,
                                mt: 4,
                            }}
                        >
                            <ActionButton href="#platform">
                                Get started free
                            </ActionButton>

                            <ActionButton href="#how-it-works">
                                See how Evalify works
                            </ActionButton>
                        </Box>

                        {/* TRUST */}

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mt: 3,
                            }}
                        >
                            <VerifiedUserOutlinedIcon
                                sx={{
                                    fontSize: 18,
                                    color: "accent.green",
                                }}
                            />

                            <Typography
                                sx={{
                                    fontSize: "0.7rem",
                                    color: "text.muted",
                                }}
                            >
                                Built for thoughtful, fairer hiring
                            </Typography>
                        </Box>
                    </Box>

                    {/* RIGHT IMAGE */}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src={heroImage}
                            alt="Evalify hiring platform"
                            sx={{
                                width: "100%",
                                maxWidth: 650,
                                height: "auto",
                                display: "block",
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


import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LogoSquare from "../../common/LogoSquare";

function FooterSection() {
    const navigation = [
        { label: "Platform", href: "#platform" },
        { label: "Customer stories", href: "#customer-stories" },
        { label: "FAQ", href: "#faq" },
        { label: "AI settings", href: "#aiChoices" },
    ];

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#24213F",
                color: "#FFFFFF",
            }}
        >
            {/* TOP CTA */}

            <Box
                sx={{
                    minHeight: {
                        xs: "150px",
                        md: "180px",
                    },
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Background circles */}

                <Box
                    sx={{
                        position: "absolute",
                        width: 550,
                        height: 550,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.06)",
                        top: -400,
                        right: "5%",
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.04)",
                        top: -300,
                        right: "10%",
                    }}
                />

                <Container
                    maxWidth="xl"
                    sx={{
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                   <Box
    sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: {
            xs: "flex-start",
            md: "center",
        },
        flexDirection: {
            xs: "column",
            md: "row",
        },
        gap: 5,
        pt: { xs: 2, md: 3 },
        pb: { xs: 2, md: 2 },
    }}
>
                        {/* LEFT CONTENT */}

                        <Box>
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                                sx={{ mb: 2 }}
                            >
                                <Box
                                    sx={{
                                        width: 18,
                                        height: "1px",
                                        backgroundColor: "#FF8A72",
                                        transform: "translateY(8px)",
                                    }}
                                />

                                <Typography
                                    sx={{
                                        fontSize: "0.7rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.15em",
                                        color: "#BCA8FF",
                                    }}
                                >
                                    MAKE THE NEXT HIRE A BETTER ONE
                                </Typography>
                            </Stack>

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "3rem",
                                        sm: "4rem",
                                        md: "4.2rem",
                                    },
                                    lineHeight: 0.9,
                                    fontWeight: 500,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Better people.
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "3rem",
                                        sm: "4rem",
                                        md: "4.2rem",
                                    },
                                    lineHeight: 1.5,
                                    fontFamily: "Georgia, serif",
                                    fontStyle: "italic",
                                    color: "#C9B8FF",
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                Brighter futures.
                            </Typography>
                        </Box>

                        {/* BUTTON */}

                        <Box
                            sx={{
                                minWidth: {
                                    xs: "100%",
                                    md: "250px",
                                },
                            }}
                        >
                            <Button
                                fullWidth
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    color: "#5142B8",
                                    padding: "15px 20px",
                                    borderRadius: "10px",
                                    fontWeight: 700,
                                    textTransform: "none",

                                    "&:hover": {
                                        backgroundColor: "#F2EEFF",
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                Build a stronger team
                            </Button>

                            <Typography
                                sx={{
                                    mt: 1.5,
                                    fontSize: "0.7rem",
                                    color: "rgba(255,255,255,0.6)",
                                }}
                            >
                                Meet the people behind the potential.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* FOOTER NAVIGATION */}

            <Box
                sx={{
                    borderTop:
                        "1px solid rgba(255,255,255,0.06)",
                }}
            >
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            /* KEEP ORIGINAL SIZE */
                            minHeight: "50px",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",

                            flexDirection: {
                                xs: "column",
                                md: "row",
                            },

                            /* REDUCED INTERNAL GAP */
                            gap: 1,
                            py: 0,
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
                                    color: "#FFFFFF",
                                }}
                            >
                                evalify
                            </Typography>
                        </Box>

                        {/* TAGLINE */}

                        <Typography
                            sx={{
                                fontSize: "0.7rem",
                                color: "rgba(255,255,255,0.65)",
                            }}
                        >
                            A little more signal. A lot more human.
                        </Typography>

                        {/* NAVIGATION */}

                        <Stack
                            direction="row"
                            spacing={{
                                xs: 2,
                                md: 3,
                            }}
                            flexWrap="wrap"
                            justifyContent="center"
                        >
                            {navigation.map((item) => (
                                <Button
                                    key={item.label}
                                    component="a"
                                    href={item.href}
                                    sx={{
                                        color: "#FFFFFF",
                                        fontSize: "0.7rem",
                                        minWidth: "auto",
                                        padding: 0,
                                        textTransform: "none",

                                        "&:hover": {
                                            color: "#BCA8FF",
                                            backgroundColor:
                                                "transparent",
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Stack>
                    </Box>

                    {/* BOTTOM LINE */}

                    <Box
                        sx={{
                            borderTop:
                                "1px solid rgba(255,255,255,0.08)",
                            py: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: {
                                xs: "column",
                                md: "row",
                            },
                            gap: 1,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "0.65rem",
                                color: "rgba(255,255,255,0.45)",
                            }}
                        >
                            © Evalify · AI-powered hiring
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "0.65rem",
                                color: "rgba(255,255,255,0.45)",
                            }}
                        >
                            Thoughtful tools for fairer decisions
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default FooterSection;
5
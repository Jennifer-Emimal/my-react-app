
import { useState } from "react";
import {
    Box,
    Button,
    Container,
    Collapse,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { label: "Product", href: "#product" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Resources", href: "#resources" },
    ];

    return (
        <Box
            component="header"
            sx={{
                background: (theme) => theme.gradients.hero,
                width: "100%",
            }}
        >
            <Container maxWidth="xl">
                <Box
                    component="nav"
                    aria-label="Main navigation"
                    sx={{
                        minHeight: { xs: 64, md: 76 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 3,
                    }}
                >
                    {/* Logo */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={0.8}
                        sx={{ flexShrink: 0 }}
                    >
                        <Box
                            sx={{
                                width: 27,
                                height: 27,
                                borderRadius: "7px",
                                display: "grid",
                                placeItems: "center",
                                background: (theme) =>
                                    theme.gradients.tealBlue,
                                boxShadow: (theme) =>
                                    theme.customShadows.button,
                            }}
                        >
                            <AutoAwesomeRoundedIcon
                                sx={{
                                    fontSize: 17,
                                    color: "primary.contrastText",
                                }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                color: "text.primary",
                                fontSize: "1.1rem",
                                fontWeight: 800,
                                letterSpacing: "-0.04em",
                            }}
                        >
                            Evalify
                        </Typography>
                    </Stack>

                    {/* Desktop navigation */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={{ md: 2, lg: 3 }}
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                component="a"
                                href={item.href}
                                endIcon={
                                    item.dropdown ? (
                                        <KeyboardArrowDownIcon />
                                    ) : null
                                }
                                sx={{
                                    color: "text.primary",
                                    fontSize: "0.76rem",
                                    fontWeight: 600,
                                    minWidth: "auto",
                                    px: 0.5,
                                    "& .MuiButton-endIcon": {
                                        ml: 0.2,
                                    },
                                    "&:hover": {
                                        color: "secondary.dark",
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Stack>

                    {/* Desktop actions */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1.5}
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            flexShrink: 0,
                        }}
                    >
                        <Button
                            component="a"
                            href="#signin"
                            sx={{
                                color: "text.secondary",
                                fontSize: "0.76rem",
                                minWidth: "auto",
                                "&:hover": {
                                    color: "text.primary",
                                    backgroundColor: "transparent",
                                },
                            }}
                        >
                            Sign in
                        </Button>

                        <Button
                            component="a"
                            href="#get-started"
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                backgroundColor: "primary.main",
                                color: "primary.contrastText",
                                borderRadius: "24px",
                                px: 2,
                                py: 0.9,
                                fontSize: "0.75rem",
                                whiteSpace: "nowrap",
                                boxShadow: (theme) =>
                                    theme.customShadows.button,
                                "&:hover": {
                                    backgroundColor: "primary.dark",
                                },
                            }}
                        >
                            Get started
                        </Button>
                    </Stack>

                    {/* Mobile menu button */}
                    <IconButton
                        aria-label={
                            mobileMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={mobileMenuOpen}
                        onClick={() =>
                            setMobileMenuOpen(!mobileMenuOpen)
                        }
                        sx={{
                            display: { xs: "flex", sm: "none" },
                            color: "text.primary",
                        }}
                    >
                        {mobileMenuOpen ? (
                            <CloseRoundedIcon />
                        ) : (
                            <MenuRoundedIcon />
                        )}
                    </IconButton>
                </Box>

                {/* Mobile navigation */}
                <Collapse in={mobileMenuOpen}>
                    <Stack
                        spacing={1}
                        sx={{
                            display: { xs: "flex", md: "none" },
                            pb: 2,
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                component="a"
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                sx={{
                                    justifyContent: "space-between",
                                    color: "text.primary",
                                    fontSize: "0.85rem",
                                }}
                            >
                                {item.label}
                                {item.dropdown && (
                                    <KeyboardArrowDownIcon />
                                )}
                            </Button>
                        ))}

                        <Button
                            component="a"
                            href="#signin"
                            onClick={() => setMobileMenuOpen(false)}
                            sx={{
                                justifyContent: "flex-start",
                                color: "text.secondary",
                            }}
                        >
                            Sign in
                        </Button>

                        <Button
                            component="a"
                            href="#get-started"
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => setMobileMenuOpen(false)}
                            sx={{
                                alignSelf: "flex-start",
                                backgroundColor: "primary.main",
                                color: "primary.contrastText",
                                "&:hover": {
                                    backgroundColor: "primary.dark",
                                },
                            }}
                        >
                            Get started
                        </Button>
                    </Stack>
                </Collapse>
            </Container>
        </Box>
    );
}

export default Navbar;

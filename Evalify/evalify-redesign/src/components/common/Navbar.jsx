import BrandLogo from "./BrandLogo";
import { useState } from "react";
import {
    Box,
    Button,
    Container,
    Collapse,
    IconButton,
    Stack,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const NAV_ITEMS = [
    { label: "Product", href: "#interview-showcase" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#testimonials" },
];

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <Box
            component="header"
            sx={{
                background: (theme) => theme.gradients.hero,
                width: "100%",
            }}
        >
            <Container maxWidth="lg">
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
                    <BrandLogo />

                    {/* Desktop navigation */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={{ md: 2, lg: 3 }}
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {NAV_ITEMS.map((item) => (
                            <Button
                                key={item.label}
                                component="a"
                                href={item.href}
                                variant="nav"
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
                            display: { xs: "none", md: "flex" },
                            flexShrink: 0,
                        }}
                    >
                        {/* fontSize inherits 0.8rem from theme Button root */}
                        <Button
                            sx={{
                                color: "text.secondary",
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
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
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
                        aria-controls="mobile-navigation"
                        onClick={() =>
                            setMobileMenuOpen((previous) => !previous)
                        }
                        sx={{
                            display: { xs: "flex", md: "none" },
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
                <Collapse in={mobileMenuOpen} unmountOnExit>
                    <Stack
                        id="mobile-navigation"
                        spacing={1}
                        sx={{
                            display: { xs: "flex", md: "none" },
                            pb: 2,
                        }}
                    >
                        {NAV_ITEMS.map((item) => (
                            <Button
                                key={item.label}
                                component="a"
                                href={item.href}
                                onClick={closeMobileMenu}
                                sx={{
                                    justifyContent: "space-between",
                                    color: "text.primary",
                                    fontSize: "0.9rem",
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}

                        <Button
                            onClick={closeMobileMenu}
                            sx={{
                                justifyContent: "flex-start",
                                color: "text.secondary",
                            }}
                        >
                            Sign in
                        </Button>

                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            onClick={closeMobileMenu}
                            sx={{
                                alignSelf: "flex-start",
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

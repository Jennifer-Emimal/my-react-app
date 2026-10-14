
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

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
    { label: "Product", href: "#interview-showcase" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#testimonials" },
];

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
                        {navItems.map((item) => (
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
                            display: { xs: "none", sm: "flex" },
                            flexShrink: 0,
                        }}
                    >
                        <Button
                            onClick={() => {}}
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
    variant="contained"
    endIcon={<ArrowForwardIcon />}
    onClick={() => {}}
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
                            display: { xs: "flex", sm: "none" },
                            pb: 2,
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                onClick={() =>
                                    setMobileMenuOpen(false)
                                }
                                sx={{
                                    justifyContent: "space-between",
                                    color: "text.primary",
                                    fontSize: "0.85rem",
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}

                        <Button
                            onClick={() =>
                                setMobileMenuOpen(false)
                            }
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
    onClick={() => setMobileMenuOpen(false)}
    sx={{ alignSelf: "flex-start" }}
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

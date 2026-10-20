import { useState } from "react";

import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";

import SectionLabel from "./common/SectionLabel";
import GradientText from "./common/GradientText";


const PLANS = [
    {
        name: "Free",
        description: "Perfect for trying out Evalify",
        monthly: 0,
        yearly: 0,
        features: [
            "5 AI interviews",
            "Basic evaluations",
            "Email support",
        ],
        button: "Get started",
    },
    {
        name: "Starter",
        description: "For small teams",
        monthly: 49,
        yearly: 39,
        features: [
            "50 AI interviews",
            "Standard analytics",
            "ATS integration",
            "Priority support",
        ],
        button: "Get started",
    },
    {
        name: "Pro",
        description: "For growing teams",
        monthly: 149,
        yearly: 119,
        features: [
            "250 AI interviews",
            "Advanced analytics",
            "Custom questions",
            "Team collaboration",
            "Dedicated support",
        ],
        button: "Start free trial",
        popular: true,
    },
    {
        name: "Enterprise",
        description: "For large organizations",
        monthly: 299,
        yearly: 239,
        features: [
            "Unlimited interviews",
            "Custom workflows",
            "SSO & advanced security",
            "Dedicated account manager",
        ],
        button: "Contact sales",
    },
];


function PricingSection() {
    const [yearly, setYearly] = useState(false);
    return (
        <Box
            id="pricing"
            component="section"
            sx={{
                background: (theme) => theme.gradients.hero,
                py: { xs: 5, md: 7 },
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {/* Heading and billing toggle */}
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    sx={{
                        width: "100%",
                        mb: { xs: 1, md: 0 },
                    }}
                >
                    <SectionLabel>Simple pricing</SectionLabel>

                    {/* Section heading */}
                    <Typography
                        component="h2"
                        variant="h2"
                        sx={{
                            color: "text.primary",
                            fontSize: {
                                xs: "1.9rem",
                                md: "2.65rem",
                            },
                            textAlign: "center",
                        }}
                    >
                        Start free.{" "}
                         <GradientText>Scale when </GradientText>
                        you're ready.
                    </Typography>

                    {/* Billing toggle */}
                    <Box
    sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        gap: 0.5,
        mt: 2,
        p: 0.5,
        borderRadius: "30px",
        backgroundColor: "action.hover",
        width: "fit-content",
        maxWidth: "100%",
    }}
>
                        <Button
                            onClick={() => setYearly(false)}
                            sx={{
                                px: 2.5,
                                py: 0.8,
                                borderRadius: "24px",
                                fontSize: "0.7rem",
                                whiteSpace: "nowrap",
                                color: yearly
                                    ? "text.secondary"
                                    : "primary.contrastText",
                                backgroundColor: yearly
                                    ? "transparent"
                                    : "primary.main",
                                "&:hover": {
                                    backgroundColor: yearly
                                        ? "action.selected"
                                        : "primary.dark",
                                },
                            }}
                        >
                            Monthly
                        </Button>

                        <Button
                            onClick={() => setYearly(true)}
                            sx={{
                                px: 2,
                                py: 0.8,
                                borderRadius: "24px",
                                fontSize: "0.7rem",
                                whiteSpace: "nowrap",
                                color: yearly
                                    ? "text.primary"
                                    : "text.secondary",
                                backgroundColor: yearly
                                    ? "background.paper"
                                    : "transparent",
                                "&:hover": {
                                    backgroundColor: yearly
                                        ? "background.paper"
                                        : "action.selected",
                                },
                            }}
                        >
                            Yearly
                            <Box
                                component="span"
                                sx={{
                                    color: "success.main",
                                    fontWeight: 800,
                                    ml: 0.7,
                                }}
                            >
                                Save 20%
                            </Box>
                        </Button>
                    </Box>
                </Stack>

                {/* Pricing cards */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, minmax(0, 1fr))",
                            lg: "repeat(4, minmax(0, 1fr))",
                        },
                        gap: { xs: 2, md: 2.5 },
                        mt: { xs: 4, md: 3.5 },
                        width: "100%",
alignItems: "stretch",
                    }}
                >
                   {PLANS.map((plan) => (
                        <Box
                            key={plan.name}
                            sx={{
                                position: "relative",
                                backgroundColor: "background.paper",
                                border: "1px solid",
                                borderColor: plan.popular
                                    ? "secondary.main"
                                    : "divider",
                                borderRadius: "14px",
                                p: { xs: 2.5, md: 2.5 },
                                pt: plan.popular ? 3 : 2.5,
                                minHeight: { md: 325 },
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: (theme) =>
                                    theme.customShadows.card,
                            }}
                        >
                            {/* Popular plan badge */}
                            {plan.popular && (
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: -13,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        backgroundColor: "secondary.main",
                                        color: "primary.contrastText",
                                        px: 1.8,
                                        py: 0.5,
                                        borderRadius: "20px",
                                        fontSize: "0.62rem",
                                        fontWeight: 700,
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Most popular
                                </Box>
                            )}

                            {/* Plan name */}
                            <Typography
                                component="h3"
                                variant="h3"
                                sx={{
                                    color: "text.primary",
                                    fontSize: "1rem",
                                }}
                            >
                                {plan.name}
                            </Typography>

                            {/* Plan description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "text.secondary",
                                    fontSize: "0.75rem",
                                    mt: 0.6,
                                }}
                            >
                                {plan.description}
                            </Typography>

                            {/* Price */}
                            <Stack
                                direction="row"
                                alignItems="baseline"
                                spacing={0.5}
                                sx={{ mt: 2.5, mb: 2 }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{
                                        color: "text.primary",
                                        fontSize: {
                                            xs: "2rem",
                                            md: "2.3rem",
                                        },
                                    }}
                                >
                                    ${yearly ? plan.yearly : plan.monthly}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "text.disabled",
                                        fontSize: "0.7rem",
                                    }}
                                >
                                    /month
                                </Typography>
                            </Stack>

                            {/* Plan features */}
                            <Stack spacing={1.2} sx={{ mb: 3 }}>
                                {plan.features.map((feature) => (
                                    <Stack
                                        key={feature}
                                        direction="row"
                                        alignItems="center"
                                        spacing={1}
                                    >
                                        <CheckIcon
                                            sx={{
                                                color: "success.main",
                                                fontSize: 17,
                                                flexShrink: 0,
                                            }}
                                        />

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "text.secondary",
                                                fontSize: "0.75rem",
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {feature}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>

                            {/* Push button to bottom */}
                            <Box sx={{ flexGrow: 1 }} />

                            {/* Plan CTA */}
                            <Button
                                fullWidth
                                variant={
                                    plan.popular ? "contained" : "text"
                                }
                                sx={{
                                    mt: "auto",
                                    py: 1,
                                    borderRadius: "9px",
                                    fontSize: "0.72rem",
                                    color: plan.popular
                                        ? "primary.contrastText"
                                        : "text.primary",
                                    backgroundColor: plan.popular
                                        ? "primary.main"
                                        : "action.hover",
                                    "&:hover": {
                                        backgroundColor: plan.popular
                                            ? "primary.dark"
                                            : "action.selected",
                                    },
                                }}
                            >
                                {plan.button}
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default PricingSection;



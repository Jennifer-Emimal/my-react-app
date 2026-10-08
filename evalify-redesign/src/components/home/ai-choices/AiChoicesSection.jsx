import {
    Box,
    Container,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import SectionLabel from "../../common/SectionLabel";
import ProviderRow from "./ProviderRow";
import SettingRow from "./SettingRow";

function AiChoicesSection() {
    const features = [
        {
            icon: <VerifiedUserOutlinedIcon />,
            text: "Optional OpenAI or Anthropic keys",
        },
        {
            icon: <LockOutlinedIcon />,
            text: "Encrypted key storage",
        },
        {
            icon: <SettingsOutlinedIcon />,
            text: "Organization-level data isolation",
        },
    ];

    const settings = [
        "Answer grading",
        "AI hiring summary",
        "Question generation",
    ];

    return (
        <Box
            id="aiChoices"
            component="section"
            sx={{
                backgroundColor: "background.hero",
            }}
        >
            <Container maxWidth="x1">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "0.85fr 1.15fr",
                        },
                        gap: { xs: 6, md: 10 },
                        alignItems: "center",
                    }}
                >
                    {/* LEFT CONTENT */}

                    <Box>
                        <SectionLabel>
                            CONTROL IS PART OF TRUST
                        </SectionLabel>

                        <Typography
                            sx={{
                                color: "text.hero",
                                fontSize: {
                                    xs: "3rem",
                                    md: "4rem",
                                },
                                fontWeight: 500,
                                lineHeight: 0.98,
                                letterSpacing: "-0.05em",
                            }}
                        >
                            Your process.
                        </Typography>

                        <Typography
                            sx={{
                                color: "primary.main",
                                fontSize: {
                                    xs: "3rem",
                                    md: "4rem",
                                },
                                fontFamily: "Georgia, serif",
                                fontStyle: "italic",
                                fontWeight: 400,
                                lineHeight: 0.98,
                                letterSpacing: "-0.05em",
                            }}
                        >
                            Your AI choices.
                        </Typography>

                        <Typography
                            sx={{
                                color: "text.secondary",
                                maxWidth: 470,
                                mt: 3,
                                fontSize: "0.9rem",
                                lineHeight: 1.7,
                            }}
                        >
                            Choose how AI fits into your hiring process,
                            while keeping control over your organization's
                            data and evaluation workflow.
                        </Typography>

                        <Stack spacing={2.5} sx={{ mt: 4 }}>
                            {features.map((feature) => (
                                <Stack
                                    key={feature.text}
                                    direction="row"
                                    spacing={1.5}
                                    alignItems="center"
                                >
                                    <Box
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: "#F0EAFE",
                                            color: "primary.main",
                                        }}
                                    >
                                        {feature.icon}
                                    </Box>

                                    <Typography
                                        sx={{
                                            fontSize: "0.85rem",
                                            color: "text.secondary",
                                        }}
                                    >
                                        {feature.text}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>

                    {/* SETTINGS CARD */}

                    <Paper
                        elevation={0}
                        sx={{
                            backgroundColor: "background.paper",
                            border: "1px solid #E1DCEB",
                            borderRadius: "12px",
                            p: { xs: 3, md: 4 },
                            boxShadow:
                                "0 20px 50px rgba(70,55,110,0.08)",
                        }}
                    >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ mb: 3 }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "text.hero",
                                }}
                            >
                                AI provider settings
                            </Typography>

                            <Box
                                sx={{
                                    px: 1.2,
                                    py: 0.5,
                                    borderRadius: "20px",
                                    backgroundColor: "#F0EAFE",
                                    color: "primary.main",
                                    fontSize: "0.6rem",
                                    fontWeight: 600,
                                }}
                            >
                                Secure connection
                            </Box>
                        </Stack>

                        <Stack spacing={2}>
                            <ProviderRow
                                name="Anthropic"
                                keyText="••••••••••••••••"
                            />

                            <ProviderRow
                                name="OpenAI"
                                keyText="••••••••••••••••"
                            />
                        </Stack>

                        {/* FEATURE SETTINGS */}

                        <Box
                            sx={{
                                mt: 3,
                                p: 2,
                                borderRadius: "8px",
                                backgroundColor: "#F7F5FB",
                                border: "1px solid #E5E0EE",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                    color: "text.hero",
                                    mb: 1,
                                }}
                            >
                                Feature configuration
                            </Typography>

                            <Stack spacing={1}>
                                {settings.map((setting) => (
                                    <SettingRow
                                        key={setting}
                                        label={setting}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}

export default AiChoicesSection;

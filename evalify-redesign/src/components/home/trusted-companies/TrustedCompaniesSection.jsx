
import { Box, Container, Stack, Typography } from "@mui/material";

import HubIcon from "@mui/icons-material/Hub";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

function TrustedCompaniesSection() {
    const companies = [
        { name: "slack", Icon: HubIcon },
        { name: "Notion", Icon: ViewQuiltOutlinedIcon },
        { name: "linear", Icon: CircleOutlinedIcon },
        { name: "Vercel", Icon: ChangeHistoryIcon },
        { name: "segment", Icon: GraphicEqIcon },
        { name: "loom", Icon: AllInclusiveIcon },
        { name: "otter.ai", Icon: BubbleChartIcon },
        { name: "webflow", Icon: WaterDropIcon },
    ];

    return (
        <Box
            component="section"
            aria-label="Trusted companies"
           sx={{
    background: (theme) => theme.gradients.hero,
    py: { xs: 4, md: 5 },
}}
        >
            <Container maxWidth="xl">
                <Typography
                    sx={{
                        textAlign: "center",
                        color: "text.disabled",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        mb: 4,
                    }}
                >
                    Trusted by growing teams
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(2, minmax(0, 1fr))",
                            sm: "repeat(4, minmax(0, 1fr))",
                            md: "repeat(8, minmax(0, 1fr))",
                        },
                        justifyItems: "center",
                        alignItems: "center",
                        width: "100%",
                        maxWidth: 1200,
                        mx: "auto",
                        columnGap: 2,
                        rowGap: 2,
                    }}
                >
                    {companies.map(({ name, Icon }) => (
                        <Stack
                            key={name}
                            direction="row"
                            alignItems="center"
                            spacing={0.7}
                            sx={{
                                color: "text.secondary",
                                opacity: 0.8,
                                whiteSpace: "nowrap",
                            }}
                        >
                            <Icon sx={{ fontSize: 25 }} />

                            <Typography
                                sx={{
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    letterSpacing: "-0.025em",
                                }}
                            >
                                {name}
                            </Typography>
                        </Stack>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default TrustedCompaniesSection;

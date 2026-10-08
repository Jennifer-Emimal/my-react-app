import { Box, Container, Typography } from "@mui/material";

import StatItem from "./StatItem";

function StatsSection() {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                backgroundColor: "#F4F0FA",
                borderTop: "1px solid #E7E1F0",
                borderBottom: "1px solid #E7E1F0",
                
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        minHeight: "88px",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "1.4fr 1fr 1fr 1fr",
                        },
                        alignItems: "center",
                        
                    }}
                >
                    {/* INTRO */}

                    <Box
                        sx={{
                            padding: {
                                xs: "24px 20px",
                                sm: "0 20px",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "0.80rem",
                                lineHeight: 1.4,
                                color: "text.muted",
                                maxWidth: "150px",
                            }}
                        >
                            More clarity for teams.
                            <br />
                            A better experience for
                            <br />
                            candidates.
                        </Typography>
                    </Box>

                    {/* STATS */}

                    <StatItem
                        value="70%"
                        label="faster hiring"
                    />

                    <StatItem
                        value="4×"
                        label="more accurate evaluations"
                    />

                    <StatItem
                        value="50+"
                        label="skills supported"
                    />
                </Box>
            </Container>
        </Box>
    );
}

export default StatsSection;

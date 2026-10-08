import { Box, Stack, Typography } from "@mui/material";

function SectionLabel({ children }) {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
                mb: 2,
            }}
        >
            <Box
                sx={{
                    width: 18,
                    height: "1px",
                    backgroundColor: "accent.coral",
                    transform: "translateY(8px)",
                }}
            />

            <Typography
                sx={{
                    color: "primary.main",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                }}
            >
                {children}
            </Typography>
        </Stack>
    );
}

export default SectionLabel;
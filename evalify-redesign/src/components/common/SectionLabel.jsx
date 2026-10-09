
import { Box, Stack, Typography } from "@mui/material";

function SectionLabel({ children }) {
    return (
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
                    backgroundColor: "secondary.main",
                    transform: "translateY(8px)",
                }}
            />

            <Typography
                sx={{
                    color: "secondary.dark",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                }}
            >
                {children}
            </Typography>
        </Stack>
    );
}

export default SectionLabel;

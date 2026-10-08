import { Box, Typography } from "@mui/material";

function StatItem({ value, label }) {
    return (
        <Box
            sx={{
                borderLeft: {
                    sm: "1px solid #DDD6E8",
                },
                padding: "0 30px",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
            }}
        >
            <Typography
                sx={{
                    fontSize: "2rem",
                    fontFamily: "Georgia, serif",
                    color: "primary.main",
                    lineHeight: 1,
                }}
            >
                {value}
            </Typography>

            <Typography
                sx={{
                    fontSize: "0.80rem",
                    color: "text.muted",
                    whiteSpace: "nowrap",
                }}
            >
                {label}
            </Typography>
        </Box>
    );
}

export default StatItem;
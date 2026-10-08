import { Paper, Stack, Typography } from "@mui/material";
import FeatureIcon from "./FeatureIcon";
import SmallChip from "./SmallChip";

function FeatureCard({
    title,
    description,
    backgroundColor,
    borderColor,
    icon,
    chips = [],
    lightIcon = false,
}) {
    return (
        <Paper
            elevation={0}
            sx={{
                backgroundColor,
                border: `1px solid ${borderColor}`,
                borderRadius: "12px",
                p: 3,
                minHeight: 220,
            }}
        >
            <FeatureIcon light={lightIcon}>
                {icon}
            </FeatureIcon>

            <Typography
                sx={{
                    mt: 2,
                    color: "#25233E",
                    fontSize: "1rem",
                    fontWeight: 700,
                }}
            >
                {title}
            </Typography>

            <Typography
                sx={{
                    mt: 1,
                    color: "#6B6980",
                    fontSize: "0.75rem",
                    lineHeight: 1.6,
                    maxWidth: 400,
                }}
            >
                {description}
            </Typography>

            {chips.length > 0 && (
                <Stack
                    direction="row"
                    spacing={0.8}
                    flexWrap="wrap"
                    sx={{ mt: 2 }}
                >
                    {chips.map((chip) => (
                        <SmallChip
                            key={chip}
                            label={chip}
                        />
                    ))}
                </Stack>
            )}
        </Paper>
    );
}

export default FeatureCard;
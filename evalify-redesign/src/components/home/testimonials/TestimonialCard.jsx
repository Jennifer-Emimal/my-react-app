import {
    Box,
    Paper,
    Stack,
    Typography,
    Avatar,
} from "@mui/material";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function TestimonialCard({
    text,
    name,
    role,
    initials,
    avatarColor,
}) {
    return (
        <Paper
            elevation={0}
            sx={{
                minHeight: {
                    xs: 300,
                    md: 220,
                },
                borderRadius: 3,
                border: "1px solid #E4E0EA",
                backgroundColor: "#FFFFFF",
                p: {
                    xs: 3,
                    md: 3.2,
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s ease",

                "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow:
                        "0 15px 35px rgba(65, 50, 120, 0.08)",
                },
            }}
        >
            <FormatQuoteIcon
                sx={{
                    color: "#9C83EA",
                    fontSize: 28,
                }}
            />

            <Typography
                sx={{
                    color: "#171737",
                    fontFamily:
                        "Georgia, 'Times New Roman', serif",
                    fontSize: {
                        xs: "1.25rem",
                        md: "1.35rem",
                    },
                    lineHeight: 1.25,
                    mt: 2,
                    mb: 3,
                }}
            >
                {text}
            </Typography>

            <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
            >
                <Avatar
                    sx={{
                        width: 30,
                        height: 30,
                        fontSize: "0.6rem",
                        backgroundColor: avatarColor,
                        color: "#55506B",
                    }}
                >
                    {initials}
                </Avatar>

                <Box>
                    <Typography
                        sx={{
                            color: "#252542",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                        }}
                    >
                        {name}
                    </Typography>

                    <Typography
                        sx={{
                            color: "#85839A",
                            fontSize: "0.6rem",
                            mt: 0.2,
                        }}
                    >
                        {role}
                    </Typography>
                </Box>
            </Stack>
        </Paper>
    );
}

export default TestimonialCard;
import { Box, Stack, Typography } from "@mui/material";

function ProviderRow({ name, keyText }) {
    return (
        <Box
            sx={{
                border: "1px solid #E2DED5",
                borderRadius: "8px",
                p: 2,
            }}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Stack
                    direction="row"
                    spacing={1.2}
                    alignItems="center"
                >
                    <Box
                        sx={{
                            width: 28,
                            height: 28,
                            border: "1px solid #E2DED5",
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            color: "#55516A",
                        }}
                    >
                        {name === "OpenAI" ? "O" : "A"}
                    </Box>

                    <Typography
                        sx={{
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            color: "#343149",
                        }}
                    >
                        {name}
                    </Typography>
                </Stack>

                <Typography
                    sx={{
                        fontSize: "0.6rem",
                        color: "#78A27F",
                        fontWeight: 600,
                    }}
                >
                    Connected
                </Typography>
            </Stack>

            <Box
                sx={{
                    mt: 1.5,
                    px: 1.5,
                    py: 1,
                    backgroundColor: "#F7F6F1",
                    borderRadius: "6px",
                    color: "#77738D",
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                }}
            >
                {keyText}
            </Box>
        </Box>
    );
}

export default ProviderRow;
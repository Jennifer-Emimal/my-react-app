
import { Box, Stack, Typography } from "@mui/material";

function SectionLabel({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mb: 2,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ width: "fit-content" }}
      >
        <Box
          sx={{
            width: 18,
            height: "1px",
            backgroundColor: "secondary.main",
            flexShrink: 0,
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
    </Box>
  );
}

export default SectionLabel;

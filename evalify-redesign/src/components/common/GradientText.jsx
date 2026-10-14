
import { Box } from "@mui/material";

function GradientText({ children, sx = {} }) {
  return (
    <Box
      component="span"
      sx={{
        background: (theme) => theme.gradients.PurpleBlue,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default GradientText;

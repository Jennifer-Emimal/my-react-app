import { Box, Stack, Typography } from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

function BrandLogo() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.8}
      sx={{ flexShrink: 0 }}
    >
      <Box
        className="grid-center"
        sx={{
          width: 27,
          height: 27,
          borderRadius: "7px",
          background: (theme) => theme.gradients.PurpleBlue,
          boxShadow: (theme) => theme.customShadows.button,
        }}
      >
        <AutoAwesomeRoundedIcon
          sx={{
            fontSize: 17,
            color: "primary.contrastText",
          }}
        />
      </Box>

      <Typography
        sx={{
          color: "text.primary",
          fontSize: "1.1rem",
          fontWeight: 800,
          letterSpacing: "-0.04em",
        }}
      >
        Evalify
      </Typography>
    </Stack>
  );
}

export default BrandLogo;

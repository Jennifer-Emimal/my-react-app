import { Box } from "@mui/material";

function FeatureIcon({ children, light = false }) {
    return (
        <Box
            sx={{
                width: 35,
                height: 35,
                borderRadius: "7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: light
                    ? "#F0EAFE"
                    : "primary.main",
                color: light
                    ? "primary.main"
                    : "#FFFFFF",
            }}
        >
            {children}
        </Box>
    );
}

export default FeatureIcon;
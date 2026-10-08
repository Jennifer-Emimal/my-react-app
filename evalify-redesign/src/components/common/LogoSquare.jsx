import { Box } from "@mui/material";

function LogoSquare({ color }) {
    return (
        <Box
            sx={{
                width: 12,
                height: 12,
                backgroundColor: color,
                borderRadius: "4px",
            }}
        />
    );
}

export default LogoSquare;
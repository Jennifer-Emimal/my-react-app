import { Chip } from "@mui/material";

function SmallChip({ label }) {
    return (
        <Chip
            label={label}
            size="small"
            sx={{
                height: "24px",
                borderRadius: "5px",
                backgroundColor: "rgba(255,255,255,0.55)",
                border: "1px solid #DDD7EA",
                color: "#6F6A7D",
                fontSize: "0.58rem",

                "& .MuiChip-label": {
                    px: 0.9,
                },
            }}
        />
    );
}

export default SmallChip;
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function ActionButton({ href, children }) {
    return (
        <Button
            component="a"
            href={href}
            endIcon={<ArrowForwardIcon />}
            sx={{
                backgroundColor: "#FFFFFF",
                color: "#171717",

                border: "1px solid #D8D8D8",
                borderRadius: "999px",

                minHeight: "40px",
                padding: "0 20px",

                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "none",

                boxShadow:
                    "0 8px 20px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255,255,255,0.9)",

                transition: "all 0.25s ease",

                "& .MuiButton-endIcon": {
                    marginLeft: "10px",
                    transition: "transform 0.25s ease",
                },

                "&:hover": {
                    backgroundColor: "#FFFFFF",
                    color: "#000000",
                    transform: "translateY(-3px)",
                    boxShadow:
                        "0 14px 30px rgba(0, 0, 0, 0.12)",
                },

                "&:hover .MuiButton-endIcon": {
                    transform: "translateX(4px)",
                },
            }}
        >
            {children}
        </Button>
    );
}

export default ActionButton;
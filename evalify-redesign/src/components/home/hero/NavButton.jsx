import { Button } from "@mui/material";

function NavButton({ href, children }) {
    return (
        <Button
            component="a"
            href={href}
            sx={{
                color: "text.nav",
                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "none",
                minWidth: "auto",

                "&:hover": {
                    color: "accent.purple",
                    backgroundColor: "transparent",
                },
            }}
        >
            {children}
        </Button>
    );
}

export default NavButton;
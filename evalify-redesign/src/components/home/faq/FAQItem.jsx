import { Box, Collapse, IconButton, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function FAQItem({ question, answer, isOpen, onToggle, isLast }) {
    return (
        <Box
            sx={{
                borderTop: "1px solid #DDD9E3",
                ...(isLast && {
                    borderBottom: "1px solid #DDD9E3",
                }),
            }}
        >
            {/* QUESTION */}
            <Box
                component="button"
                onClick={onToggle}
                sx={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    py: 2.3,
                    px: 0,

                    "&:hover": {
                        color: "primary.main",
                    },
                }}
            >
                <Typography
                    sx={{
                        color: "#20203D",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                    }}
                >
                    {question}
                </Typography>

                <IconButton
                    disableRipple
                    sx={{
                        color: "primary.main",
                        p: 0.5,
                    }}
                >
                    {isOpen ? (
                        <RemoveIcon fontSize="small" />
                    ) : (
                        <AddIcon fontSize="small" />
                    )}
                </IconButton>
            </Box>

            {/* ANSWER */}
            <Collapse in={isOpen}>
                <Typography
                    sx={{
                        color: "text.secondary",
                        fontSize: "0.82rem",
                        lineHeight: 1.7,
                        maxWidth: 650,
                        pb: 2.5,
                        pr: 4,
                    }}
                >
                    {answer}
                </Typography>
            </Collapse>
        </Box>
    );
}

export default FAQItem;
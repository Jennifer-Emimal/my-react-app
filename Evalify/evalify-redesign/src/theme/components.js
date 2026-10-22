const components = {
    MuiContainer: {
        styleOverrides: {
            root: ({ theme }) => ({
                // Reduce horizontal padding on large screens so content
                // fills more of the available viewport width.
                [theme.breakpoints.up("lg")]: {
                    paddingLeft: "40px",
                    paddingRight: "40px",
                },
                [theme.breakpoints.up("xl")]: {
                    paddingLeft: "48px",
                    paddingRight: "48px",
                },
            }),
            // Extend the lg max-width to align with the wider lg breakpoint
            maxWidthLg: ({ theme }) => ({
                [theme.breakpoints.up("lg")]: {
                    maxWidth: "1400px",
                },
            }),
        },
    },

    MuiButton: {
        defaultProps: {
            disableElevation: true,
        },

        styleOverrides: {
            root: {
                borderRadius: "24px",
                padding: "9px 16px",
                minHeight: 38,
                fontFamily: '"Inter", sans-serif',
                // Raised from 0.75rem — keeps buttons readable without
                // breaking the compact visual design.
                fontSize: "0.9rem",
                fontWeight: 700,
                lineHeight: 1.5,
                textTransform: "none",
                whiteSpace: "nowrap",
            },
        },

        variants: [
            // Navbar navigation buttons
            {
                props: { variant: "nav" },
                style: {
                    color: "text.primary",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    minWidth: "auto",
                    minHeight: "auto",
                    padding: "6px 4px",
                    backgroundColor: "transparent",

                    "&:hover": {
                        color: "#5135C7",
                        backgroundColor: "transparent",
                    },
                },
            },

            // Shared primary CTA button
            {
                props: { variant: "contained" },
                style: ({ theme }) => ({
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    boxShadow: theme.customShadows.button,

                    "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                    },

                    "&:disabled": {
                        backgroundColor:
                            theme.palette.action.disabledBackground,
                        color: theme.palette.action.disabled,
                    },
                }),
            },

            // Shared secondary button
            {
                props: { variant: "outlined" },
                style: ({ theme }) => ({
                    backgroundColor: "#FFFFFF",
                    color: theme.palette.text.primary,
                    borderColor: "transparent",
                    boxShadow: "none",

                    "&:hover": {
                        backgroundColor: "#FFFFFF",
                        borderColor: "transparent",
                        boxShadow: "none",
                    },
                }),
            },
        ],
    },

    MuiPaper: {
        defaultProps: {
            elevation: 0,
        },

        styleOverrides: {
            root: {
                borderRadius: "14px",
            },
        },
    },

    MuiCard: {
        defaultProps: {
            elevation: 0,
        },

        styleOverrides: {
            root: {
                borderRadius: "14px",
            },
        },
    },
};

export default components;

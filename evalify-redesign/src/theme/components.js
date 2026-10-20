const components = {
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
                fontSize: "0.75rem",
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
                    fontSize: "0.76rem",
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

const components = {
    MuiCssBaseline: {
        styleOverrides: {
            "*": {
                boxSizing: "border-box",
            },
            html: {
                scrollBehavior: "smooth",
            },
            body: {
                margin: 0,
                backgroundColor: "#F7F9FD",
            },
        },
    },

    MuiButton: {
        defaultProps: {
            disableElevation: true,
        },

        styleOverrides: {
            root: {
                borderRadius: "24px",
                padding: "9px 18px",
                fontWeight: 600,
                textTransform: "none",
            },
        },

        variants: [
            {
                props: { variant: "nav" },
                style: {
                    color: "text.primary",
                    fontSize: "0.76rem",
                    fontWeight: 600,
                    minWidth: "auto",
                    padding: "6px 4px",
                    backgroundColor: "transparent",

                    "&:hover": {
                        color: "#5135C7",
                        backgroundColor: "transparent",
                    },
                },
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

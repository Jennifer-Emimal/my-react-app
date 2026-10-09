
const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        margin: 0,
        backgroundColor: "#F7F9FD",
      },

      "*": {
        boxSizing: "border-box",
      },

      html: {
        scrollBehavior: "smooth",
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

import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import components from "./components";

const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components,

  shape: {
    borderRadius: 12,
  },

  gradients: {
    hero: "linear-gradient(115deg, #F8FAFF 0%, #EDF6FF 55%, #F9F7FF 100%)",
    PurpleBlue: "linear-gradient(100deg, #a200ff 0%, #0084ff 100%)",
    cta: "linear-gradient(110deg, #DDF4FF 0%, #E8E7FF 100%)",
  },

  customShadows: {
    card: "0 8px 28px rgba(39, 75, 120, 0.07)",
    button: "0 5px 15px rgba(7, 49, 58, 0.12)",
  },
});

export default theme;

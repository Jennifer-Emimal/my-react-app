
import { createTheme } from "@mui/material/styles";

import palette from "./core/palette";
import typography from "./core/typography";
import breakpoints from "./core/breakpoints";
import components from "./core/components";

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
    tealBlue: "linear-gradient(100deg, #20BFA5 0%, #579FE4 100%)",
    bluePurple: "linear-gradient(110deg, #BDEEFF 0%, #D9D2FF 100%)",
    cta: "linear-gradient(110deg, #DDF4FF 0%, #E8E7FF 100%)",
  },

  customShadows: {
    card: "0 8px 28px rgba(39, 75, 120, 0.07)",
    floating: "0 18px 50px rgba(51, 91, 145, 0.14)",
    button: "0 5px 15px rgba(7, 49, 58, 0.12)",
  },
});

export default theme;

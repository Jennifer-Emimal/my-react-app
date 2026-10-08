import { createTheme } from "@mui/material/styles";

import palette from "./core/palette";
import typography from "./core/typography";
import breakpoints from "./core/breakpoints";

const theme = createTheme({
    palette,
    typography,
    breakpoints,
});

export default theme;
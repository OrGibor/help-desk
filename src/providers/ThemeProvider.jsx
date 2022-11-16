import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider
} from "@mui/material";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Assistant",
  }
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <CssBaseline />
        {children}
      </CacheProvider>
    </MuiThemeProvider>
  );
};

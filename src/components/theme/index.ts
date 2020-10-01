import { createMuiTheme } from "@material-ui/core/styles";

const primaryColor = "#21282D";
const secondaryColor = "#FFEDEA";
const thirdColor = "#FF816A";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export const mainTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 800, // redefine small breakpoints as 800px is size when we need to change from row to column <SectionWithImage>
      md: 1000,
      lg: 1200,
      xl: 1400,
    },
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "40px",
        color: primaryColor,
        fontFamily: "'Lato', sans-serif",
        letterSpacing: "-2px",
        fontWeight: 900,
      },
      h2: {
        fontSize: "16px",
        color: primaryColor,
        fontFamily: "'Lato', sans-serif",
        fontWeight: 900,
      },
      h3: {
        fontSize: "20px",
        color: thirdColor,
        fontFamily: "'Lato', sans-serif",
        fontWeight: 900,
      },
      h4: {
        fontSize: "16px",
        color: "white",
        fontFamily: "'Lato', sans-serif",
      },
      h5: {
        fontSize: "20px",
        color: "white",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 900,
      },
      h6: {
        fontSize: "16px",
        color: "white",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 900,
      },
    },
    MuiDialog: {
      paper: {
        backgroundColor: primaryColor,
        padding: 20,
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: secondaryColor,
        borderRadius: 55,
        paddingRight: 20,
        height: 55,
      },
      input: {
        textAlign: "right",
        fontFamily: "Lato",
        fontStyle: "italic",
        paddingRight: 16,
      },
    },
  },
});

import { createMuiTheme } from "@material-ui/core/styles";

const primaryColor = "#21282D";
const secondaryColor = "#FFEDEA";
const thirdColor = "#FF816A";

export const lightTheme = createMuiTheme({
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

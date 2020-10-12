import { FunctionComponent } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { mainTheme } from "../../../theme/theme";
import { BrowserRouter } from "react-router-dom";
import * as React from "react";
import { AppRouter } from "../../router/AppRouter";

export const AppContainer: FunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

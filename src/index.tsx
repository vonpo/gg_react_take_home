import * as React from "react";
import * as ReactDOM from "react-dom";
import { FunctionComponent } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme } from "./components/theme";
import { BrowserRouter } from "react-router-dom";
import { AppLayoutContainer } from "./components/app";

const element = document.createElement("div");

document.body.appendChild(element);

const App: FunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <CssBaseline />
          <AppLayoutContainer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, element);

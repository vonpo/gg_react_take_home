import * as React from "react";
import * as ReactDOM from "react-dom";
import { FunctionComponent } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { mainTheme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";

const element = document.createElement("div");

document.body.appendChild(element);

const App: FunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <CssBaseline />
          <AppLayout />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, element);

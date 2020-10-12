import { FunctionComponent } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { mainTheme } from "../../../theme/theme";
import { BrowserRouter } from "react-router-dom";
import * as React from "react";
import { AppLayout } from "../../layout/AppLayout";
import { GiphyGalleryRoute } from "../../router/GiphyGalleryRoute";
import { FavouriteGalleryRoute } from "../../router/FavouriteGalleryRoute";

/**
 * App container.
 *
 * @constructor
 */
export const AppView: FunctionComponent = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <AppLayout>
          <GiphyGalleryRoute />
          <FavouriteGalleryRoute />
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SearchContextProvider } from "../../contexts/search";
import { getSearchParams } from "../../utils/search";
import { NotificationContextProvider } from "../../contexts/notification";
import { AppLayout } from "../layout/AppLayout";
import { NotificationContainer } from "../common/Notification/NotificationContainer";
import { GiphyGalleryRoute } from "./GiphyGalleryRoute";
import { FavouriteGalleryRoute } from "./FavouriteGalleryRoute";

export const AppRouter: FunctionComponent = () => {
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <SearchContextProvider
        searchQuery={getSearchParams(location.search, "search")}
      >
        <NotificationContextProvider>
          <AppLayout>
            <GiphyGalleryRoute />
            <FavouriteGalleryRoute />
            <NotificationContainer />
          </AppLayout>
        </NotificationContextProvider>
      </SearchContextProvider>
    </>
  );
};

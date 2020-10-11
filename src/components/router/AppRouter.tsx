import { FunctionComponent } from "react";
import { Route } from "react-router-dom";
import * as React from "react";
import { FavouriteGallery } from "../views/Favourite";
import { GiphyGallery } from "../views/GipyGallery";

export const AppRouter: FunctionComponent = () => {
  return (
    <>
      <Route path="/" component={GiphyGallery} exact />
      <Route path="/favourite" component={FavouriteGallery} />
    </>
  );
};

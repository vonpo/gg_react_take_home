import { Route } from "react-router-dom";
import { FavouriteGallery } from "../views/Favourite";
import * as React from "react";
import { FunctionComponent } from "react";

export const FavouriteGalleryRoute: FunctionComponent = () => (
  <Route path="/favourite" component={FavouriteGallery} />
);

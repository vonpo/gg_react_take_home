import { FunctionComponent } from "react";
import { GiphyGallery } from "../views/GiphyGallery";
import { Route } from "react-router-dom";
import * as React from "react";

export const GiphyGalleryRoute: FunctionComponent = () => (
  <Route path="/" component={GiphyGallery} exact />
);

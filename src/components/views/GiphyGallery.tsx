import { FunctionComponent } from "react";
import { FavouriteContextProvider } from "../../contexts/favourite";
import { LocalStorage } from "../../utils/storage";

import * as React from "react";
import { GiphyGalleryContainer } from "../common/GiphyGallery/GiphyGalleryContainer";

export const GiphyGallery: FunctionComponent = () => {
  return (
    <FavouriteContextProvider storage={LocalStorage}>
      <GiphyGalleryContainer />
    </FavouriteContextProvider>
  );
};

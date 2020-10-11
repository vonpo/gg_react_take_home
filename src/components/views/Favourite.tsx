import { FunctionComponent } from "react";
import { FavouriteContextProvider } from "../../contexts/favourite";
import { LocalStorage } from "../../utils/storage";
import * as React from "react";
import { FavouriteGalleryContainer } from "../common/FavouriteGalleryContainer";

export const FavouriteGallery: FunctionComponent = () => {
  return (
    <FavouriteContextProvider storage={LocalStorage}>
      <FavouriteGalleryContainer />
    </FavouriteContextProvider>
  );
};

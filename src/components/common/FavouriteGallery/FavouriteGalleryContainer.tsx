/**
 * Local image gallery container this gallery doesn't use remote resource but it uses storage to load elements.
 *
 * @constructor
 */
import { FunctionComponent } from "react";
import { IImage } from "../../../interfaces/image";
import * as React from "react";
import { useFavouriteContext } from "../../../contexts/favourite";
import { FavouriteGalleryView } from "./FavouriteGalleryView";

export const FavouriteGalleryContainer: FunctionComponent = () => {
  const { state } = useFavouriteContext();
  // Display lastly added items as first in fav gallery.
  const images = Array.from(state.favourites.values())
    .map((item: { meta: IImage }) => item.meta)
    .reverse();

  return <FavouriteGalleryView images={images} />;
};

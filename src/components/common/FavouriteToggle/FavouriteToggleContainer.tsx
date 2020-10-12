import * as React from "react";
import { FunctionComponent } from "react";
import { useFavouriteContext } from "../../../contexts/favourite";
import { FavouriteToggleView } from "./FavouriteToggleView";

/**
 * Container component that holds toggle logic.
 *
 * @param {string} id
 * @param {object} meta
 * @constructor
 */
export const FavouriteToggleContainer: FunctionComponent<{
  id: string;
  meta: object;
}> = ({ id, meta }) => {
  const { addAction, removeAction, state } = useFavouriteContext();
  const isFavourite = state.favourites.has(id);

  const onClick = () => {
    if (isFavourite) {
      removeAction(id);
    } else {
      addAction(id, meta);
    }
  };

  return <FavouriteToggleView onClick={onClick} isFavourite={isFavourite} />;
};

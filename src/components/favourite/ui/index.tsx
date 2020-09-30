import * as React from "react";
import { FunctionComponent } from "react";
import { useFavouriteContext } from "../hooks";

const FavouriteToggle: FunctionComponent<{
  onClick: () => void;
  isFavourite: boolean;
}> = ({ onClick, isFavourite }) => {
  if (isFavourite) {
    return <button onClick={onClick}>fav</button>;
  }

  return <button onClick={onClick}>not fav</button>;
};

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
  const { add, remove, state } = useFavouriteContext();
  const isFavourite = state.favourites.has(id);

  const onClick = () => {
    if (isFavourite) {
      remove(id);
    } else {
      add(id, meta);
    }
  };

  return <FavouriteToggle onClick={onClick} isFavourite={isFavourite} />;
};

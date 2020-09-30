import * as React from "react";
import { FunctionComponent } from "react";
import { useFavouriteContext } from "../hooks";
import { IconButton } from "@material-ui/core";
import { FavIcon } from "../assets";

const FAV_IMAGE_WIDTH = 30;
const FAV_IMAGE_HEIGHT = 30;

const FavouriteToggle: FunctionComponent<{
  onClick: () => void;
  isFavourite: boolean;
}> = ({ onClick, isFavourite }) => {
  return (
    <IconButton
      onClick={onClick}
      title={isFavourite ? "Unset favourite" : "Set favourite"}
    >
      <FavIcon
        empty={!isFavourite}
        height={FAV_IMAGE_HEIGHT}
        width={FAV_IMAGE_WIDTH}
      />
    </IconButton>
  );
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

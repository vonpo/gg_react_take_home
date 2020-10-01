import * as React from "react";
import { FunctionComponent } from "react";
import { useFavouriteContext } from "../hooks";
import { IconButton } from "@material-ui/core";
import { FavIcon } from "../assets";
import Tooltip from "@material-ui/core/Tooltip";

const FAV_IMAGE_WIDTH = 30;
const FAV_IMAGE_HEIGHT = 30;

export const FavouriteToggle: FunctionComponent<{
  onClick: () => void;
  isFavourite: boolean;
}> = ({ onClick, isFavourite }) => {
  return (
    <Tooltip title={isFavourite ? "Unset favourite" : "Set favourite"}>
      <IconButton onClick={onClick}>
        <FavIcon
          isEmpty={!isFavourite}
          height={FAV_IMAGE_HEIGHT}
          width={FAV_IMAGE_WIDTH}
        />
      </IconButton>
    </Tooltip>
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
  const { addAction, removeAction, state } = useFavouriteContext();
  const isFavourite = state.favourites.has(id);

  const onClick = () => {
    if (isFavourite) {
      removeAction(id);
    } else {
      addAction(id, meta);
    }
  };

  return <FavouriteToggle onClick={onClick} isFavourite={isFavourite} />;
};

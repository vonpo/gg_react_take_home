import { FunctionComponent } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "@material-ui/core";
import { FavIcon } from "../../../icons/FavIcon";
import * as React from "react";

const FAV_IMAGE_WIDTH = 30;
const FAV_IMAGE_HEIGHT = 30;

export const FavouriteToggleView: FunctionComponent<{
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

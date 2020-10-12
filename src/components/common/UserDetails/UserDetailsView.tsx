import { FunctionComponent } from "react";
import * as React from "react";
import { IImage } from "../../../interfaces/image";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

/**
 * Display user details if image provides it.
 *
 * @param {IImage} image
 * @constructor
 */
export const UserDetailsView: FunctionComponent<{ image: IImage }> = ({
  image,
}) => {
  if (!image.user) {
    return null;
  }

  return (
    <>
      <Avatar src={image.user.avatarUrl} style={{ width: 143, height: 143 }} />
      <Typography variant="h5">{image.user.displayName}</Typography>
    </>
  );
};

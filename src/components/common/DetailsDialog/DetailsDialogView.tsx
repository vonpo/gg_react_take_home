import { FunctionComponent } from "react";
import { Dialog } from "@material-ui/core";
import * as React from "react";
import { IImage } from "../../../interfaces/image";
import { ImageView } from "../Image/ImageView";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { CopyLinkContainer } from "../CopyLink/CopyLinkContainer";
import { FavouriteToggleContainer } from "../FavouriteToggle/FavouriteToggleContainer";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { UserDetailsView } from "../UserDetails/UserDetailsView";
import { useDetailsDialogStyles } from "./DetailsDialog.styles";

/**
 * Display image details.
 *
 * @param {boolean} isOpen
 * @param {IImage} image
 * @param {function} handleClose
 * @constructor
 */
export const DetailsDialogView: FunctionComponent<{
  isOpen: boolean;
  image: IImage;
  handleClose: () => void;
}> = ({ isOpen, image, handleClose }) => {
  const styles = useDetailsDialogStyles();

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth>
      <Grid container direction="row" justify="flex-end">
        <IconButton onClick={handleClose} color="secondary">
          <CloseIcon />
        </IconButton>
      </Grid>
      <Grid container direction="row">
        <Grid
          container
          direction="column"
          xs={12}
          md={4}
          item
          alignItems="center"
          className={styles.userDetails}
        >
          <UserDetailsView image={image} />
          <FavouriteToggleContainer id={image.id} meta={image} />
          <CopyLinkContainer text={image.url} />
        </Grid>
        <Grid
          container
          direction="column"
          xs={12}
          md={8}
          item
          alignItems="center"
          className={styles.imageContainer}
        >
          <Typography variant="h5" className={styles.title}>
            {image.title}
          </Typography>
          <ImageView image={image} thumbnail={false} />
          <InputBase
            value={image.url}
            disabled={true}
            className={styles.link}
          />
        </Grid>
      </Grid>
    </Dialog>
  );
};

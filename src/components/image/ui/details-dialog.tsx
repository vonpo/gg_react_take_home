import { FunctionComponent } from "react";
import { Dialog } from "@material-ui/core";
import * as React from "react";
import { IImage } from "../interfaces";
import { Image } from "../";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import InputBase from "@material-ui/core/InputBase";
import { CopyLinkContainer } from "../../copyLink";
import { FavouriteToggleContainer } from "../../favourite";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

/**
 * Display user details if image provides it.
 *
 * @param {IImage} image
 * @constructor
 */
export const UserDetails: FunctionComponent<{ image: IImage }> = ({
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

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 15,
  },
  userDetails: {
    marginTop: 40,
  },
  link: {
    marginTop: 40,
    height: 40,
    width: "100%",
    "& input": {
      textAlign: "center",
    },
  },
  imageContainer: {
    "& img": {
      maxWidth: "100%",
    },
    "& span": {
      maxWidth: "100%",
    },
  },
}));

/**
 * Display image details.
 *
 * @param {boolean} isOpen
 * @param {IImage} image
 * @param {function} handleClose
 * @constructor
 */
export const DetailsDialog: FunctionComponent<{
  isOpen: boolean;
  image: IImage;
  handleClose: () => void;
}> = ({ isOpen, image, handleClose }) => {
  const styles = useStyles();

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
          <UserDetails image={image} />
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
          <Image image={image} thumbnail={false} />
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

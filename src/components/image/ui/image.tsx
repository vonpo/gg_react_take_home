import * as React from "react";
import { FunctionComponent, useState } from "react";
import { IImage } from "../interfaces";
import Skeleton from "@material-ui/lab/Skeleton";
import { FavouriteToggleContainer } from "../../favourite";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { CopyLinkContainer } from "../../copyLink";
import { ButtonBase } from "@material-ui/core";
import { DetailsDialog } from "./details-dialog";

const useStyles = makeStyles({
  imageContainer: {
    maxWidth: "calc(100vw - 20px)",
  },
});

/**
 * Display image/gif.
 *
 * This component uses Skeleton element which is displayed before image is loaded.
 *
 * Alternatively we could listen image.load event and re-render component when images is loaded.
 *
 * To prevent displaying large images(gifs) use `thumbnail` flag which render image.small property.
 *
 * @param {IImage} gif
 * @param {boolean} thumbnail
 *
 * @constructor
 */
export const Image: FunctionComponent<{
  image: IImage;
  thumbnail: boolean;
}> = ({ image, thumbnail }) => {
  const displayImage = thumbnail ? image.images.small : image.images.main;
  const styles = useStyles();

  return (
    <div style={{ position: "relative" }}>
      <Skeleton
        variant="rect"
        className={styles.imageContainer}
        style={{
          position: "absolute",
          width: displayImage.width + "px",
          height: displayImage.height + "px",
        }}
      />
      <img
        className={styles.imageContainer}
        src={displayImage.url}
        style={{
          width: displayImage.width + "px",
          height: displayImage.height + "px",
        }}
      />
    </div>
  );
};

const useFavImagesStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
  optionsContainer: {
    position: "absolute",
    zIndex: 1,
    right: 10,
    top: 10,
  },
}));

/**
 * Display image and image options:
 *
 * - favourite
 * - copy link
 * - on hover display popup with options (won't work on touch devices but we have see same options
 *  after we click and open details popup)
 *
 * @param {IImage} image
 * @constructor
 */
export const ImageWithOptions: FunctionComponent<{ image: IImage }> = ({
  image,
}) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [areDetailsShown, setAreDetailsShown] = useState<boolean>(false);
  const styles = useFavImagesStyles();

  return (
    <div
      className={styles.root}
      onMouseEnter={() => !areDetailsShown && setIsShown(true)}
      onMouseLeave={() => !areDetailsShown && setIsShown(false)}
    >
      {isShown && (
        <div className={styles.optionsContainer}>
          <CopyLinkContainer text={image.url} />
          <FavouriteToggleContainer id={image.id} meta={image} />
        </div>
      )}

      <DetailsDialog
        isOpen={areDetailsShown}
        image={image}
        handleClose={() => setAreDetailsShown(false)}
      />
      <ButtonBase onClick={() => setAreDetailsShown(true)}>
        <Image image={image} thumbnail={true} />
      </ButtonBase>
    </div>
  );
};

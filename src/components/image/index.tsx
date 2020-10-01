import * as React from "react";
import { FunctionComponent, useState } from "react";
import { IImage } from "../resource/interfaces";
import Skeleton from "@material-ui/lab/Skeleton";
import { FavouriteToggleContainer } from "../favourite/ui";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { CopyLinkContainer } from "../copyLink";
import { ButtonBase } from "@material-ui/core";
import { DetailsDialog } from "./details-dialog";

/**
 * Display image/gif.
 *
 * This component uses Skeleton element which is displayed before image is loaded.
 *
 * Alternatively we could listen image.load event and re-render component when images is loaded.
 *
 *
 * @param {IImage} gif
 *
 * @constructor
 */
export const Image: FunctionComponent<{ image: IImage }> = ({ image }) => {
  const displayImage = image.images.main;

  return (
    <div style={{ position: "relative" }}>
      <Skeleton
        variant="rect"
        style={{
          position: "absolute",
          width: displayImage.width + "px",
          height: displayImage.height + "px",
        }}
      />
      <img
        src={displayImage.url}
        width={displayImage.width}
        height={displayImage.height}
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
        <Image image={image} />
      </ButtonBase>
    </div>
  );
};

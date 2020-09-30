import * as React from "react";
import { FunctionComponent, useState } from "react";
import { IGif, IImage } from "../resource/interfaces";
import Skeleton from "@material-ui/lab/Skeleton";
import { FavouriteToggleContainer } from "../favourite/ui";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { CopyLinkContainer } from "../copyLink";
import { ButtonBase } from "@material-ui/core";

/**
 * Display image/gif.
 *
 * This component uses Skeleton element which is displayed before image is loaded.
 *
 * Alternatively we could listen image.load event and re-render component when images is loaded.
 *
 *
 * @param {IGif} gif
 *
 * @constructor
 */
export const Image: FunctionComponent<{ image: IImage }> = ({ image }) => {
  return (
    <div style={{ position: "relative" }}>
      <Skeleton
        variant="rect"
        style={{
          position: "absolute",
          width: image.images.fixed_height.width + "px",
          height: image.images.fixed_height.height + "px",
        }}
      />
      <img
        src={image.images.fixed_height.url}
        width={image.images.fixed_height.width}
        height={image.images.fixed_height.height}
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
 * - favourite
 * - copy link
 *
 * @param {IImage} image
 * @constructor
 */
export const ImageWithOptions: FunctionComponent<{ image: IImage }> = ({
  image,
}) => {
  const [isShown, setIsShown] = useState<Boolean>(false);
  const styles = useFavImagesStyles();

  return (
    <div
      className={styles.root}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown && (
        <div className={styles.optionsContainer}>
          <CopyLinkContainer text={image.url} />
          <FavouriteToggleContainer id={image.id} meta={image} />
        </div>
      )}

      <ButtonBase>
        <Image image={image} />
      </ButtonBase>
    </div>
  );
};

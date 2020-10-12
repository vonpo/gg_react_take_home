import * as React from "react";
import { FunctionComponent } from "react";
import { IImage } from "../../../interfaces/image";
import Skeleton from "@material-ui/lab/Skeleton";
import { useImageStyles } from "./Image.styles";

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
export const ImageView: FunctionComponent<{
  image: IImage;
  thumbnail: boolean;
}> = ({ image, thumbnail }) => {
  const displayImage = thumbnail ? image.images.small : image.images.main;
  const styles = useImageStyles();

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

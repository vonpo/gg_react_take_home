import { FunctionComponent } from "react";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { IImage } from "../resource/interfaces";

/**
 * Image grid display image components.
 * It uses css flex. Rows are wrapped and space is but between them.
 *
 * @param {IImage[]} images
 * @param {FunctionComponent} ImageView
 *
 * @constructor
 */
export const ImageGrid: FunctionComponent<{
  images: IImage[];
  ImageView: FunctionComponent<{ image: IImage }>;
}> = ({ images, ImageView }) => {
  return (
    <Grid container justify="space-between" direction="row">
      {images.map((image) => (
        <ImageView image={image} key={image.id} />
      ))}
    </Grid>
  );
};

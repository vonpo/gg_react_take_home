import { FunctionComponent } from "react";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { IImage } from "../resource/interfaces";

export const ImageGrid: FunctionComponent<{
  images: IImage[];
  ImageView: FunctionComponent<{ image: IImage }>;
}> = ({ images, ImageView }) => {
  return (
    <Grid container justify="space-around">
      {images.map((image) => (
        <ImageView image={image} key={image.id} />
      ))}
    </Grid>
  );
};

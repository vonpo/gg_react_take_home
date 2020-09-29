import { FunctionComponent } from "react";
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { IImage } from "../resource/interfaces";
import { Gif } from "../image";

export const GifGrid: FunctionComponent<{ gifs: IImage[] }> = ({ gifs }) => {
  return (
    <Grid container justify="space-around">
      {gifs.map((image) => (
        <Gif image={image} key={image.id} />
      ))}
    </Grid>
  );
};

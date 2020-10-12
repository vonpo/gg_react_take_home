import { FunctionComponent } from "react";
import { IImage } from "../../../interfaces/image";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { ImageGridContainer } from "../ImageGrid/ImageGridContainer";
import { ImageWithOptionsView } from "../Image/ImageWithOptionsView";
import * as React from "react";
import { useFavouriteGalleryStyles } from "./FavouriteGallery.styles";

export const FavouriteGalleryView: FunctionComponent<{ images: IImage[] }> = ({
  images,
}) => {
  const styles = useFavouriteGalleryStyles();

  return (
    <Grid container direction="column">
      <Grid className={styles.header}>
        <Typography variant="h3">FAVOURITES</Typography>
        <Typography variant="h4">{images.length} GIF(s)</Typography>
      </Grid>
      <ImageGridContainer images={images} ImageView={ImageWithOptionsView} />
    </Grid>
  );
};

import makeStyles from "@material-ui/core/styles/makeStyles";
import { FunctionComponent } from "react";
import { IImage } from "../../interfaces/image";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { ImageGridContainer } from "./ImageGridContainer";
import { ImageWithOptionsView } from "./ImageWithOptionsView";
import * as React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: 84,
    marginBottom: 40,
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 60,
    },
  },
}));

export const FavouriteGalleryView: FunctionComponent<{ images: IImage[] }> = ({
  images,
}) => {
  const styles = useStyles();

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

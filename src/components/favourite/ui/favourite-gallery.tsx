/**
 * Local image gallery container this gallery doesn't use remote resource but it uses storage to load elements.
 *
 * @constructor
 */
import { FunctionComponent } from "react";
import { useFavourites, FavouriteContext, useFavouriteContext } from "../hooks";
import { IImage } from "../../image/interfaces";
import * as React from "react";
import { ImageWithOptions } from "../../image";
import { LocalStorage } from "../../storage";
import { ImageGrid } from "../../grid";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  header: {
    marginTop: 84,
    marginBottom: 40,
  },
});
const FavouriteGallery: FunctionComponent = () => {
  const { state } = useFavouriteContext();

  // Display lastly added items as first in fav gallery.
  const images = Array.from(state.favourites.values())
    .map((item: { meta: IImage }) => item.meta)
    .reverse();
  const styles = useStyles();

  return (
    <Grid container direction="column">
      <Grid className={styles.header}>
        <Typography variant="h3">FAVOURITES</Typography>
        <Typography variant="h4">{images.length} GIF(s)</Typography>
      </Grid>
      <ImageGrid images={images} ImageView={ImageWithOptions} />
    </Grid>
  );
};

export const FavouriteGalleryContainer: FunctionComponent = () => {
  const favouriteContext = useFavourites({ storage: LocalStorage });

  return (
    <FavouriteContext.Provider value={favouriteContext}>
      <FavouriteGallery />
    </FavouriteContext.Provider>
  );
};

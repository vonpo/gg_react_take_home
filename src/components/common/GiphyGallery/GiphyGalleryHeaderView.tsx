import { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import { TrendingIcon } from "../../../icons/Trending";
import { Typography } from "@material-ui/core";
import * as React from "react";
import { useGiphyGalleryStyles } from "./GiphyGallery.styles";

export const GalleryHeaderView: FunctionComponent<{
  displaySearchResults: boolean;
  found?: number;
}> = ({ displaySearchResults, found }) => {
  const styles = useGiphyGalleryStyles();

  return (
    <Grid
      container
      direction="row"
      className={styles.header}
      alignItems="center"
    >
      {!displaySearchResults && <TrendingIcon width={60} height={34} />}
      <Typography variant="h3" className={styles.label}>
        {displaySearchResults ? "FOUND" : "TRENDING"}
      </Typography>
      <Typography variant="h3" className={styles.label}>
        {displaySearchResults && found}
      </Typography>
    </Grid>
  );
};

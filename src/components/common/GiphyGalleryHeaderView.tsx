import makeStyles from "@material-ui/core/styles/makeStyles";
import { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import { TrendingIcon } from "../../icons/Trending";
import { Typography } from "@material-ui/core";
import * as React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: 84,
    marginBottom: 40,
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 60,
    },
  },
  label: {
    marginLeft: 10,
  },
}));

export const GalleryHeaderView: FunctionComponent<{
  displaySearchResults: boolean;
  found?: number;
}> = ({ displaySearchResults, found }) => {
  const styles = useStyles();

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

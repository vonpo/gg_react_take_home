import * as React from "react";

import { Grid } from "@material-ui/core";
import { LoadingIcon } from "../../../icons/Loading";
import Typography from "@material-ui/core/Typography";

/**
 * Loading view.
 *
 * @constructor
 */
export const InifiteScrollResourceLoadingView = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <Typography variant="h5">Loading</Typography>
      <LoadingIcon width={134} height={11} />
    </Grid>
  );
};

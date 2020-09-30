import * as React from "react";
import { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import { SearchContainer } from "../search/ui";

export const AppHeader: FunctionComponent = () => {
  return (
    <Grid container direction="row">
      M-GLIPHY
      <SearchContainer />
    </Grid>
  );
};

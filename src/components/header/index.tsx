import * as React from "react";
import { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { SearchContainer } from "../search/ui";
import ButtonBase from "@material-ui/core/ButtonBase";
import { FavIcon } from "../favourite/assets";
import { Link } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles((theme) => ({
  search: {
    gridArea: "header",
    backgroundColor: "white",
    [theme.breakpoints.down("lg")]: {
      padding: "0 10px",
    },
  },
}));

export const Header: FunctionComponent = () => {
  const styles = useStyle();

  return (
    <>
      <Grid style={{ gridArea: "empty", backgroundColor: "white" }} />
      <Grid
        container
        direction="row"
        alignItems="center"
        className={styles.search}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h1" style={{ marginRight: 25 }}>
            M-GLIPHY
          </Typography>
        </Link>
        <SearchContainer />
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        style={{ gridArea: "fav", backgroundColor: "white" }}
      >
        <Link to="/favourite" style={{ textDecoration: "none" }}>
          <ButtonBase style={{ padding: 5, borderRadius: 15 }}>
            <FavIcon height={36} width={40} />
            <Typography variant="h2" style={{ marginLeft: 5 }}>
              Favourites
            </Typography>
          </ButtonBase>
        </Link>
      </Grid>
    </>
  );
};

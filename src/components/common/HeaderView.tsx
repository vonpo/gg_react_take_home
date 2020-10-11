import * as React from "react";
import { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { SearchContainer } from "./SearchContainer";
import ButtonBase from "@material-ui/core/ButtonBase";
import { FavIcon } from "../../icons/FavIcon";
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
  header: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 60,
    },
  },
  searchBox: {
    flex: 1,
  },
}));

export const HeaderView: FunctionComponent = () => {
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
        <Grid item className={styles.header}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h1" style={{ marginRight: 25 }}>
              M-GIPHY
            </Typography>
          </Link>
        </Grid>
        <Grid item className={styles.searchBox}>
          <SearchContainer />
        </Grid>
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

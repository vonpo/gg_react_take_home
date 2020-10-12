import * as React from "react";
import { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { SearchContainer } from "../Search/SearchContainer";
import ButtonBase from "@material-ui/core/ButtonBase";
import { FavIcon } from "../../../icons/FavIcon";
import { Link } from "react-router-dom";
import { useHeaderStyles } from "./Header.styles";

export const HeaderView: FunctionComponent = () => {
  const styles = useHeaderStyles();

  return (
    <>
      <Grid className={styles.emptyGridArea} />
      <Grid
        container
        direction="row"
        alignItems="center"
        className={styles.search}
      >
        <Grid item className={styles.header}>
          <Link to="/" className={styles.link}>
            <Typography variant="h1" className={styles.linkLabel}>
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
        className={styles.favGridArea}
      >
        <Link to="/favourite" className={styles.link}>
          <ButtonBase className={styles.favButton}>
            <FavIcon height={36} width={40} />
            <Typography variant="h2" className={styles.favButtonLabel}>
              Favourites
            </Typography>
          </ButtonBase>
        </Link>
      </Grid>
    </>
  );
};

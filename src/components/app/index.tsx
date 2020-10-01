import { FunctionComponent } from "react";
import { Header } from "../header";
import { Route, useLocation } from "react-router-dom";
import { GiphyGalleryContainer } from "../giphy";
import { FavouriteGalleryContainer } from "../favourite/ui/favourite-gallery";
import * as React from "react";
import { SearchContext, useSearch } from "../search/hooks";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles((theme) => ({
  gallery: {
    gridArea: "gallery",
    backgroundColor: "#21282D",
    paddingBottom: 60,
    [theme.breakpoints.down("lg")]: {
      padding: "0 10px",
      borderRadius: 25,
    },
  },
  left: {
    gridArea: "left",
    backgroundColor: "#21282D",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  right: {
    gridArea: "right",
    backgroundColor: "#21282D",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  root: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "auto 1200px auto",
    gridTemplateRows: "78px auto",
    gridTemplateAreas: '"empty header fav" "left gallery right"',
    // https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
    // disable overflow anchor as when loading elements it will jump to latest but we want to keep scroll position
    overflowAnchor: "none",
    test: console.info(theme.breakpoints),
    [theme.breakpoints.down("lg")]: {
      gridTemplateRows: "78px 50px auto",
      gridTemplateColumns: "1fr",
      gridTemplateAreas: '"header" "fav" "gallery"',
    },
  },
}));

const getSearchParams = (search: string, paramName: string): string => {
  return new URLSearchParams(search).get(paramName) || "";
};

/**
 * Create app layout grid with CSS Grid.
 *
 * App has 2 rows and 3 columns layout
 *           - ---- -
 *           - ---- -
 * @constructor
 */
export const AppLayoutContainer: FunctionComponent = () => {
  const location = useLocation();
  const searchContext = useSearch({
    searchQuery: getSearchParams(location.search, "search"),
  });
  const styles = useStyle();

  return (
    <SearchContext.Provider value={searchContext}>
      <div className={styles.root}>
        <Header />
        <div className={styles.gallery}>
          <Route path="/" component={GiphyGalleryContainer} exact />
          <Route path="/favourite" component={FavouriteGalleryContainer} />
        </div>
        <div className={styles.left} />
        <div className={styles.right} />
      </div>
    </SearchContext.Provider>
  );
};

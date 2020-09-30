import { FunctionComponent } from "react";
import { Header } from "../header";
import { Route, useLocation } from "react-router-dom";
import { GiphyGalleryContainer } from "../giphy";
import { FavouriteGalleryContainer } from "../favourite/ui/favourite-gallery";
import * as React from "react";
import { SearchContext, useSearch } from "../search/hooks";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles(() => ({
  gallery: {
    gridArea: "gallery",
    backgroundColor: "#21282D",
  },
  left: {
    gridArea: "left",
    backgroundColor: "#21282D",
    borderTopLeftRadius: 25,
  },
  right: {
    gridArea: "right",
    backgroundColor: "#21282D",
    borderTopRightRadius: 25,
  },
  root: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "auto 1200px auto",
    gridTemplateRows: "78px auto",
    gridTemplateAreas: '"empty header fav" "left gallery right"',
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

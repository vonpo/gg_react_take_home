import { ISearchState } from "../search/hooks/types";
import { IGiphyApiResponse } from "../resource/interfaces";
import { FunctionComponent, useEffect, useState } from "react";
import { useSearchContext } from "../search/hooks";
import { FavouriteContext, useFavourites } from "../favourite/hooks";
import { LocalStorage } from "../storage";
import { Resource } from "../resource";
import { ImageGrid } from "../grid";
import { ImageWithOptions } from "../image";
import * as React from "react";
import { getGiphyQueryUrl } from "../../api/giphy";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { TrendingIcon } from "./assets";

/** Generate current and next resource url
 *
 * @param {ISearchState} state
 * @param {function} getResourceProviderUrl
 */
function generateResourceUrl(
  state: ISearchState,
  getResourceProviderUrl: (params: ISearchState) => string
) {
  return {
    url: getResourceProviderUrl({
      ...state,
      offset: 0,
    }),
    next: getResourceProviderUrl({
      ...state,
      offset: state.offset + state.limit,
    }),
  };
}

/**
 * Merge next data from GiphyApi response.
 * @param next
 * @param current
 */
function nextDataMerge(next: IGiphyApiResponse, current?: IGiphyApiResponse) {
  if (!current) {
    return next;
  }

  return {
    ...next,
    data: [...current.data, ...next.data],
  };
}

const useStyles = makeStyles({
  header: {
    marginTop: 84,
    marginBottom: 40,
  },
  label: {
    marginLeft: 10,
  },
});

const GalleryHeader: FunctionComponent<{
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

/**
 * This component connect gallery container and the view which is used to render image inside gallery.
 *
 * @constructor
 */
export const GiphyGalleryContainer: FunctionComponent = () => {
  const { state, offset, found } = useSearchContext();
  const favouriteContext = useFavourites({ storage: LocalStorage });
  const [resourceUrl, setResourceUrl] = useState<{ url: string; next: string }>(
    generateResourceUrl(state, getGiphyQueryUrl)
  );
  const onDataLoaded = (next: boolean, data: IGiphyApiResponse) => {
    if (next) {
      offset(state.limit + state.offset);
    }

    found(data.data.length);
  };

  useEffect(() => {
    setResourceUrl(generateResourceUrl(state, getGiphyQueryUrl));
  }, [state.query, state.limit, state.offset]);

  return (
    <FavouriteContext.Provider value={favouriteContext}>
      <GalleryHeader
        displaySearchResults={Boolean(state.query)}
        found={state.found}
      />
      <Resource
        url={resourceUrl.url}
        nextUrl={resourceUrl.next}
        render={(response: IGiphyApiResponse) => (
          <ImageGrid images={response.data} ImageView={ImageWithOptions} />
        )}
        nextDataMerge={nextDataMerge}
        onDataLoaded={onDataLoaded}
      />
    </FavouriteContext.Provider>
  );
};

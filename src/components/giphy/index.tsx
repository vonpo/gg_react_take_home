import { ISearchState } from "../search/hooks/types";
import { IImage } from "../image/interfaces";
import { FunctionComponent, useEffect, useState } from "react";
import { useSearchContext } from "../search/hooks";
import { FavouriteContext, useFavourites } from "../favourite/hooks";
import { LocalStorage } from "../storage";
import { InfiniteScrollResource } from "../resource";
import { ImageGrid } from "../grid";
import { ImageWithOptions } from "../image";
import * as React from "react";
import { getGiphyQueryUrl } from "../../api/giphy";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { TrendingIcon } from "./assets";
import { IGif, IGiphyApiResponse } from "../../api/giphy/interfaces";

/**
 * Generate current and next resource url
 *
 * @param {ISearchState} state
 * @param {function} getResourceProviderUrl
 *
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

/**
 * Map giphy response to Image.
 *
 * @param response
 */
function mapGiphyToImage(response: IGiphyApiResponse): IImage[] {
  return response.data.map((gif: IGif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.url,
    user: gif.user && {
      avatarUrl: gif.user.avatar_url,
      displayName: gif.user.display_name,
    },
    images: {
      main: {
        url: gif.images.fixed_height.url,
        height: gif.images.fixed_height.height,
        width: gif.images.fixed_height.width,
      },
    },
  }));
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
 * This component connects gallery container and the view which is used to render image inside gallery.
 *
 * @constructor
 */
export const GiphyGalleryContainer: FunctionComponent = () => {
  const {
    state,
    setOffsetAction,
    setFoundAction,
    setSearchAction,
  } = useSearchContext();
  const favouriteContext = useFavourites({ storage: LocalStorage });
  const [resourceUrl, setResourceUrl] = useState<{ url: string; next: string }>(
    generateResourceUrl(state, getGiphyQueryUrl)
  );
  const onDataLoaded = (response: IGiphyApiResponse) =>
    setFoundAction(response.data.length);
  const onNextDataLoaded = (_: IGiphyApiResponse) =>
    setOffsetAction(state.limit + state.offset);
  const canLoadMore = (apiResponse: IGiphyApiResponse) => {
    const { count, total_count, offset } = apiResponse.pagination;
    return count + offset < total_count;
  };

  useEffect(() => {
    setResourceUrl(generateResourceUrl(state, getGiphyQueryUrl));
  }, [state.query, state.limit, state.offset]);

  useEffect(() => {
    return () => {
      // restore search when gallery is unmounted
      setOffsetAction(0);
      setFoundAction(0);
      setSearchAction("");
    };
  }, []);

  return (
    <FavouriteContext.Provider value={favouriteContext}>
      <GalleryHeader
        displaySearchResults={Boolean(state.query)}
        found={state.found}
      />
      <InfiniteScrollResource
        url={resourceUrl.url}
        nextUrl={resourceUrl.next}
        render={(response: IGiphyApiResponse) => (
          <ImageGrid
            images={mapGiphyToImage(response)}
            ImageView={ImageWithOptions}
          />
        )}
        onCanLoadMore={canLoadMore}
        nextDataMerge={nextDataMerge}
        onDataLoaded={onDataLoaded}
        onNextDataLoaded={onNextDataLoaded}
      />
    </FavouriteContext.Provider>
  );
};

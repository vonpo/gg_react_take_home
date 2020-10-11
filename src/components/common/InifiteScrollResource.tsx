import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";
import { Grid } from "@material-ui/core";
import { LoadingIcon } from "../../icons/Loading";
import Typography from "@material-ui/core/Typography";
import { IInfiniteScrollResource } from "../../interfaces/resource";
import { getResource } from "../../utils/resource";

/**
 *
 * Component which interacts with remote resources.
 *
 * This component uses render props pattern @render function is used to render fetched data.
 *
 * - load resources and pass resource data to presentation component.
 * - when there is next url component can load it and with previous data.
 * - Handle infinite scroll. When scroll is close to bottom invoke fetch and get next data.
 *
 * @param {FunctionComponent} render
 * @param {string} url
 * @param {string} nextUrl
 * @param {function} nextDataMerge
 * @param {function} onDataLoaded
 * @param {function} onNextDataLoaded
 * @param {function} onCanLoadMore
 *
 * @constructor
 */
export const InifiteScrollResource = <T extends object>({
  render,
  url,
  nextUrl,
  nextDataMerge,
  onDataLoaded,
  onNextDataLoaded,
  onCanLoadMore,
}: IInfiniteScrollResource<T>) => {
  const [mergedRemoteData, setMergedRemoteData] = useState<T>();
  const [canLoadMore, setCanLoadMore] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const ref = useRef<any>();
  const shouldLoadMore = useOnScreen(ref);

  /**
   * Load more items and notify.
   */
  const loadMore = () => {
    if (isLoading || !canLoadMore) {
      return;
    }

    (async () => {
      setLoading(true);
      const response = await getResource(nextUrl);

      if (response) {
        const data = nextDataMerge(response.resource, mergedRemoteData);

        setMergedRemoteData(data);
        onNextDataLoaded(data);
        onDataLoaded && onDataLoaded(data);
        setLoading(false);
        setCanLoadMore(onCanLoadMore(response.resource));
      }
    })();
  };

  useEffect(() => {
    if (shouldLoadMore && mergedRemoteData) {
      loadMore();
    }
  }, [shouldLoadMore]);

  /**
   * On url change load resource again and overwrite current data.
   */
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getResource(url);

      if (response) {
        setMergedRemoteData(response.resource);
        onDataLoaded(response.resource);
        setCanLoadMore(onCanLoadMore(response.resource));
      }

      setLoading(false);
    })();
  }, [url]);

  return (
    <div>
      {mergedRemoteData && render(mergedRemoteData)}
      {isLoading && (
        <Grid container direction="column" alignItems="center">
          <Typography variant="h5">Loading</Typography>
          <LoadingIcon width={134} height={11} />
        </Grid>
      )}
      <div ref={ref} />
    </div>
  );
};

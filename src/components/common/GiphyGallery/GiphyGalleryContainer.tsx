import { FunctionComponent, useEffect, useState } from "react";
import { useSearchContext } from "../../../contexts/search";
import { InifiteScrollResourceContainer } from "../InifiteScrollResource/InifiteScrollResourceContainer";
import { ImageGridContainer } from "../ImageGrid/ImageGridContainer";
import { ImageWithOptionsView } from "../Image/ImageWithOptionsView";
import * as React from "react";
import { getGiphyQueryUrl } from "../../../api/giphy";
import { IGiphyApiResponse } from "../../../api/giphy/interfaces";
import { GalleryHeaderView } from "./GiphyGalleryHeaderView";
import { generateResourceUrl } from "../../../utils/resource";
import { mapGiphyToImage } from "../../../utils/giphy";

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
 * Save re-renders and only re-render if api response changes.
 */
const ImageGridGalleryMemoized: FunctionComponent<{
  response: IGiphyApiResponse;
}> = React.memo(({ response }) => (
  <ImageGridContainer
    images={mapGiphyToImage(response)}
    ImageView={ImageWithOptionsView}
  />
));

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
  const [resourceUrl, setResourceUrl] = useState<{ url: string; next: string }>(
    generateResourceUrl(state, getGiphyQueryUrl)
  );
  const onDataLoaded = (response: IGiphyApiResponse) => {
    setFoundAction(response.data.length);
  };
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
    <>
      <GalleryHeaderView
        displaySearchResults={Boolean(state.query)}
        found={state.found}
      />
      <InifiteScrollResourceContainer
        url={resourceUrl.url}
        nextUrl={resourceUrl.next}
        render={(response: IGiphyApiResponse) => (
          <ImageGridGalleryMemoized response={response} />
        )}
        onCanLoadMore={canLoadMore}
        nextDataMerge={nextDataMerge}
        onDataLoaded={onDataLoaded}
        onNextDataLoaded={onNextDataLoaded}
      />
    </>
  );
};

import { useSearchContext } from "../search/hooks";
import { FavouriteContext, useFavourites } from "../favourite/hooks";
import { LocalStorage } from "../storage";
import { FunctionComponent, useEffect, useState } from "react";
import { Resource } from "../resource";
import { IGiphyApiResponse } from "../resource/interfaces";
import { ImageGrid } from "../grid";
import * as React from "react";
import { FavouriteImage } from "../image";
import { ISearchState } from "../search/hooks/types";

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
 * This component connect gallery container and the view which is used to render image inside gallery.
 *
 *
 * @param {function} getProviderResourceUrl
 * @constructor
 */
export const ImageGalleryContainer: FunctionComponent<{
  getProviderResourceUrl: (params: ISearchState) => string;
}> = ({ getProviderResourceUrl }) => {
  const { state, offset } = useSearchContext();
  const favouriteContext = useFavourites({ storage: LocalStorage });
  const [resourceUrl, setResourceUrl] = useState<{ url: string; next: string }>(
    generateResourceUrl(state, getProviderResourceUrl)
  );
  const onNextDataLoaded = () => offset(state.limit + state.offset);

  useEffect(() => {
    setResourceUrl(generateResourceUrl(state, getProviderResourceUrl));
  }, [state.query, state.limit, state.offset]);

  return (
    <FavouriteContext.Provider value={favouriteContext}>
      <Resource
        url={resourceUrl.url}
        nextUrl={resourceUrl.next}
        render={(response: IGiphyApiResponse) => (
          <ImageGrid images={response.data} ImageView={FavouriteImage} />
        )}
        nextDataMerge={nextDataMerge}
        onNextDataLoaded={onNextDataLoaded}
      />
    </FavouriteContext.Provider>
  );
};

import * as React from "react";
import { ReactNode, useEffect, useState } from "react";
import * as fetch from "isomorphic-fetch";

interface IResource<T> {
  url: string;
  render: (data: T) => ReactNode;
  onNextDataLoaded?: () => void;
  nextUrl?: string;
  nextDataMerge?: (next: T, current?: T) => T;
}
/**
 * Generic container component which interacts with remote resources.
 *
 * - load resources and pass resource data to presentational component.
 * - when there is next url component can load it and with previous data.
 *
 * @param {function} render
 * @param {string} url
 * @param {string} [nextUrl]
 * @param {function} [nextDataMerge]
 * @param {function} [onNextDataLoaded]
 *
 * @constructor
 */
export const Resource = <T extends object>({
  render,
  url,
  nextUrl,
  nextDataMerge,
  onNextDataLoaded,
}: IResource<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [remoteData, setRemoteData] = useState<T>();

  const canLoadMore = Boolean(nextUrl);
  const loadMore = () => {
    if (!nextUrl || !nextDataMerge) {
      return;
    }

    !isLoading && setIsLoading(true);

    (async function () {
      const response = await fetch(nextUrl);

      if (response.ok) {
        const more = await response.json();
        let merged = nextDataMerge(more, remoteData);

        setRemoteData(merged);
        onNextDataLoaded && onNextDataLoaded();
      }

      setIsLoading(false);
    })();
  };

  useEffect(() => {
    !isLoading && setIsLoading(true);

    (async function () {
      const response = await fetch(url);
      if (response.ok) {
        setRemoteData(await response.json());
      }

      setIsLoading(false);
    })();
  }, [url]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!remoteData) {
    return <div>Loading error.</div>;
  }

  return (
    <>
      {render(remoteData)}
      {canLoadMore && <button onClick={loadMore}>load</button>}
    </>
  );
};

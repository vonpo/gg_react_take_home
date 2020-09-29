import * as React from "react";
import { ReactNode, useEffect, useState } from "react";
import * as fetch from "isomorphic-fetch";

interface IResource<T> {
  url: string;
  render: (data: T) => ReactNode;
}

/**
 * Container component which interacts with remote resources.
 *
 * This function load resources and pass resource data to presentational component.
 *
 * @param {Function} render
 *
 * @constructor
 */
export const Resource = <T extends object>({ render, url }: IResource<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [remoteData, setRemoteData] = useState<T>();

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
    return <div>loading</div>;
  }

  if (!remoteData) {
    return <div>loading error</div>;
  }

  return <>{render(remoteData)}</>;
};

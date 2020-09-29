import * as React from "react";
import * as ReactDOM from "react-dom";
import { FunctionComponent, useEffect, useState } from "react";
import { Resource } from "./components/resource";
import { IGifApiResponse } from "./components/resource/interfaces";
import { GifGrid } from "./components/grid";
import {
  SearchContext,
  SearchContainer,
  useSearch,
  useSearchContext,
} from "./components/search";

import { getGiphyQueryUrl } from "./api/giphy";
import Grid from "@material-ui/core/Grid";

const element = document.createElement("div");

document.body.appendChild(element);

const ResourceUrlProvider = ({
  getProviderResourceUrl,
}: {
  getProviderResourceUrl: ({
    search,
    limit,
  }: {
    search: string;
    limit: number;
  }) => string;
}) => {
  const { state } = useSearchContext();
  const [resourceUrl, setResourceUrl] = useState<string>(
    getProviderResourceUrl({
      search: state.query,
      limit: state.limit,
    })
  );

  useEffect(() => {
    setResourceUrl(
      getProviderResourceUrl({
        search: state.query,
        limit: state.limit,
      })
    );
  }, [state.query, state.limit]);

  return (
    <Resource
      url={resourceUrl}
      render={(response: IGifApiResponse) => <GifGrid gifs={response.data} />}
    />
  );
};

const App: FunctionComponent = () => {
  const searchContext = useSearch();

  return (
    <SearchContext.Provider value={searchContext}>
      <Grid justify="center" direction="row">
        <SearchContainer />
      </Grid>
      <ResourceUrlProvider getProviderResourceUrl={getGiphyQueryUrl} />
    </SearchContext.Provider>
  );
};

ReactDOM.render(<App />, element);

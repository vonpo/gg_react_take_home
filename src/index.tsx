import * as React from "react";
import * as ReactDOM from "react-dom";
import { FunctionComponent } from "react";
import { SearchContext, useSearch } from "./components/search";
import { getGiphyQueryUrl } from "./api/giphy";
import { ImageGalleryContainer } from "./components/imageGallery";
import { AppHeader } from "./components/header";

const element = document.createElement("div");

document.body.appendChild(element);

const App: FunctionComponent = () => {
  const searchContext = useSearch();

  return (
    <SearchContext.Provider value={searchContext}>
      <AppHeader />
      <ImageGalleryContainer getProviderResourceUrl={getGiphyQueryUrl} />
    </SearchContext.Provider>
  );
};

ReactDOM.render(<App />, element);

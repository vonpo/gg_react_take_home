import { createContext, FunctionComponent, useContext } from "react";
import { ISearchState } from "../interfaces/search";
import { useSearch } from "../hooks/useSearch";
import * as React from "react";

/**
 * Search context.
 */
const SearchContext = createContext<{
  state: ISearchState;
  setSearchAction: (query: string) => void;
  setLimitAction: (limit: number) => void;
  setOffsetAction: (offset: number) => void;
  setFoundAction: (found: number) => void;
}>({
  state: { query: "", limit: 0, offset: 0, found: 0 },
  setLimitAction: (_: number) => {},
  setOffsetAction: (_: number) => {},
  setFoundAction: (_: number) => {},
  setSearchAction: (_: string) => {},
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchContextProvider: FunctionComponent<{
  searchQuery: string;
}> = ({ searchQuery, children }) => {
  const searchContext = useSearch({ searchQuery });

  return (
    <SearchContext.Provider value={searchContext}>
      {children}
    </SearchContext.Provider>
  );
};

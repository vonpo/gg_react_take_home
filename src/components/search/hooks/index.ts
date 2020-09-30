import {
  createContext,
  Reducer,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { ISearchState, ACTIONS } from "./types";
import { reducer } from "./reducer";

/**
 * Search context.
 */
export const SearchContext = createContext<{
  state: ISearchState;
  search: (query: string) => void;
  limit: (limit: number) => void;
  offset: (offset: number) => void;
  found: (found: number) => void;
}>({
  state: { query: "", limit: 0, offset: 0, found: 0 },
  limit: (limit: number) => {},
  offset: (offset: number) => {},
  found: (found: number) => {},
  search: (query: string) => {},
});

export const useSearchContext = () => useContext(SearchContext);

/**
 * Use search hook.
 *
 * Holds search state.
 * Returns search actions.
 *
 */
export const useSearch = ({ searchQuery }: { searchQuery: string }) => {
  const [state, dispatch] = useReducer<Reducer<ISearchState, ACTIONS>>(
    reducer,
    {
      query: searchQuery,
      limit: 20,
      offset: 0,
      found: 0,
    }
  );

  useEffect(() => {
    if (state.query !== searchQuery) {
      search(searchQuery);
    }
  }, [searchQuery]);

  const search = (query: string) => dispatch({ type: "SET_SEARCH", query });
  const limit = (limit: number) => dispatch({ type: "SET_LIMIT", limit });
  const offset = (offset: number) => dispatch({ type: "SET_OFFSET", offset });
  const found = (found: number) => dispatch({ type: "SET_FOUND", found });

  return { state, search, limit, offset, found };
};

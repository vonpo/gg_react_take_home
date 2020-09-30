import { createContext, Reducer, useContext, useReducer } from "react";
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
}>({
  state: { query: "", limit: 0, offset: 0 },
  limit: (limit: number) => {},
  offset: (offset: number) => {},
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
export const useSearch = () => {
  const [state, dispatch] = useReducer<Reducer<ISearchState, ACTIONS>>(
    reducer,
    {
      query: "",
      limit: 3,
      offset: 0,
    }
  );

  const search = (query: string) => dispatch({ type: "SET_SEARCH", query });
  const limit = (limit: number) => dispatch({ type: "SET_LIMIT", limit });
  const offset = (offset: number) => dispatch({ type: "SET_OFFSET", offset });

  return { state, search, limit, offset };
};

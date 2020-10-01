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
  setSearchAction: (query: string) => void;
  setLimitAction: (limit: number) => void;
  setOffsetAction: (offset: number) => void;
  setFoundAction: (found: number) => void;
}>({
  state: { query: "", limit: 0, offset: 0, found: 0 },
  setLimitAction: (limit: number) => {},
  setOffsetAction: (offset: number) => {},
  setFoundAction: (found: number) => {},
  setSearchAction: (query: string) => {},
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
      limit: 30,
      offset: 0,
      found: 0,
    }
  );

  useEffect(() => {
    if (state.query !== searchQuery) {
      setSearchAction(searchQuery);
      setOffsetAction(0);
    }
  }, [searchQuery]);

  const setSearchAction = (query: string) =>
    dispatch({ type: "SET_SEARCH", query });
  const setLimitAction = (limit: number) =>
    dispatch({ type: "SET_LIMIT", limit });
  const setOffsetAction = (offset: number) =>
    dispatch({ type: "SET_OFFSET", offset });
  const setFoundAction = (found: number) =>
    dispatch({ type: "SET_FOUND", found });

  return {
    state,
    setSearchAction,
    setLimitAction,
    setOffsetAction,
    setFoundAction,
  };
};

import { Reducer, useEffect, useReducer } from "react";
import { ISearchState } from "../interfaces/search";
import { SEARCH_ACTIONS } from "../types/search";
import { search } from "../reducers/search";

/**
 * Use search hook.
 *
 * Holds search state.
 * Returns search actions.
 *
 */
export const useSearch = ({ searchQuery }: { searchQuery: string }) => {
  const [state, dispatch] = useReducer<Reducer<ISearchState, SEARCH_ACTIONS>>(
    search,
    {
      query: searchQuery,
      limit: 40,
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

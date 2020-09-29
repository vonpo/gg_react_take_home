import { createContext, Reducer, useContext, useReducer } from "react";

type SEARCH_ACTIONS = "SEARCH_START" | "SEARCH_SUCCESS" | "SEARCH_ERROR";

interface ACTIONS {
  type: SEARCH_ACTIONS;
  data: any;
}

interface ISearchState {
  query: string;
  limit: number;
}

/**
 * Search reducer handles search actions.
 *
 * @param state
 * @param action
 */
const searchReducer = (state: ISearchState, action: ACTIONS) => {
  switch (action.type) {
    case "SEARCH_START":
      return {
        ...state,
        query: action.data,
      };
  }

  return state;
};

/**
 * Search context.
 */
export const SearchContext = createContext<{
  state: ISearchState;
  search: (query: string) => void;
}>({
  state: { query: "", limit: 0 },
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
    searchReducer,
    {
      query: "",
      limit: 3,
    }
  );

  const search = (query: string) =>
    dispatch({ type: "SEARCH_START", data: query });

  return { state, search };
};

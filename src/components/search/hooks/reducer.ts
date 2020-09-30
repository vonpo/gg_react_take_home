import { ISearchState, ACTIONS } from "./types";

/**
 * Search reducer handles search actions.
 *
 * @param state
 * @param action
 */
export const reducer = (state: ISearchState, action: ACTIONS) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        query: action.query,
        offset: 0,
      };
    case "SET_OFFSET":
      return {
        ...state,
        offset: action.offset,
      };
    case "SET_LIMIT":
      return {
        ...state,
        limit: action.limit,
      };
  }

  return state;
};

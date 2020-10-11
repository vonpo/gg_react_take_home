/**
 * Search reducer handles search actions.
 *
 * @param state
 * @param action
 */
import { SEARCH_ACTIONS } from "../types/search";
import { ISearchState } from "../interfaces/search";

export const search = (state: ISearchState, action: SEARCH_ACTIONS) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        query: action.query,
        offset: 0,
        found: 0,
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
    case "SET_FOUND":
      return {
        ...state,
        found: action.found,
      };
  }

  return state;
};

import { IFavouriteState, ACTIONS } from "./types";

/**
 * Favourites reducer handle action add and remove.
 *
 * Store data as Map as it's faster to access items then iterating over each element when using array.
 *
 * @param {IFavouriteState} state
 * @param {ACTIONS} action
 */
export const reducer = (state: IFavouriteState, action: ACTIONS) => {
  let favourites: Map<string, object>;

  switch (action.type) {
    case "SET_FAVOURITES":
      return {
        ...state,
        favourites: new Map<string, object>(
          action.data.map(({ id, ...rest }: { id: string }) => [id, rest])
        ),
      };
    case "FAVOURITE_ADD":
      favourites = new Map(state.favourites);
      favourites.set(action.data.id, action.data.meta);

      return {
        ...state,
        favourites,
      };
    case "FAVOURITE_REMOVE":
      favourites = new Map(state.favourites);
      favourites.delete(action.data);

      return {
        ...state,
        favourites,
      };
  }

  return state;
};

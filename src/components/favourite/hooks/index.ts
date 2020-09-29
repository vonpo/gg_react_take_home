import { createContext, Reducer, useContext, useReducer } from "react";

interface IFavouriteItem {
  id: string;
  meta: object;
}

interface IFavouriteState {
  favourites: IFavouriteItem[];
}

type FAVOURITE_ACTIONS = "FAVOURITE_ADD" | "FAVOURITE_REMOVE";

interface ACTIONS {
  type: FAVOURITE_ACTIONS;
  data: any;
}

/**
 * Favourite context.
 *
 * - returning favourites
 * - add favourite
 * - remove favourite
 *
 */
export const FavouriteContext = createContext<{
  state: IFavouriteState;
  add: (id: string) => void;
  remove: (id: string) => void;
}>({
  state: { favourites: [] },
  add: (id: string) => {},
  remove: (id: string) => {},
});

/**
 * Favourites reducer handles favourites actions.
 *
 * @param state
 * @param action
 */
export const reducer = (state: IFavouriteState, action: ACTIONS) => {
  switch (action.type) {
    case "FAVOURITE_ADD":
      return {
        ...state,
        query: action.data,
      };
    case "FAVOURITE_REMOVE":
      return {
        ...state,
        query: action.data,
      };
  }

  return state;
};

export const useFavouriteContext = () => useContext(FavouriteContext);

/**
 * Use favourite hook.
 *
 *
 */
export const useFavourites = () => {
  const [state, dispatch] = useReducer<Reducer<IFavouriteState, ACTIONS>>(
    reducer,
    {
      favourites: [],
    }
  );

  const add = (id: string) => dispatch({ type: "FAVOURITE_ADD", data: id });
  const remove = (id: string) =>
    dispatch({ type: "FAVOURITE_REMOVE", data: id });

  return { state, add, remove };
};
